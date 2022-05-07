import styles from "./Product.module.css";
import {IProduct} from "../../model/IProduct";
import productState from '../../store/productStore'
import {observer} from "mobx-react-lite";

const COMPOSITION_MAX_LEN = 115

function truncate(input: string) {
    if (input.length > COMPOSITION_MAX_LEN) {
        return input.substring(0, COMPOSITION_MAX_LEN) + '...';
    }
    return input;
}

const Composition = observer((props: {product: IProduct}) => {
    const product = props.product

    return (
        <div className={styles['composition']}>
            <span className={styles['compositionText']}>
                {(product.activeVariant.composition.length > COMPOSITION_MAX_LEN && !product.expanded)
                    ?
                    <>
                        {truncate(product.activeVariant.composition)}
                        <span
                            className={styles.nextLink}
                            onClick={(event) => {
                                product.expanded = true
                                event.stopPropagation()
                            }}
                        >
                            {" а ещё"}
                        </span>
                    </>
                    :
                    product.activeVariant.composition
                }
            </span>
        </div>
    )
})

export default Composition