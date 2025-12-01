import { Link } from "react-router-dom";
import css from "./HeroWelcome.module.css";

const HeroWelcome = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.HeroTitile}>
        Unlock your potential with the best{" "}
        <span className={css.italic}>language</span> tutors
      </h1>
      <p className={css.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Link to="/teachers" className={css.btn}>
        Get started
      </Link>
    </div>
  );
};

export default HeroWelcome;
