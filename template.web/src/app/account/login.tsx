import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Layout } from 'antd';

import './login.scss';

import { IUserLogin } from '../interfaces';
import { accountLoginActions } from '../store/actions';

const { Content } = Layout;

// react-redux initialization
const mapDispatchToProps = {
    userLogin: (payload: IUserLogin) => accountLoginActions.loginAction(payload)
}

const payload: IUserLogin = { email: 'test@test.com', password: '1234' };
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

// component
const Account: React.FC<Props> = (props: Props) => {
    return (
        <Layout className="login-page">
            <Content>
                <div>
                    <button onClick={props.userLogin.bind(null, payload)}>
                        Login Info
                    </button>
                </div>
            </Content>
        </Layout>
    );
}

// export component
export default connector(Account);
