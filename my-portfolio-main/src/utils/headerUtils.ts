import {
  faCode,
  faEarthAmericas,
  faHammer,
  faLaptopCode,
  faMusic,
  faTools,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderTitleLabels } from "../types/types";

const headerTitleIconMap = {
  [HeaderTitleLabels.SOFTWARE_ENGINEER]: faCode,
  [HeaderTitleLabels.BUILDS]: faTools,
  [HeaderTitleLabels.CARPETNER]: faHammer,
  [HeaderTitleLabels.WEB_DEVELOPER]: faLaptopCode,
  [HeaderTitleLabels.WORLD_TRAVELER]: faEarthAmericas,
  [HeaderTitleLabels.MUSICIAN]: faMusic,
};

export const mapIconToTitle = (title: string): IconDefinition => {
  const icon: IconDefinition = headerTitleIconMap[title as HeaderTitleLabels];

  return icon;
};
