import React from 'react';
import { Layout } from 'antd';

import './home.scss';

const { Content } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Layout className="home-page">
                <Content>
                    Hello world
                </Content>
            </Layout>
        );
    }
}

export default Home;
