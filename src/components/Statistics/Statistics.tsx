import StatisticsList from "../StatisticsList/StatisticsList";
import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.wrapper}>
      <StatisticsList />
    </div>
  );
};

export default Statistics;
