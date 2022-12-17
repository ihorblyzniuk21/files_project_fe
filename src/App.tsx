import React, { useEffect } from 'react';
import NotAuthRoutes from './routes/notAuthRoutes';
import './main.scss';
import { observer } from 'mobx-react-lite';
import userStore from './store/User';
import AuthRoutes from './routes/authRoutes';
import AppBar from './components/AppBar';
import { useNavigate } from 'react-router-dom';

function App () {
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  useEffect(() => {
    (async () => {
      await userStore.refreshUser()
    })()
    if (token) {
      navigate('/home')
    }
    return
  }, [])

  return (
    <div className="App">
      <AppBar/>
      {userStore.user ? (
        <AuthRoutes/>
      ) : (
        <NotAuthRoutes/>
      )}
    </div>
  );
}

export default observer(App);
