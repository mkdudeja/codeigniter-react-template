import React from 'react';
import { Layout, Menu } from 'antd/es';
import { Link } from 'react-router-dom';
import './header.scss';

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header className="app-header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">How it works</Menu.Item>
                <Menu.Item key="3">Pricing</Menu.Item>
                <Menu.Item key="4">
                    <span>Login</span>
                    <Link to="/login" />
                </Menu.Item>
                <Menu.Item key="5">
                    <span>Signup</span>
                    <Link to="/signup" />
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default AppHeader;
