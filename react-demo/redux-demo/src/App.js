import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import { store } from './store'

function App() {
  return (
    // </Provider>为了让所有子组件拿到store
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Post />
      </div>
    </Provider>
  );
}

export default App;
