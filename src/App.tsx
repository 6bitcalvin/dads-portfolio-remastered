import { useContext } from "react";
import style from "./App.module.scss";
import { AppContext } from "./Context/context";
import Splash from "./Pages/Splash/Splash";
//import { Backdrop } from "@mui/material";
import Header from "./components/Header/Header";
import AboutMe from "./Pages/AboutMe/AboutMe";

function App() {
  const { showAboutMePage, showSplashPage } = useContext(AppContext);
  // const [backdropOpen, setBackdropOpen] = useState(false);

  // useEffect(() => {
  //   if (isPlaying) setBackdropOpen(true);
  // }, [isPlaying]);

  return (
    <div className={style["app"]}>
      <Header />
      {/* <Backdrop
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      ></Backdrop> */}

      {showSplashPage && !showAboutMePage ? <Splash /> : null}

      {showAboutMePage ? <AboutMe /> : null}
    </div>
  );
}

export default App;
