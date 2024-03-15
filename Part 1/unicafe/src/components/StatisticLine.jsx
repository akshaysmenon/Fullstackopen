const StatisticLine = ({ text, value, suffix }) => {
  return (
    <>
      <span>{text} : {value} {suffix ? suffix : null}</span>
      <br />
    </>
  );
};

export default StatisticLine;
