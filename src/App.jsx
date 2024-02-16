import { useState } from "react";

function App() {
    //* EXEMPLE 2 : 
      // * First Method : formulaire controler
    // const [firstName, setFirstName] = useState('John Doe')

    // const handleChange = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const reset = () => {
    //     setFirstName('')
    // }

    // return <form>
    //     <input type="text" value={firstName} onChange={handleChange}/>

    //     {firstName}

    //     <button type="button" onClick={reset}>Reset</button>

    // </form>

      //* Second Method : formulaire non controler

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(new FormData(e.target))
    }

    const [checked, setChecked] = useState(true)

    const handleChecked = () => {
        setChecked(!checked)
    } 

    return <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" defaultValue="John Doe" />
        <input type="checkbox" value={checked} onChange={handleChecked} />
        <button disabled={!checked}>Envoyer</button>
    </form>

  //* EXEMPLE 1 : 
//   const [count, setCount] = useState(0);

//   const [person, setPerson] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     age: 18,
//   });

//   const incrementAge = () => {
//     setPerson({ ...person, age: person.age + 1 });
//   };

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <p>
//         Age de {person.firstName} : {person.age}
//       </p>
//       <button onClick={incrementAge}>Incrementation age</button>
//       <button onClick={incrementCount}>Increment {count}</button>
//     </>
//   );
}

export default App;
