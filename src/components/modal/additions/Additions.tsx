import { Dialog } from "@mui/material";
import {observer} from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";
import closeImg from "../../../images/Close.svg";
import {SERVER_HOST} from "../../../constants/constants";
import promoCodeStore from "../../../store/promoCodeStore";
import React, {useEffect} from "react";
import AdditionsModalTitle from "./AdditionsTitle";
import AdditionsComposition from "./AdditionsComposition";
import AdditionsIngredientsContainer from "./AdditionsIngredientsContainer";
import AdditionsButton from "./AdditionsButton";
import AdditionsCartCount from "./AdditionsCartCount";
import AdditionsPortionsContainer from "./AdditionsPortionsContainer";
import productStore from "../../../store/productStore";

const Container = styled.div`
  width: 868px;
  box-sizing: border-box;
  padding: 80px 40px 40px 40px;
  background: #FFFFFF;
  display: grid;
  grid-template-columns: 290px 394px;
  grid-column-gap: 40px;
  position: relative;
  
  @media (max-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 60px 26px 40px 26px;
    row-gap: 20px;
    min-height: 100vh;
    height: auto;
  }
`
const CloseImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
  
  &:hover{
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    display: none;
  }
`
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 40px;
  }
`
const Image = styled.img`

  @media (min-width: 768px) {
    width: 100%;
    height: 205px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  @media (max-width: 767px) {
    width: 100vw;
    margin: 0 -26px;
  }
`
const Divider = styled.div`
  display: none;
  position: absolute;
  background: #929292;
  opacity: 0.3;
  height: 1px;
  width: 100vw;
  top: 45px;
  
  @media (max-width: 767px) {
    display: block;
  }
`

function Additions() {
    const product = navStore.additionsModalProduct

    return(
        <Dialog
            open={navStore.additionsModalOpen}
            PaperProps={{ style: { maxWidth: "868px", maxHeight: "100vh", margin: 0 } }}
            onClose={() => {
                navStore.closeAdditionsModal()
            }}
        >
            <Container>
                <CloseImg
                    src={closeImg}
                    alt={""}
                    onClick={() => {
                        navStore.closeAdditionsModal()
                    }}
                />
                <Image src={SERVER_HOST + product?.image} alt={""} />
                <div>
                    <AdditionsModalTitle />
                    <AdditionsComposition />
                    {product?.bigPortionAvailable && <AdditionsPortionsContainer />}
                    <AdditionsIngredientsContainer />
                    <BottomRow>
                        <AdditionsCartCount />
                        <Divider />
                        <AdditionsButton />
                    </BottomRow>
                </div>
            </Container>
        </Dialog>
    )
}

export default observer(Additions)