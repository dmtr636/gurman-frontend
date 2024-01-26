import * as React from "react";
import styles from "./Footer.module.css"

const PaymentModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {
                    "Мы принимаем наличную оплату или по карте через курьера в случае доставки."
                    + "\n\n"
                    + "При самовывозе аналогично принимаем наличную оплату или по карте."
                }
            </div>
        </>
    )
}

export default PaymentModalContent