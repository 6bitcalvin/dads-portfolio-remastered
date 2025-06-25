import { useContext } from "react";
import { AppContext } from "../../Context/context";
import { HiOutlinePlayPause, HiPlayPause } from "react-icons/hi2";
import { RiSkipBackMiniFill, RiStopMiniFill } from "react-icons/ri";
import { PiRepeatOnceLight, PiRepeatOnceBold } from "react-icons/pi";
import Vinyl from "../../assets/Vinyl.png";

import style from "./SongControls.module.scss";

const SongControls = () => {
  const { isPlaying, setIsPlaying, song, handleSongLoop, handlePlayPause } =
    useContext(AppContext);

  const handleSongRestart = () => {
    song.currentTime = 0;
    song.play();
  };

  const handleSongStop = () => {
    song.pause();
    song.currentTime = 0;
    song.loop = false;
    setIsPlaying(false);
  };

  const PlayPauseButton = () => (
    <div onClick={() => handlePlayPause()} className={style["control-icon"]}>
      {isPlaying ? <HiPlayPause /> : <HiOutlinePlayPause />}
    </div>
  );

  const SongLoopButton = () => (
    <div className={style["control-icon"]} onClick={() => handleSongLoop()}>
      {song.loop ? <PiRepeatOnceBold /> : <PiRepeatOnceLight />}
    </div>
  );

  return (
    <div className={style["song-controls"]}>
      <img
        className={`${style["record"]} ${
          isPlaying ? style["record-playing"] : ""
        }`}
        src={Vinyl}
      />
      <RiSkipBackMiniFill
        className={style["control-icon"]}
        onClick={() => handleSongRestart()}
      />
      <PlayPauseButton />
      <RiStopMiniFill
        className={style["control-icon"]}
        onClick={() => handleSongStop()}
      />
      <SongLoopButton />
    </div>
  );
};

export default SongControls;
