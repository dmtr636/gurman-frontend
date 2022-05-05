import styles from "./Variants.module.css";
import {IProduct} from "../../model/IProduct";
import {IVariant} from "../../model/IVariant";


const Variants = (props: { product: IProduct}) => {
    const product = props.product

    const variantClassNames = (variant: IVariant) => {
        const active = variant.id === product.activeVariant.id ? styles.active : ''
        return `${styles.variant} ${active}`
    }

    return (
        <div className={styles['variants']}>
            {product.variants.map(variant =>
                <div
                    className={variantClassNames(variant)}
                    onClick={() => product.activeVariant = variant}
                >
                    {variant.name}
                </div>
            )}
        </div>
    )
}

export default Variants