import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Users from '../pages/Upload';

type AppProps = {
  loggedIn: boolean;
};

const App = ({ loggedIn }: AppProps) => {
  if (loggedIn) {
    return (
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/employees" element={<Home />} />
            <Route path="/upload" element={<Users />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </Layout>
      </HashRouter>
    );
  }
};

export default App;
