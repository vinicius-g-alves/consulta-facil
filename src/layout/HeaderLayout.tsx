import { Header } from "antd/es/layout/layout";
import Logo from "../assets/logo.png";
const HeaderLayout = () => {
  return (
    <Header
      style={{
        padding: 50,
        color: "#FFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Logo} alt="logo" width={100} height={100} />

      <ul style={{ listStyle: "none", display: "flex", gap: 20 }}>
        <li>option 1</li>
        <li> option 1</li>
        <li>option 1</li>
      </ul>
    </Header>
  );
};

export default HeaderLayout;
