import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className={css.pageHeader}>
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
  );
};
