import * as React from "react";
import styles from "./Footer.module.css"

const RequisitesModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {"ИП Багирян Ануш Геннадьевна\n" +
                    "ИНН/КПП: 402721985398\n" +
                    "ОГРН: 323400000046630\n" +
                    "Юр. адрес: г. Калуга, ул. Георгия Амелина, 1\n" +
                    "Факт. адрес: г. Калуга, ул. Плеханова, 19А"}
            </div>
        </>
    )
}

export default RequisitesModalContent