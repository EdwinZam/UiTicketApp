import React, { useContext, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { UiContext } from '../context/UiContext';
const { Header, Sider, Content } = Layout;



export const RouterPage = () => {

  const { ocultarMenu } = useContext( UiContext )

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //     token: { colorBgContainer },
  //   } = theme.useToken();
  return (

    <Layout style={{height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} hidden={ocultarMenu}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/ingresar'>Ingresar</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/cola'>Cola</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/crear'>Crear Ticket</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: 'white',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#FFFFFF',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    
  )
}
