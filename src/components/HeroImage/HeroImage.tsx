import css from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="/68e4226188648a055ee1b42bed644f46-sticker 1.png"
        alt="smiled girl"
      />
      <div className={css.note}>
        <svg className={css.icon}>
          <use href="/symbol-defs.svg#icon-apple"></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroImage;
