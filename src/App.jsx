import { useState } from "react";

function App() {
  const [isTermAccepted, setTermAccepter] = useState(false);
  return (
    <form>
      <CGUcheckbox checked={isTermAccepted} onCheck={setTermAccepter} />
      <button disabled={!isTermAccepted}>valider</button>
    </form>
  );
}

function CGUcheckbox({ checked, onCheck }) {
    return <div>
        <label>
            <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheck(e.target.checked)}
            />
            {"Accepter les conditions d'utilisation"}
        </label>
    </div>
}

export default App;
