import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import SumsongContainer from './components/SumsongContainer';
import TabletContainer from './components/TabletContainer';
import HookSumsongContainer from './components/HookSumsongContainer';
import UserContainer from './components/UserContainer'

import configureStore from './redux/store/configureStore';
/* getting store */
const store = configureStore()

function App() {
  return (
    /* using all the container  */
    <Provider store={store}>
     <div className="App"> 
     
        <UserContainer/>
        <SumsongContainer/>
        <TabletContainer/>
        <HookSumsongContainer/>
        
       
     </div>
     
    </Provider>
   
  );
}

export default App;
