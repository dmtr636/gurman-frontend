import React, {useEffect} from 'react';
import './App.css';
import Layout from "./components/Layout";
import styles from './App.module.css'
import category from './store/categoryStore'
import product from './store/productStore'
import sliderStore from "./store/sliderStore";
import settingsStore from "./store/settingsStore";
import promoCodeStore from "./store/promoCodeStore";

function App() {
	useEffect(() => {
		category.fetchCategories()
		product.fetchProducts()
		sliderStore.fetchImages()
		product.fetchRecommendations()
		settingsStore.fetchSiteOpenState()
		promoCodeStore.fetchSiteClosedPromoCodeImage()

		const intervalId = setInterval(() => {
			settingsStore.fetchSiteOpenState()
		}, 1000*60)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className={styles.container}>
			<Layout />
		</div>
	);
}

export default App;
