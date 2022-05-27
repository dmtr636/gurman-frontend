import { Dialog } from "@mui/material";
import {observer} from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";
import closeImg from "../../../images/Close.svg";
import {SERVER_HOST} from "../../../constants/constants";
import promoCodeStore from "../../../store/promoCodeStore";
import React from "react";
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
`
const CloseImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
  
  &:hover{
    opacity: 0.8;
  }
`
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Additions() {
    const product = navStore.additionsModalProduct

    return(
        <Dialog
            open={navStore.additionsModalOpen}
            PaperProps={{ style: { maxWidth: "868px", maxHeight: "100vh", margin: 0 } }}
            onClose={() => {
                navStore.closeAdditionsModal()
                productStore.toggleInCartState(product?.activeVariant!, product!)
            }}
        >
            <Container>
                <CloseImg
                    src={closeImg}
                    alt={""}
                    onClick={(event) => navStore.closeAdditionsModal()}
                />
                <img src={SERVER_HOST + product?.image} alt={""} />
                <div>
                    <AdditionsModalTitle />
                    <AdditionsComposition />
                    {product?.bigPortionAvailable && <AdditionsPortionsContainer />}
                    <AdditionsIngredientsContainer />
                    <BottomRow>
                        <AdditionsCartCount />
                        <AdditionsButton />
                    </BottomRow>
                </div>
            </Container>
        </Dialog>
    )
}

export default observer(Additions)