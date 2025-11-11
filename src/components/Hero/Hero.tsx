import HeroWelcome from "../HeroWelcome/HeroWelcome";
import HeroImage from "../HeroImage/HeroImage";

import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.wrapper}>
      <HeroWelcome />
      <HeroImage />
    </div>
  );
};

export default Hero;
