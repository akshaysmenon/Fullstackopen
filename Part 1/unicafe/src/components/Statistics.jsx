const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <>
      <span>Good : {good}</span>
      <br />
      <span>Neutral : {neutral}</span>
      <br />
      <span>Bad : {bad}</span>
      <br />
      <span>Total : {total}</span>
      <br />
      <span>Average: {average}</span>
      <br />
      <span>Positive: {positive}</span>
    </>
  );
};

export default Statistics;
