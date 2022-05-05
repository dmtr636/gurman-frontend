import {IProduct} from "../../model/IProduct";
import styles from './Product.module.css'
import {useState} from "react";
import {IVariant} from "../../model/IVariant";
import productStore from '../../store/product'
import {observer} from "mobx-react-lite";
import Variants from "./Variants";

const COMPOSITION_MAX_LEN = 115

function truncate(input: string) {
    if (input.length > COMPOSITION_MAX_LEN) {
        return input.substring(0, COMPOSITION_MAX_LEN) + '...';
    }
    return input;
}

const Product = observer((props: {product: IProduct}) => {
    const product = props.product
    const [expanded, setExpanded] = useState(false)

    const orderButtonClassNames = () => {
        return styles['orderButton'] +
            (product.activeVariant.cartCount > 0
                ? ' ' + styles.active
                : '')
    }

    return (
        <div
            className={styles.product}
            onClick={() => setExpanded(false)}
        >
            <img src={"http://localhost:8000" + props.product.image} alt={""}/>
            <div className={styles.titleRow}>
                <div className={styles.title}>
                    {props.product.name}
                </div>
                <div className={styles.portion}>
                    {props.product.portion + " г."}
                </div>
            </div>
            {product.variants.length > 1 &&
                <Variants product={product} />
            }
            <div className={styles['composition']}>
                <span className={styles['compositionHeader']}>Состав: </span>
                {(product.activeVariant.composition.length > COMPOSITION_MAX_LEN && !expanded)
                    ?
                    <span className={styles['compositionText']}>
                        {truncate(product.activeVariant.composition)}
                        <span
                            className={styles.nextLink}
                            onClick={(event) => {
                                setExpanded(true)
                                event.stopPropagation()
                            }}
                        >
                            {" а ещё"}
                        </span>
                    </span>
                    :
                    <span className={styles['compositionText']}>{product.activeVariant.composition}</span>
                }
            </div>
            <div className={styles.orderRow}>
                <div
                    className={orderButtonClassNames()}
                    onClick={() => productStore.toggleInCartState(product.activeVariant)}
                >
                    {product.activeVariant.cost + " ₽"}
                </div>
            </div>
        </div>
    )
})

export default Product