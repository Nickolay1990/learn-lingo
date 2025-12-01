import css from "./LevelsListItem.module.css";

interface LevelsListItemProps {
  level: string;
}

const LevelsListItem = ({ level }: LevelsListItemProps) => {
  return (
    <li className={css.item}>
      <p className={css.text}>#{level}</p>
    </li>
  );
};

export default LevelsListItem;
