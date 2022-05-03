import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}

export default App;
