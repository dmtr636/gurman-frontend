import Dialog from "@mui/material/Dialog";
import navStore from "../../store/navStore";
import React from "react";
import { observer } from "mobx-react-lite";
import styles from "../cart/EmptyCart.module.css";
import closeImg from "../../images/Close.svg";
import styled from "styled-components";
import promoCodeStore from "../../store/promoCodeStore";
import {SERVER_HOST} from "../../constants/constants";

const Container = styled.div`
  width: 1030px;
  box-sizing: border-box;
  padding: 40px;
  background: #FAF9F9;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #282828;
`
const CloseImg = styled.img`
  cursor: pointer;
  
  &:hover{
    opacity: 0.8;
  }
`
const Text = styled.div`
  margin: 20px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`

function SiteClosedModal() {
    return (
        <Dialog
            open={navStore.siteClosedModalOpen}
            PaperProps={{ style: { maxWidth: "1030px", maxHeight: "100vh", margin: 0 } }}
            onClose={() => navStore.closeSiteClosedModal()}
        >
            <Container>
                <Header>
                    Сейчас у нас перерыв, но скоро он закончится...
                    <CloseImg
                        src={closeImg}
                        alt={""}
                        onClick={(event) => navStore.closeSiteClosedModal()}
                    />
                </Header>
                <Text>
                    Нам жаль, что вы попали к нам во время перерыва, поэтому
                    спешим подарить вам прокомод!
                </Text>
                <img src={SERVER_HOST + promoCodeStore.siteClosedPromoCodeImage} alt={""}/>
                <Text>
                    Воспользуйтесь им, как только мы вернёмся!
                </Text>
            </Container>
        </Dialog>
    )
}

export default observer(SiteClosedModal)