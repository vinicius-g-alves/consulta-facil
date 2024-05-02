import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Button, List } from "antd";
import { ListaCardiologistas } from "../mock/ListaProfissionais";

const LastSchedules = () => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={ListaCardiologistas}
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 4,
    }}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <Button type="primary" icon={<CalendarOutlined />}>
            Agendar consulta
          </Button>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default LastSchedules;
