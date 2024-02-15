import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 18,
  });

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>
        Age de {person.firstName} : {person.age}
      </p>
      <button onClick={incrementAge}>Incrementation age</button>
      <button onClick={incrementCount}>Increment {count}</button>
    </>
  );
}

export default App;
