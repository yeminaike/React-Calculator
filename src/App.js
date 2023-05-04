import "./App.css";
import Calculator from "./Containers/Pages/auth/Components/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/calculator" elements={<Calculator />} />
        </Routes>
      </Router>
      {/* Adeyemi */}
    </div>
  );
}

export default App;
