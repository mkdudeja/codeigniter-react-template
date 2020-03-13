import React from 'react';
import { Layout } from 'antd';
import { toast } from 'react-toastify';

import { authService } from '../shared';

import './home.scss';

const { Content } = Layout;

class Home extends React.Component {
    componentDidMount() {
        authService.login('test@test.com', '123456')
            .then((response) => {
                console.log('response', response);
                toast.error('Hello World');
            });
    }

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
