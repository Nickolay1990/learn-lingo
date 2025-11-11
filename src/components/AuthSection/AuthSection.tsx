import LoginButton from "../LoginButton/LoginButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import css from "./AuthSection.module.css";

const AuthSection = () => {
  return (
    <div className={css.wrapper}>
      <LoginButton />
      <RegisterButton />
    </div>
  );
};

export default AuthSection;
