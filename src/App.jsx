import { useState } from "react";

function App() {
  //   const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 18,
  });

  const increment = () => {
    //setCount(count + 1)
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <>
      <p>Age de {person.firstName} : {person.age}</p>
      <button onClick={increment}>Increment</button>
    </>
  );

}

export default App;
