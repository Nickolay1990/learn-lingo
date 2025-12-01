import LevelsListItem from "../LevelsListItem/LevelsListItem";
import css from "./LevelsList.module.css";

interface LevelsListProps {
  levels: string[];
  name: string;
}

const LevelsList = ({ levels, name }: LevelsListProps) => {
  return (
    <ul className={css.list}>
      {levels.map((level) => {
        return <LevelsListItem level={level} key={`${name} ${level}`} />;
      })}
    </ul>
  );
};

export default LevelsList;
