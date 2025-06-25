import { ReactNode, useMemo, useState } from "react";
import { AppContext } from "./context";
import ClaireDeLune from "../assets/audio/ClairDeLune.mp3";
import { HeaderTitleLabels } from "../types/types";

export const AppContextProvider = (props: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplashPage, setShowSplashPage] = useState(true);
  const [showAboutMePage, setShowAboutMePage] = useState(false);
  const [title, setTitle] = useState<string>(
    HeaderTitleLabels.SOFTWARE_ENGINEER
  );
  const [titles, setTitles] = useState<string[]>(
    Object.values(HeaderTitleLabels)
  );
  const [animate, setAnimate] = useState<boolean>(true);

  const song = useMemo(() => {
    const audio = new Audio(ClaireDeLune);
    audio.addEventListener("ended", () => {
      if (!audio.loop) {
        setIsPlaying(false);
      }
    });
    return audio;
  }, []);

  const handleTitleChange = () => {
    if (animate) return;

    const titleIndex = Math.floor(Math.random() * titles.length);
    const selectedTitle = titles[titleIndex];
    const filteredTitles = titles.filter(
      (currentTitle) => currentTitle !== selectedTitle && currentTitle !== title
    );
    const updatedTitles = filteredTitles.length
      ? filteredTitles
      : Object.values(HeaderTitleLabels);

    setTitle(selectedTitle);
    setTitles(updatedTitles);
    setAnimate(true);
  };

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        showSplashPage,
        setShowSplashPage,
        showAboutMePage,
        setShowAboutMePage,
        song,
        handleTitleChange,
        title,
        animate,
        setAnimate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
