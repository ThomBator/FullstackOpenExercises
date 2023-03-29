const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part}: {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return <Part part={part.name} exercise={part.exercises} />;
      })}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, part) => (accumulator += part.exercises),
    0
  );
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  );
};

export default App;
