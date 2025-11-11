import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthSection from "../AuthSection/AuthSection";

export const Header = () => {
  return (
    <header className={css.pageHeader}>
      <Logo />
      <Navigation />
      <AuthSection />
    </header>
  );
};
