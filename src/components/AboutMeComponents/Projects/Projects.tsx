import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import { IoHammer } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { FaFish } from "react-icons/fa6";
import { motion } from "motion/react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import style from "./Projects.module.scss";

const Projects = (props: AboutMeContentProps) => {
  const { label } = props;

  const projectLinks = [
    {
      Icon: IoHammer,
      title: "Andres Wood Portfolio",
      href: "https://andresmillsgallego.github.io/wood-portfolio/#/",
      color: "#D2691E", // A nice brown for wood
    },
    {
      Icon: CiViewList,
      title: "To-Do-List",
      href: "https://andresmillsgallego.github.io/To-Do-List/",
      color: "#6495ED", // A classic blue for lists
    },
    {
      Icon: FaFish,
      title: "Pat's Salmon Cookies",
      href: "https://andresmillsgallego.github.io/cookie-stand/index.html#main-body",
      color: "#FA8072", // A salmon-like color
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 },
    },
  };

  return (
    <AboutMeContainer heading="Some of My Projects" aria-label={label}>
      <motion.div
        className={style.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectLinks.map(({ Icon, title, href, color }) => (
          <Tooltip
            key={title}
            title={title}
            slots={{ transition: Fade }}
            placement="top"
            arrow
          >
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={style.projectLink}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={style.projectIcon} style={{ color }} />
            </motion.a>
          </Tooltip>
        ))}
      </motion.div>
    </AboutMeContainer>
  );
};

export default Projects;
