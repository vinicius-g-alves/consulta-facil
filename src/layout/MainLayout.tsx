import { Layout } from "antd";
import { ReactNode } from "react";
import HeaderLayout from "./HeaderLayout";

const { Content } = Layout;

export interface IProfessionalType {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderLayout />
      <Content style={{ margin: 24, height: "100%" }}>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
