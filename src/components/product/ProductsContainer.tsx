import product from '../../store/product'
import Product from "./Product";
import styles from './ProductContainer.module.css'

function ProductsContainer(props: { categoryId: number }) {
    const products = product.products.filter(product => product.category === props.categoryId)

    return (
        <div className={styles.container}>
            {products.map(product =>
                <Product product={product} />
            )}
        </div>
    )
}

export default ProductsContainer