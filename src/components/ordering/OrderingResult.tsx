import styles from "./OrderingResult.module.css"
import navStore from "../../store/navStore";

const OrderingResult = () => {
    return(
        <div className={styles["wrapper"]}>
            <div className={styles["result"]}>
                <button onClick={() => {
                    navStore.closeResult()
                    navStore.closeOrdering()
                    navStore.closeCart()
                }}>Close</button>
            </div>
        </div>
    )
}

export default OrderingResult