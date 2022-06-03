import Dialog from "@mui/material/Dialog";
import navStore from "../../store/navStore";
import React from "react";
import { observer } from "mobx-react-lite";
import styles from "../cart/EmptyCart.module.css";
import closeImg from "../../images/Close.svg";
import styled from "styled-components";
import promoCodeStore from "../../store/promoCodeStore";
import {SERVER_HOST} from "../../constants/constants";
import useWindowDimensions from "../../hooks/hooks";

const Container = styled.div`
  width: 1030px;
  box-sizing: border-box;
  padding: 40px 40px 20px 40px;
  background: #FFFFFF;
  
  @media (max-width: 767px) {
    width: 100vw;
    padding: 20px 20px 20px 20px;
    height: 100%;
  }
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
  
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`
const CloseImg = styled.img`
  cursor: pointer;
  
  &:hover{
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    display: none;
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
  
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
    margin: 10px 0;
  }
`
const Image = styled.img`
  width: 100%;
`

function SiteClosedModal() {
    const {width} = useWindowDimensions()

    return (
        <Dialog
            open={navStore.siteClosedModalOpen}
            PaperProps={{style: {
                    width: width < 768 ? "100%" : "initial",
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginTop: width < 768 ? "55px" : 0,
                    maxWidth: "100%",
                    height: width < 768 ? "calc(100vh - 60px)" : "initial",
                    maxHeight: width >= 768 ? "100%" : undefined
                }}}
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
                <Image src={SERVER_HOST + promoCodeStore.siteClosedPromoCodeImage} alt={""}/>
                <Text>
                    Воспользуйтесь им, как только мы вернёмся!
                </Text>
            </Container>
        </Dialog>
    )
}

export default observer(SiteClosedModal)