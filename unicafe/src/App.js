import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [avg, setAvg] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const goodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    const divisor = newGood + bad + neutral;
    setAvg((newGood * 1 + neutral * 0 + bad * -1) / divisor);
    setTotal(newGood + neutral + bad);
    setPositive((newGood / divisor) * 100);
    setFeedback(true);
  };

  const badClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    const divisor = good + newBad + neutral;
    setAvg((good * 1 + neutral * 0 + newBad * -1) / divisor);
    setTotal(good + neutral + newBad);
    setPositive((good / divisor) * 100);
    setFeedback(true);
  };

  const neutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    const divisor = good + bad + newNeutral;
    setAvg((good * 1 + newNeutral * 0 + bad * -1) / divisor);
    setTotal(good + newNeutral + bad);
    setPositive((good / divisor) * 100);
    setFeedback(true);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} handleClick={goodClick} />
      <Button text={"neutral"} handleClick={neutralClick} />
      <Button text={"bad"} handleClick={badClick} />
      {feedback && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          avg={avg}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
