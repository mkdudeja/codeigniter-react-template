import React from 'react';
import { Layout } from 'antd/es';
import { ToastContainer, Slide } from 'react-toastify';

import AppRouter from './app-router';

const App: React.FC = () => {
  return (
    <Layout className="wrapper">
      <AppRouter />
      <ToastContainer draggable={false} transition={Slide} />
    </Layout>
  );
}

export default App;
