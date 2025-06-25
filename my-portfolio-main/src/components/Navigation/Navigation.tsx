import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import StarIcon from "@mui/icons-material/Star";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import style from "./Navigation.module.scss";

interface NavigationProps {
  navValue: number;
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

const Navigation = (props: NavigationProps) => {
  const { navValue, setNavValue } = props;

  const navActionStyles = {
    color: "var(--text-secondary)",
    transition: "color 0.3s ease",
    "& .MuiSvgIcon-root": {
      transition: "transform 0.3s ease",
    },
    "&.Mui-selected": {
      color: "var(--highlight-cta-magenta)",
      "& .MuiSvgIcon-root": {
        transform: "scale(1.1)",
      },
    },
    "&:hover": {
      color: "var(--text-light)",
    },
  };

  return (
    <div className={style["navigation-container"]}>
      <BottomNavigation
        showLabels
        className={style["navigation"]}
        value={navValue}
        onChange={(event, newValue) => setNavValue(newValue)}
      >
        <BottomNavigationAction
          sx={navActionStyles}
          label="About Me"
          icon={
            navValue === 0 ? (
              <SentimentVerySatisfiedIcon />
            ) : (
              <SentimentSatisfiedIcon />
            )
          }
        />
        <BottomNavigationAction
          sx={navActionStyles}
          label="Skills"
          icon={<StarIcon />}
        />
        <BottomNavigationAction
          sx={navActionStyles}
          label="Projects"
          icon={<ConstructionIcon />}
        />
        <BottomNavigationAction
          sx={navActionStyles}
          label="Connect"
          icon={<ContactPageIcon />}
        />
        <BottomNavigationAction
          sx={navActionStyles}
          label="Adventure"
          icon={<TravelExploreIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
