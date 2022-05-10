import * as React from "react";
import styles from "./Footer.module.css"

const DeliveryAndPickupModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {
                    "Доставка осуществляется по городу Калуга и ближайших к ней населённых пунктов. Цена доставки зависит от общей суммы заказа."
                    + "\n\n"
                    + "Самовывоз осуществляется по адресу Калуга, Плеханова, 19А круглосуточно."
                }
            </div>
        </>
    )
}

export default DeliveryAndPickupModalContent