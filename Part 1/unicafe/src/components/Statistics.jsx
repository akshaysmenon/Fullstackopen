import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive} suffix="%"/>
    </>
  );
};

export default Statistics;
