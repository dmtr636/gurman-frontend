import navStore from "../../../store/navStore";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import productStore from "../../../store/productStore";
import cartStore from "../../../store/cartStore";

const Button = styled.div`
  width: 269px;
  height: 50px;
  background: #D42216;
  border-radius: 5px;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Ubuntu', 'Segoe UI';
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

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 40px;
  }
`

function AdditionsButton() {
    const product = navStore.additionsModalProduct

    return(
        <Button onClick={() => {
            cartStore.addItem(
                product!,
                product?.activeVariant!,
                product?.activeVariant.additions.filter(addition => addition.selected).map(addition => addition.id),
                product?.activeVariant.isBigPortion,
                product?.activeVariant.cartCount
            )
            navStore.closeAdditionsModal()
        }}>
            <span>Добавить</span>
            <span>{productStore.getProductCost(product!) + " ₽"}</span>
        </Button>
    )
}

export default observer(AdditionsButton)