import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Form,
  Table,
  Modify,
  Navbar1,
  Card,
  CardGrid,
  Dashboard,
} from "./components/index";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/form" element={<Form />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/CardGrid" element={<CardGrid />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
