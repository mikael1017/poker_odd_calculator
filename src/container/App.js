import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/calculate" element={<Mainpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
