import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "./Footer.module.css"
import styled from "styled-components";
import navStore from "../../store/navStore";
import Footer, {SALE_RULES_MODAL_CONTENT_TYPE} from "./Footer";

const RequisitesModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                {"ИП Мгерян Серёжа Меружанович\n" +
                    "ИНН/КПП: 402917087078\n" +
                    "ОГРН: 322402700021892\n" +
                    "Юр. адрес: г. Калуга, ул.Достоевского, 27:35\n" +
                    "Факт. адрес: Г. Калуга, Плеханова, 19А гурман-калуга.рф"}
            </div>
        </>
    )
}

export default RequisitesModalContent