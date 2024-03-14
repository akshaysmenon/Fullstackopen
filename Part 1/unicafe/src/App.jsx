import { useEffect } from "react";
import { useState } from "react";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  const calculateStats = () => {
    const total = good + neutral + bad;
    setTotal(total);
    setAverage((good - bad) / total);
    setPositive(good / total);
  };
  const isStatsAvailable = () => good || neutral || bad;
  useEffect(() => {
    calculateStats();
  }, [good, neutral, bad]);

  return (
    <>
      <Banner bannerText="Give Feedback" />
      <Button buttonText="Good" handleClick={handleGoodClick} />
      <Button buttonText="Neutral" handleClick={handleNeutralClick} />
      <Button buttonText="Bad" handleClick={handleBadClick} />
      <Banner bannerText="Statistics" />
      {isStatsAvailable() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      ) : <h4>No feedback given</h4>}
    </>
  );
};

export default App;
