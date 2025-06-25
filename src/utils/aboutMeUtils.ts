import { SkillIconData } from "../components/AboutMeComponents/Skills/data/skillsIconData";
import { AboutMeLabels } from "../types/types";

export interface AboutMeContentProps {
  label: AboutMeLabels;
}

export const splitSkillsArray = (skills: SkillIconData[]) => {
  if (!skills.length) return [];

  const midpoint = Math.ceil(skills.length / 2);

  return [skills.slice(0, midpoint), skills.slice(midpoint)];
};

export const shuffleSkills = (skills: SkillIconData[]) => {
  for (let i = skills.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [skills[i], skills[j]] = [skills[j], skills[i]];
  }
  return skills;
};
