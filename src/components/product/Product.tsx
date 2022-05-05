import {IProduct} from "../../model/IProduct";
import styles from './Product.module.css'
import {useState} from "react";
import {IVariant} from "../../model/IVariant";

function Product(props: {product: IProduct}) {
    const product = props.product
    const [activeVariant, setActiveVariant] = useState(product.variants[0])

    const variantClassNames = (variant: IVariant) => {
        return styles['variant'] +
            (variant.name === activeVariant.name
                ? ' ' + styles['active']
                : '')
    }

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
            {product.variants.length > 0 &&
                <div className={styles['variants']}>
                    {props.product.variants.map(variant =>
                        <div
                            className={variantClassNames(variant)}
                            onClick={() => setActiveVariant(variant)}
                        >
                            {variant.name}
                        </div>
                    )}
                </div>
            }
            <div className={styles['composition']}>
                <span className={styles['compositionHeader']}>Состав: </span>
                <span className={styles['compositionText']}>{activeVariant.composition}</span>
            </div>
        </div>
    )
}

export default Product