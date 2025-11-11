import css from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <button className={css.btn}>
      <svg className={css.icon}>
        <use href="/symbol-defs.svg#icon-log-in"></use>
      </svg>
      <span className={css.text}>Log in</span>
    </button>
  );
};

export default LoginButton;
