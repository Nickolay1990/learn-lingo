import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthSection from "../AuthSection/AuthSection";
import ThemeButton from "../ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <header className={css.pageHeader}>
      <div className={css.logoBlock}>
        <Logo />
        <ThemeButton />
      </div>
      <div className={css.navWrapper}>
        <Navigation />
        <AuthSection />
      </div>
    </header>
  );
};
