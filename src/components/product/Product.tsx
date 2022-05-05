import {IProduct} from "../../model/IProduct";
import styles from './Product.module.css'
import {useState} from "react";

function Product(props: {product: IProduct}) {
    const product = props.product
    const [activeVariant, setActiveVariant] = useState(product.variants[0])

    return (
        <div className={styles.product}>
            <img src={"http://localhost:8000" + props.product.image} alt={""}/>
            <div className={styles.titleRow}>
                <div className={styles.title}>
                    {props.product.name}
                </div>
                <div className={styles.portion}>
                    {props.product.portion + " г."}
                </div>
            </div>
            <div className={styles['variants']}>
                {props.product.variants.map(variant =>
                    <div
                        className={styles['variant'] + (variant.name === activeVariant.name ? ' ' + styles['active']: '')}
                        onClick={() => setActiveVariant(variant)}
                    >
                        {variant.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product