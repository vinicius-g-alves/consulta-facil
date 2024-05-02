import { ConfigProvider } from "antd";
import RoutesPage from "./RoutesPage";

function App() {
  return (
    <ConfigProvider>
      <RoutesPage />
    </ConfigProvider>
  );
}

export default App;
