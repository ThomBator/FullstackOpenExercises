const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    value = value.toString() + "%";
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
