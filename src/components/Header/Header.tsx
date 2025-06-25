import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/context";
import { mapIconToTitle } from "../../utils/headerUtils";

const Header = () => {
  const {
    setShowSplashPage,
    setShowAboutMePage,
    title,
    handleTitleChange,
    animate,
    setAnimate,
  } = useContext(AppContext);

  const handleIconClick = () => {
    setShowSplashPage(true);
    setShowAboutMePage(false);
  };

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 2300);
    }
  }, [animate, setAnimate]);

  return (
    <div className={style["header"]}>
      <div className={style["header-title"]}>
        <FontAwesomeIcon
          icon={mapIconToTitle(title)}
          onClick={() => handleIconClick()}
          className={animate ? style["animated-code-icon"] : style["code-icon"]}
        />

        <div className={style["header-name"]}>
          <span>Andres Mills Gallego</span> <br />
          <div className={style["title"]}>
            <span
              className={
                animate ? style["animated-title"] : style["carat-only"]
              }
              onClick={handleTitleChange}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
