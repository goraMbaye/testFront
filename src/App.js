import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Input, InputNumber, Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  return (

    <div className="App">
      <Layout>
        <Header style={{background:'white'}}>
        <Title level={2}>EDITEUR DE FICHIER</Title>
        </Header>
        <Content style={{background:'white'}}>
          <Form style={{margin:0}} {...layout} className="nest-messages" validateMessages={validateMessages}>
            <Form.Item  label="filetoedit">
              <Input />
            </Form.Item>
            <Form.Item  label="contente file">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Save
            </Button>
            </Form.Item>
          </Form>

        </Content>
      </Layout>
    </div>
  );

}

export default App;
