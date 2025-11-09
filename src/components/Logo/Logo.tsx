import css from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={css.logoWrapper}>
      <div className={css.spanWrapper}>
        <span className={`${css.logoUp} ${css.logoSpan}`}></span>
        <span className={`${css.logoDown} ${css.logoSpan}`}></span>
      </div>
      <p className={css.logoText}>LearnLingo</p>
    </a>
  );
};

export default Logo;
