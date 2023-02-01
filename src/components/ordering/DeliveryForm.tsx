import styles from "./DeliveryForm.module.css"
import orderStore, {CASH_COURIER} from "../../store/orderStore";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const DeliveryForm = observer(() => {
    useEffect(() => {
        orderStore.setPaymentType(CASH_COURIER)
    }, [])

    return(
        <div className={styles["container"]}>
            <input
                className={styles["inputStreet"]}
                placeholder={"Улица"}
                value={orderStore.street}
                onChange={event => orderStore.setStreet(event.target.value)}
                required={true}
            />
            <input
                className={styles["inputHouse"]}
                placeholder={"Дом"}
                value={orderStore.house}
                onChange={event => orderStore.setHouse(event.target.value)}
                required={true}
            />
            <input
                className={styles["inputEntrance"]}
                placeholder={"Подъезд"}
                value={orderStore.entrance}
                onChange={event => orderStore.setEntrance(event.target.value)}
            />
            <input
                className={styles["inputFlat"]}
                placeholder={"Квартира"}
                value={orderStore.flat}
                onChange={event => orderStore.setFlat(event.target.value)}
            />
            <input
                className={styles["inputHouse"]}
                placeholder={"Этаж"}
                value={orderStore.floor}
                onChange={event => orderStore.setFloor(event.target.value)}
            />
            <textarea
                className={styles["inputComment"]}
                placeholder={"Комментарий к заказу"}
                value={orderStore.comment}
                onChange={event => orderStore.setComment(event.target.value)}
            />
        </div>
    )
})

export default DeliveryForm
