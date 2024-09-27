import styles from "./PickupForm.module.css"
import mapImage from "../../images/map.png"
import {useEffect} from "react";
import orderStore, {CASH_COURIER, CHECKOUT} from "../../store/orderStore";

const PickupForm = () => {
    useEffect(() => {
        orderStore.setPaymentType(CHECKOUT)
    }, [])

    return(
        <div>
            <div className={styles["title"]}>
                Калуга, переулок Труда, 9
            </div>
            <div className={styles["image"]}>
                <img src={mapImage} alt={""} />
            </div>
        </div>
    )
}

export default PickupForm
