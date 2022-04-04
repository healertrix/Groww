import Home from "./Home";
import BankCard from "./components/BankCard"
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank-details/:id" element={<BankCard />} />
      </Routes>
    </Router>
  );
}

export default App;
