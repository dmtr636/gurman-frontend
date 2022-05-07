import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import styles from './App.module.css'
import category from './store/categoryStore'
import product from './store/productStore'
import sliderStore from "./store/sliderStore";

function App() {
    useEffect(() => {
        category.fetchCategories()
        product.fetchProducts()
        sliderStore.fetchImages()
    }, [])

  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}

export default App;
