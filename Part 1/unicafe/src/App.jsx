import { useState } from "react";
import Banner from "./components/Banner";
import Button from "./components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <Banner bannerText="Give Feedback" />
      <Button buttonText="Good" handleClick={handleGoodClick} />
      <Button buttonText="Neutral" handleClick={handleNeutralClick} />
      <Button buttonText="Bad" handleClick={handleBadClick} />
      <Banner bannerText="Statistics" />
      <span>Good : {good}</span> <br/>
      <span>Neutral : {neutral}</span> <br/>
      <span>Bad : {bad}</span>
    </>
  );
};

export default App;
