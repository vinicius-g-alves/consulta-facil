import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const RoutesPage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/teste" element={<div>Teste</div>} />
      </Switch>
    </Router>
  );
};

export default RoutesPage;
