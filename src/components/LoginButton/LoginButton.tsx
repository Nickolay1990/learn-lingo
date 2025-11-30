import css from "./LoginButton.module.css";

interface LoginButtonProps {
  onOpen: () => void;
}

const LoginButton = ({ onOpen }: LoginButtonProps) => {
  return (
    <button className={css.btn} onClick={onOpen}>
      <svg className={css.icon}>
        <use href="/symbol-defs.svg#icon-log-in"></use>
      </svg>
      <span className={css.text}>Log in</span>
    </button>
  );
};

export default LoginButton;
