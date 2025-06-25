import { LuTrafficCone } from "react-icons/lu";
import style from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <div className={style["container"]}>
      <LuTrafficCone className={style["traffic-cone-icon"]} />
      <div className={style["text-content-container"]}>
        <span className={style["text-content"]}>Work in progress...</span>
        <span className={style["text-coming-soon"]}>Coming soon!</span>
      </div>
      <LuTrafficCone className={style["traffic-cone-icon"]} />
    </div>
  );
};

export default ComingSoon;
