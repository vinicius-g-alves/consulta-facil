import { Layout, Image } from "antd";

const { Header } = Layout;
const ProfessionalPage = () => {
  return (
    <Layout>
      <Header
        style={{
          padding: 200,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "stretch" }}>
          <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            title="teste"
          />
          <p style={{ color: "white" }}>teste</p>
        </div>

        <p style={{ color: "white" }}>teste</p>
      </Header>
    </Layout>
  );
};

export default ProfessionalPage;
