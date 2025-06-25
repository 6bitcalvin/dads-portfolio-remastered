import style from "./Keyboard.module.scss";
import { motion } from "motion/react";

interface KeyProps {
  content: string;
  variant?: "light" | "highlight";
  keyContainerClass?: string;
  onClick?: () => void;
  title?: string;
}

const Key = (props: KeyProps) => {
  const { content, variant, keyContainerClass, onClick, title } = props;
  const keyVariantClass = variant ? style[variant] : "";
  const containerClass = keyContainerClass ? style[keyContainerClass] : "";

  const handleClick = onClick ? onClick : () => {};

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`${style["key"]} ${keyVariantClass} ${containerClass}`}
      onClick={() => handleClick()}
      title={title}
    >
      <span className={style["key-content"]}>{content}</span>
    </motion.div>
  );
};

export default Key;
