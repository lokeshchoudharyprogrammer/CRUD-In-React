import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Componets/Create";
import { Reade } from "./Componets/Reade";
import Update from "./Componets/Update";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create></Create>}></Route>
            <Route path="/reader" element={<Reade></Reade>}></Route>
            <Route path="/update" element={<Update></Update>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
