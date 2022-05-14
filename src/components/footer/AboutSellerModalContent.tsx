import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "./Footer.module.css"
import styled from "styled-components";

const Link = styled.span`
  cursor: pointer;
  font-weight: bold;
  
  &:hover{
    color: #FA3D3D;
  }
`

const AboutSellerModalContent = () => {
    return(
        <>
            <div className={styles["modalContent"]}>
                Мгерян Серёжа Меружанович является основателем кафе «Гурман»
                в городе Калуга и владельцем этого сайта (гурман-калуга.рф).
                С полными реквизитами можете ознакомиться <Link onClick={() => {}}>тут</Link>.
            </div>
        </>
    )
}

export default AboutSellerModalContent