import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { SkillIconData, skillsIconsData } from "./data/skillsIconData";
import {
  AboutMeContentProps,
  splitSkillsArray,
} from "../../../utils/aboutMeUtils";
import { motion } from "motion/react";
import style from "./Skills.module.scss";

interface SkillIconProps {
  iconData: SkillIconData;
}

const Skills = (props: AboutMeContentProps) => {
  const { label } = props;
  const skillsDataRows = splitSkillsArray(skillsIconsData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const SkillIcon = ({ iconData }: SkillIconProps) => {
    const { title, Icon, iconProps } = iconData;
    const iconClassName = `${style["skill-icon"]}`;

    return (
      <motion.div
        variants={itemVariants}
        className={style["skill-icon-wrapper"]}
      >
        <Tooltip title={title} slots={{ transition: Fade }} placement="top">
          <Icon className={iconClassName} color={iconProps.color} />
        </Tooltip>
      </motion.div>
    );
  };

  return (
    <AboutMeContainer heading={`My skills`} aria-label={label}>
      <motion.div
        className={style["container"]}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillsDataRows.map((row, rowIndex) => (
          <div className={style["skills-row"]} key={rowIndex}>
            {row.map((skill, index) => (
              <SkillIcon iconData={skill} key={`${skill.title}-${index}`} />
            ))}
          </div>
        ))}
      </motion.div>
    </AboutMeContainer>
  );
};

export default Skills;
