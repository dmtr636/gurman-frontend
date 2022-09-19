import * as React from "react";
import styles from "./Footer.module.css"
import styled from "styled-components";
import navStore from "../../store/navStore";
import {REQUISITES_MODAL_CONTENT_TYPE} from "./Footer";

const Link = styled.span`
  cursor: pointer;
  font-weight: bold;
  
  &:hover{
    color: #D42216;
  }
`

const AboutSellerModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                Мгерян Серёжа Меружанович является основателем кафе «Гурман»
                в городе Калуга и владельцем этого сайта (гурман-калуга.рф).
                С полными реквизитами можете ознакомиться
                <Link onClick={() => {navStore.setFooterModalType(REQUISITES_MODAL_CONTENT_TYPE)}}> тут</Link>.
            </div>
        </>
    )
}

export default AboutSellerModalContent