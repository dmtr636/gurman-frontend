import * as React from "react";
import styles from "./Footer.module.css"

const SaleRulesModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {
                    "Ресторан \"Гурман\" при производстве указанных в меню блюд соблюдает все нормы и правила СанПиН, правила товарного соседства, условия хранения и сроки годности продуктов. \n"
                }
            </div>
        </>
    )
}

export default SaleRulesModalContent