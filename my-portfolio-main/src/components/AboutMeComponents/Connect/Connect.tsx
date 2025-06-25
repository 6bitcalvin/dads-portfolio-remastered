import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import FranceMe from "../../../assets/FranceMe.png";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { motion } from "motion/react";
import style from "./Connect.module.scss";

const Connect = (props: AboutMeContentProps) => {
  const { label } = props;

  const connectLinks = [
    {
      Icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/andres-mills-gallego/",
      color: "#0077B5",
    },
    {
      Icon: FaSquareGithub,
      text: "GitHub",
      href: "https://github.com/AndresMillsGallego",
      color: "#f5f0ff",
    },
    {
      Icon: CiMail,
      text: "Email",
      href: "mailto:andresmillswork@gmail.com",
      color: "#ab98d9",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <AboutMeContainer heading="Let's Connect" aria-label={label}>
      <div className={style.connectContainer}>
        <motion.div
          className={style.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <img src={FranceMe} alt="Andres in France" className={style.image} />
        </motion.div>
        <motion.div
          className={style.linksWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {connectLinks.map(({ Icon, text, href, color }) => (
            <motion.a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkItem}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={style.icon} style={{ color }} />
              <span className={style.linkText}>{text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </AboutMeContainer>
  );
};

export default Connect;
