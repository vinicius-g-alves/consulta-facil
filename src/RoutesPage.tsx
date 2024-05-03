import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ProfessionalPage from "./pages/ProfessionalPage";

const RoutesPage = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<MainLayout children={<HomePage />} />} />
        <Route path="/professional" element={<ProfessionalPage />} />
      </Switch>
    </Router>
  );
};

export default RoutesPage;
