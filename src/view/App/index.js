import React, { Component } from "react";
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './style.css';
const { Header, Sider, Content, Footer } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <div style={{ background: '#fff', padding: 24, minHeight:610 }}>Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Electron+Antd+Webpack+React+boilerplate ©2017 Created by ethan
                    </Footer>
                </Layout>
            </div>
        )
    }
}   