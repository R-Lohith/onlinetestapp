import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";   // ✅ IMPORT

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Landing />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
