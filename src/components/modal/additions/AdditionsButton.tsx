import navStore from "../../../store/navStore";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import productStore from "../../../store/productStore";

const Button = styled.div`
  width: 269px;
  height: 50px;
  background: #D42216;
  border-radius: 5px;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  cursor: pointer;
  box-sizing: border-box;
  
  &:hover{
    background: #FA3D3D;;
  }
`

function AdditionsButton() {
    const product = navStore.additionsModalProduct

    return(
        <Button onClick={() => {
            navStore.closeAdditionsModal()
        }}>
            <span>Добавить</span>
            <span>{productStore.getProductCost(product!) + " ₽"}</span>
        </Button>
    )
}

export default observer(AdditionsButton)