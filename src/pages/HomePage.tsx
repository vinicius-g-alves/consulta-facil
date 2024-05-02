import { Card, Col, Layout, Row, Select } from "antd";
import { useState } from "react";
import Logo from "../assets/logo.png";
import ProfessionalList from "../components/ProfessionalList";
import {
  ListaCardiologistas,
  ListaNutricionistas,
  ListaPsicólogos,
} from "../mock/ListaProfissionais";

const { Header, Content } = Layout;

export interface IProfessionalType {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const HomePage = () => {
  const [professional, setProfessional] = useState<IProfessionalType[]>();

  const header = (
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
  return (
    <Layout style={{ height: "100vh" }}>
      {header}
      <Content style={{ margin: 24 }}>
        <Card>
          <Row>
            <Col span={12}>
              <h2 style={{ paddingBottom: 24 }}>Agende agora sua consulta!</h2>
              <Select
                style={{ width: "60%", marginBottom: 24 }}
                size="large"
                allowClear
                onChange={(value) => {
                  if (value === "psico") {
                    setProfessional(ListaPsicólogos);
                  } else if (value === "cardio") {
                    setProfessional(ListaCardiologistas);
                  } else if (value === "nutri") {
                    setProfessional(ListaNutricionistas);
                  }
                }}
              >
                <Select.Option value={"psico"}>Psicólogos</Select.Option>
                <Select.Option value={"cardio"}>Cardiologistas</Select.Option>
                <Select.Option value={"nutri"}>Nutricionistas</Select.Option>
              </Select>

              <Card
                bordered
                style={{ border: "1px solid #d9d9d9", width: "80%" }}
              >
                <ProfessionalList lista={professional} />
              </Card>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default HomePage;
