import style from "./AboutMe.module.scss";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { AppContext } from "../../Context/context";
import { useContext, useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import TextContent from "../../components/AboutMeComponents/TextContent/TextContent";
import { AboutMeLabels } from "../../types/types";
import Skills from "../../components/AboutMeComponents/Skills/Skills";
import Projects from "../../components/AboutMeComponents/Projects/Projects";
import Connect from "../../components/AboutMeComponents/Connect/Connect";
import Adventure from "../../components/AboutMeComponents/Adventure/Adventure";
import { motion, AnimatePresence } from "motion/react";

const AboutMe = () => {
  const { setShowAboutMePage } = useContext(AppContext);
  const [navValue, setNavValue] = useState(0);

  const pageTransition = {
    type: "spring",
    stiffness: 200,
    damping: 30,
    mass: 0.7,
  };

  const components = [
    {
      id: "aboutme",
      component: <TextContent label={AboutMeLabels.ABOUT_ME_TEXT} />,
    },
    { id: "skills", component: <Skills label={AboutMeLabels.ABOUT_ME_SKILLS} /> },
    {
      id: "projects",
      component: <Projects label={AboutMeLabels.ABOUT_ME_PROJECTS} />,
    },
    {
      id: "connect",
      component: <Connect label={AboutMeLabels.ABOUT_ME_CONNECT} />,
    },
    {
      id: "adventure",
      component: <Adventure label={AboutMeLabels.ABOUT_ME_ADVENTURE} />,
    },
  ];

  const CurrentComponent = components[navValue];
  console.log('current component', CurrentComponent)
  const shouldShowMirrorMe = CurrentComponent.id !== 'connect' && CurrentComponent.id !== 'adventure'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -50 }}
      transition={pageTransition}
      className={style["page-container"]}
    >
      <div className={style["page"]}>
        <AnimatePresence>
          {
            shouldShowMirrorMe ? (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...pageTransition, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setShowAboutMePage(false)}
                className={style["me-div"]}
                title="Back to splash"
                
              >
                <img className={style["me"]} src={MirrorMe} alt="Its a meee Andres" />
              </motion.div>

            ) : null
          }
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...pageTransition, delay: 0.3 }}
          className={style["content-div"]}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={CurrentComponent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {CurrentComponent.component}
            </motion.div>
          </AnimatePresence>
          <Navigation navValue={navValue} setNavValue={setNavValue} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
