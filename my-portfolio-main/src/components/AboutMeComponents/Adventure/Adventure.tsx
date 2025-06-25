import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "motion/react";
import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import style from "./Adventure.module.scss";
import { IoClose } from "react-icons/io5";

// --- Data for our locations ---
const places = [
  { 
    name: "Bogotá, Colombia", 
    coordinates: { lat: 4.7110, lon: -74.0721 }, 
    color: "#FFFF00" 
  },
  { 
    name: "Paris, France", 
    coordinates: { lat: 48.8566, lon: 2.3522 }, 
    color: "#FF00FF" 
  },
  { 
    name: "Tokyo, Japan", 
    coordinates: { lat: 35.6895, lon: 139.6917 }, 
    color: "#FF4500" 
  },
  { 
    name: "Sydney, Australia", 
    coordinates: { lat: -33.8688, lon: 151.2093 }, 
    color: "#00FF00" 
  },
  { 
    name: "Seattle, USA", 
    coordinates: { lat: 47.6062, lon: -122.3321 }, 
    color: "#00FFFF" 
  },
];

// --- Helper function to convert lat/lon to a 3D vector ---
function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// --- A single clickable marker on the globe ---
const Marker = ({ place, onClick }: { place: (typeof places)[0], onClick: () => void }) => (
  <mesh
    position={latLonToVector3(place.coordinates.lat, place.coordinates.lon, 2.5)}
    onClick={(e) => {
      e.stopPropagation(); // Prevents the click from passing through to the globe
      onClick();
    }}
    onPointerOver={(_e) => (document.body.style.cursor = "pointer")}
    onPointerOut={(_e) => (document.body.style.cursor = "auto")}
  >
    <sphereGeometry args={[0.05, 16, 16]} />
    <meshStandardMaterial color={place.color} emissive={place.color} emissiveIntensity={3} toneMapped={false} />
  </mesh>
);

// --- The main Globe component ---
const Globe = ({ onMarkerClick }: { onMarkerClick: (place: any) => void }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useMemo(() => new THREE.TextureLoader().load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg"), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial map={texture} color="white" metalness={0.1} roughness={0.9} />
      </Sphere>
      {places.map((place) => (
        <Marker key={place.name} place={place} onClick={() => onMarkerClick(place)} />
      ))}
    </group>
  );
};

// --- The main Adventure component that ties everything together ---
const Adventure = (props: AboutMeContentProps) => {
  const { label } = props;
  const [selectedPlace, setSelectedPlace] = useState<(typeof places)[0] | null>(null);

  return (
    <AboutMeContainer heading="My Adventures" aria-label={label}>
      <div className={style.adventureContainer}>
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={2.5} />
          <Globe onMarkerClick={setSelectedPlace} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={4}
            maxDistance={15}
            rotateSpeed={0.4}
          />
        </Canvas>

        <AnimatePresence>
          {selectedPlace && (
            <motion.div
              className={style.infoBox}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button className={style.closeButton} onClick={() => setSelectedPlace(null)}>
                <IoClose />
              </button>
              <h3>{selectedPlace.name}</h3>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
        <div className={style.instructions}>
          Click on a glowing point to see the location.
        </div>
    </AboutMeContainer>
  );
};

export default Adventure;
