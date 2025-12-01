import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user.store";
import css from "./LogoutButton.module.css";
import Cookies from "js-cookie";

const LogOutButton = () => {
  const clearUser = useUserStore((state) => state.clearUser);
  const navigation = useNavigate();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    clearUser();
    navigation("/");
  };

  return (
    <button className={css.btn} onClick={handleLogout}>
      <svg className={css.icon}>
        <use href="/symbol-defs.svg#icon-log-in"></use>
      </svg>
      <span className={css.text}>Log out</span>
    </button>
  );
};

export default LogOutButton;
