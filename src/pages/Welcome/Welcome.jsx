import CaloriesCount from "../../components/CaloriesCount";
import SignInBtn from "../../components/SignInForm/SignInBtn";
import SignUpBtn from "../../components/SignUpForm/SignUpBtn";
import VideoCount from "../../components/VideoCount";
import css from "./Welcome.module.css";

import { NavLink } from "react-router-dom";
// import symbolDefs from "../../assets/images/symbol-defs.svg";
const Welcome = () => {
  return (
    <div className={css.welcomeBackground}>
      <div className={css.container}>
        <div className={css.linePosition}>
          <h1 className={css.title}>
            Transforming your <span className={css.bodyLine}>body</span> shape
            with Power Pulse
          </h1>
        </div>
        <div className={css.buttonsLine}>
          <NavLink to="/signup">
            <SignUpBtn />
          </NavLink>
          <NavLink to="/signin">
            <SignInBtn />
          </NavLink>
        </div>
        <VideoCount />
        <CaloriesCount />
      </div>
    </div>
  );
};

export default Welcome;
