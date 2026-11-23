import { useRef } from "react";
import "./App.css";
import Office from "./Components/Office";
import Offices from "./Components/Offices";

function App() {
  const officesRef = useRef();

  return (
    <div className="App">
      <Office onSave={() => officesRef.current && officesRef.current.refresh()} />
      <hr />
      <Offices ref={officesRef} />
    </div>
  );
}

export default App;
