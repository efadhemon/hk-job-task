import React, { useState } from "react";
import { Grid, Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { IMAGES } from "@assets/images";
import menuItems from "./_menu-items";

interface IFProps {
  children: any;
}
const AppLayout: React.FC<IFProps> = ({ children }) => {
  const screens = Grid.useBreakpoint();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  let pathname = window.location.pathname;
  const styles = {
    sider: {
      boxShadow: "0 0 20px #0815420d",
      borderRight: "1px solid #ecf3fa",
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: !screens.md && isCollapsed ? "-100%" : 0,
      zIndex: 9,
    },

    header: {
      position: "fixed",
      width: "100%",
      background: "#fff",
      padding: "0 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 8,
      paddingLeft: !screens.md
        ? isCollapsed
          ? 20
          : 220
        : isCollapsed
        ? 100
        : 220,
      right: 0,
      boxShadow: "0 0 20px #0815420d",
      borderBottom: "1px solid #ecf3fa",
    },
    layout: {
      background: "#f6f8fa",
      marginLeft: !screens.md ? 0 : isCollapsed ? 80 : 200,
      padding: 14,
      paddingTop: 0,
    },

    content: {
      borderRadius: 5,
      padding: 14,
      minHeight: 280,
      background: "#fff",
      marginTop: 77,
      marginLeft: 0,
      marginRight: 14,
    },
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        style={styles.sider as any}
        breakpoint="md"
        onBreakpoint={(broken) => {
          if (broken === true) {
            setIsCollapsed(true);
          }
        }}
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        theme="dark"
      >
        <div
          style={{
            margin: 15,
            marginBottom: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isCollapsed ? (
            <img
              className="logo"
              src={IMAGES.LogoSmall}
              style={{ width: 50 }}
              alt="logo"
            />
          ) : (
            <img
              className="logo"
              src={IMAGES.Logo}
              style={{ width: 180 }}
              alt="logo"
            />
          )}
        </div>

        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[String(pathname)]}
          defaultOpenKeys={[String(pathname)]}
          items={menuItems}
        />
      </Layout.Sider>

      <Layout style={styles.layout as any}>
        <Layout.Header style={styles.header as any}>
          <div
            style={{ fontSize: 22, cursor: "pointer" }}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Layout.Header>
        <Layout.Content style={styles.content as any}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
