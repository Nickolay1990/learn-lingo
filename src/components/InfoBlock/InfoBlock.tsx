import css from "./InfoBlock.module.css";

interface InfoBlockProps {
  languages: string[];
  lesson_info: string;
  conditions: string[];
}

const InfoBlock = ({ languages, lesson_info, conditions }: InfoBlockProps) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Speaks:{" "}
        <span className={`${css.strong} ${css.underline}`}>
          {languages.join(", ")}
        </span>
      </p>
      <p className={css.text}>
        Lesson Info: <span className={css.strong}>{lesson_info}</span>
      </p>
      <p className={css.text}>
        Conditions: <span className={css.strong}>{conditions.join(" ")}</span>
      </p>
    </div>
  );
};

export default InfoBlock;
