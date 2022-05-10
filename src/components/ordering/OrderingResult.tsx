import styles from "./OrderingResult.module.css"
import navStore from "../../store/navStore";

const OrderingResult = () => {
    return(
        <div className={styles["wrapper"]}>
            <div className={styles["result"]}>
                <button onClick={(event) => {
                    navStore.closeResult()
                    navStore.closeOrdering()
                    navStore.closeCart()
                    navStore.closeSelectTime()
                    event.stopPropagation()
                }}>Close</button>
            </div>
        </div>
    )
}

export default OrderingResult