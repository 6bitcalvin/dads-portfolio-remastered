import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import style from "./TextContent.module.scss";

const TextContent = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Hi, I'm Andres`} aria-label={label}>
      <div className={style["text-content-container"]}>
        <p>
          I am from Colombia originally, though I grew up and still live in
          Seattle. I am a life long woodworker and I love to learn new things. Im
          a full stack software developer specializing in front end development
          using JavaScript, CSS, HTML and the MERN stack.
        </p>
        <p>
          Background in construction and fine woodworking. Quick learner and
          adept problem solver always looking to embrace a new challenge. Strong
          skills in communication, leadership, quality control and customer
          relations. Passionate about technology, creativity and the quest of
          constant improvement.
        </p>
        <p>
          When I am not busy working, I love to spend time with my family. My
          passions include learning new languages, traveling the world and
          listening to/playing music. I love my mon fils!
        </p>
      </div>
    </AboutMeContainer>
  );
};

export default TextContent;
