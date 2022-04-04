import Home from "./Home";
import BankCard from "./components/BankCard"
import ErrorPage from './components/404'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/all-banks" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/bank-details/:id" element={<BankCard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
