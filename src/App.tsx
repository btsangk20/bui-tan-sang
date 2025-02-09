import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import { PATH, ROUTES } from './constants';
import { ContentWrapper } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path='/' element={<Navigate to={PATH.SWAP} replace />} />
            {ROUTES.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </ContentWrapper>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

