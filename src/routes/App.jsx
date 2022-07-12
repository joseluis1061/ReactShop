import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../containers/Home';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { NotFound } from '../containers/NotFound';
import '../styles/global.css';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={Home} />
          <Route exact path='/login' element={Login} />
          <Route exact path='recovery-password' element={RecoveryPassword} />
          <Route path='*' element={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App;