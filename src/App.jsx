import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Form } from "./components/index";
import Table from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
