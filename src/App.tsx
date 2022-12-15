import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useStores } from './store/use-stores';
import AppBar from './components/AppBar';
import NotAuthRoutes from './routes/notAuthRoutes';
import './main.scss';
import { UserInterface } from './types/userInterface';
import { toJS } from 'mobx';
import { useCookies } from 'react-cookie';

function App () {
  const { userStore } = useStores();
  const [token, setToken] = useState<string | any>('')
  const [user, setUser] = useState<UserInterface | null>(null)

  useEffect(() => {
    // const tokenFromLS = localStorage.getItem('accessToken')
    // setToken(tokenFromLS)
    (async () => {
      const refreshedUser = await userStore.refreshUser()
      console.log(refreshedUser)
    })()

  }, [])

  const refresh = async () => {
    const refreshedUser = await userStore.refreshUser()
    console.log('refreshedUser', refreshedUser)
  }

  return (
    <div className="App">
      <NotAuthRoutes/>
      <button onClick={() => refresh()}>refresh</button>
    </div>
  );
}

export default App;
