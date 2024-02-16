import { useState } from "react";

function App() {
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

    return <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" />
        <button>Envoyer</button>
    </form>
}

export default App;
