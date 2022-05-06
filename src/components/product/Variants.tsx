import styles from "./Variants.module.css";
import {IProduct} from "../../model/IProduct";
import {IVariant} from "../../model/IVariant";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";


const Variants = observer((props: { product: IProduct}) => {
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
                    onClick={() => productStore.setActiveVariant(product, variant)}
                >
                    {variant.name}
                </div>
            )}
        </div>
    )
})

export default Variants