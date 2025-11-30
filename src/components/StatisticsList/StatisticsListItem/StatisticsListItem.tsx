import css from "./StatisticsListItem.module.css";

interface StatisticsListItemProps {
  count: string;
  text: string;
}

const StatisticsListItem = ({ count, text }: StatisticsListItemProps) => {
  return (
    <li>
      <p className={css.row}>
        <span className={css.count}>{count}</span>
        <span className={css.text}>{text}</span>
      </p>
    </li>
  );
};

export default StatisticsListItem;
