import styles from "./EmptyCart.module.css"
import {observer} from "mobx-react-lite";
import closeImg from "../../images/Close.svg";
import ProductsContainer from "../product/ProductsContainer";

const EmptyCart = observer((props: {close: any}) => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["cart"]}>
                <div className={styles.header}>
                    Мы рекомендуем, это очень вкусно
                </div>

                <img
                    src={closeImg}
                    className={styles.closeImg}
                    alt={""}
                    onClick={(event) => {
                        props.close()
                        event.stopPropagation()
                    }}
                />

                <ProductsContainer categoryId={0} salePage={false} recommendationsPage={true} />
            </div>
        </div>
    )
})

export default EmptyCart