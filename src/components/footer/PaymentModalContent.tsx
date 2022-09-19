import * as React from "react";
import styles from "./Footer.module.css"

const PaymentModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {
                    "Мы принимаем наличную оплату или по карте через курьера в случае доставки, также кафе принимает онлайн-оплату."
                    + "\n\n"
                    + "При самовывозе аналогично принимаем наличную оплату или по карте, также возможна онлайн-оплата."
                    + "\n\n"
                    + "После 22:00 на сайте доступна только онлайн-оплата!\n"
                    + "С 10:00 будут доступны все способы оплаты."
                }
            </div>
        </>
    )
}

export default PaymentModalContent