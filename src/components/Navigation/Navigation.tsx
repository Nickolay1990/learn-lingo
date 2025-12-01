import { useUserStore } from "../../stores/user.store";
import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const user = useUserStore((state) => state.user);

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/teachers" className={css.navLink}>
            Teachers
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/favorite" className={css.navLink}>
              Favorite
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
