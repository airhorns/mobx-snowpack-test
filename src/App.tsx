import React from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import logo from './logo.svg';
import './App.css';

const store = observable({
  title: "Start"
})

setInterval(action(() => {
  store.title = "Time is " + String(new Date());
}), 750);

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{store.title}</h3>
      </header>
    </div>
  );
}

export default observer(App);
