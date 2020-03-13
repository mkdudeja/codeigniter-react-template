import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

// shared componets
import { AppHeader } from './shared';

// container componets
import Home from './home/home';
import Login from './account/login';

const { Content, Footer } = Layout;
const AppRouter: React.FC = () => {
    return (
        <Router>
            <AppHeader />
            <Content className="main">
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Lost &amp; Found ©2019</Footer>
        </Router>
    );
}

export default AppRouter;
