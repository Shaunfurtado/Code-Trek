import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Form, Table } from "./components/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
