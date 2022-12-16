import React, { useEffect } from 'react';
import NotAuthRoutes from './routes/notAuthRoutes';
import './main.scss';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import userStore from './store/User';

function App () {

  useEffect(() => {
    (async () => {
      await userStore.refreshUser()
    })()
    return
  }, [])

  return (
    <div className="App">
      <NotAuthRoutes/>
    </div>
  );
}

export default observer(App);
