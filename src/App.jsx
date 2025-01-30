const App = () => {
  const fruits = ["Apples", "Bananas", "Oranges"];

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
