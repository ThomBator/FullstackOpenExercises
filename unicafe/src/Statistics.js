import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, avg, positive }) => {
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="avg" value={avg} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
