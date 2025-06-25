import { useEffect, useContext } from "react";
import style from "./VolumeKnob.module.scss";
import { AppContext } from "../../../Context/context";
import { motion } from "motion/react";

const VolumeKnob = () => {
  const { isPlaying, setIsPlaying, song } = useContext(AppContext);

  // This effect handles the actual play/pause logic for the audio element
  useEffect(() => {
    if (isPlaying) {
      song.play();
    } else {
      song.pause();
    }
  }, [isPlaying, song]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const knobVariants = {
    playing: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
    paused: {
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={style["volume-div"]}
      onClick={handleClick}
      title="Play/Pause Music"
      variants={knobVariants}
      animate={isPlaying ? "playing" : "paused"}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    ></motion.div>
  );
};

export default VolumeKnob;
