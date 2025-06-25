import { TbBrandTypescript } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { FaReact, FaJava, FaJira, FaSquareGithub } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaGitSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IconType } from "react-icons/lib";

export interface SkillIconData {
  title: string;
  Icon: IconType;
  iconProps: {
    className?: string;
    color: string;
  };
}

export const skillsIconsData: SkillIconData[] = [
  {
    title: "TypeScript",
    Icon: TbBrandTypescript,
    iconProps: {
      color: "#3178c6",
    },
  },
  {
    title: "HTML",
    Icon: TiHtml5,
    iconProps: {
      color: "#e34c26",
    },
  },
  {
    title: "React",
    Icon: FaReact,
    iconProps: {
      color: "#0081a3",
    },
  },
  {
    title: "GitHub",
    Icon: FaSquareGithub,
    iconProps: {
      color: "#000000",
    },
  },
  {
    title: "CSS",
    Icon: DiCss3,
    iconProps: {
      color: "#264de4",
    },
  },
  {
    title: "GraphQL",
    Icon: GrGraphQl,
    iconProps: {
      color: "#e535ab",
    },
  },
  {
    title: "Java",
    Icon: FaJava,
    iconProps: {
      color: "#007396",
    },
  },
  {
    title: "Springboot",
    Icon: BiLogoSpringBoot,
    iconProps: {
      color: "#6db33f",
    },
  },
  {
    title: "Git",
    Icon: FaGitSquare,
    iconProps: {
      color: "#3d2d00",
    },
  },
  {
    title: "Jira",
    Icon: FaJira,
    iconProps: {
      color: "#2684ff",
    },
  },
];
