import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Layout, Menu } from 'antd/es';
import { Link } from 'react-router-dom';
import './header.scss';
import { IAppState } from '../../../interfaces';

const { Header } = Layout;

// react-redux initialazation
const mapStateToProps = (store: IAppState) => ({
    userInfo: store.loginState.userInfo
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

// react component
const AppHeader: React.FC<Props> = (props: Props) => {
    console.log('props', props);
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

// export component
export default connector(AppHeader);
