import { Routes, Route } from "react-router-dom";
import Accordian from "./pages/Accordian";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Accordian></Accordian>}></Route>
    </Routes>
  );
}
export default App;
