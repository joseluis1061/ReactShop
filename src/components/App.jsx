import React from 'react'
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import '../styles/global.css';
const App = () => {
  return (
    <div>
      <Layout>
        <Login/>
      </Layout>
    </div>
  )
}
export default App;