const Statistics = ({ total, average, positive }) => {
  return (
    <>
      <br/>  
      <span>Total : {total}</span>
      <br/>  
      <span>Average: {average}</span>
      <br/>  
      <span>Positive: {positive}</span>
    </>
  );
};

export default Statistics;
