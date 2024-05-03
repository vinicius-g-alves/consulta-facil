import { Card, Col, Row, Select } from "antd";
import { useState } from "react";
import ProfessionalList from "../components/ProfessionalList";
import {
  ListaCardiologistas,
  ListaNutricionistas,
  ListaPsicólogos,
} from "../mock/ListaProfissionais";

export interface IProfessionalType {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const HomePage = () => {
  const [professional, setProfessional] = useState<IProfessionalType[]>();

  return (
    <Card>
      <Row>
        <Col span={12}>
          <h2 style={{ paddingBottom: 24 }}>Agende agora sua consulta!</h2>
          <Select
            style={{ width: "70%", marginBottom: 24 }}
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

          <Card bordered style={{ border: "1px solid #d9d9d9", width: "90%" }}>
            <ProfessionalList lista={professional} />
          </Card>
        </Col>
        <Col
          span={12}
          style={{
            background: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <strong>PROPAGANDA...</strong>
        </Col>
      </Row>
    </Card>
  );
};

export default HomePage;
