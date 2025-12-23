import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
