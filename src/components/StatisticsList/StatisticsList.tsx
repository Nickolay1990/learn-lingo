import css from "./StatisticsList.module.css";
import StatisticsListItem from "./StatisticsListItem/StatisticsListItem";

const StatisticsList = () => {
  return (
    <ul className={css.list}>
      <StatisticsListItem count="32,000 +" text="Experienced tutors" />
      <StatisticsListItem count="300,000 +" text="5-star tutor reviews" />
      <StatisticsListItem count="120 +" text="Subjects taught" />
      <StatisticsListItem count="200 +" text="Tutor nationalities" />
    </ul>
  );
};

export default StatisticsList;
