import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <a href="/" className={css.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="/teachers" className={css.navLink}>
            Teachers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
