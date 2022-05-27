import { observer } from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";
import minus from "../../../images/Minus.svg"
import plus from "../../../images/Plus.svg"
import productStore from "../../../store/productStore";

const Container = styled.div`
  height: 31px;
  background: #FAF9F9;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 17px;
`
const Button = styled.img`
  cursor: pointer;
  height: 100%;
  width: 12px;
  
  &:hover {
    opacity: 0.8;
  }
`
const Text = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #231F20;
`

function AdditionsCartCount() {
    const product = navStore.additionsModalProduct

    return(
        <Container>
            <Button src={minus} onClick={() => productStore.decrementCartCount(product?.activeVariant!)}/>
            <Text>{product?.activeVariant.cartCount}</Text>
            <Button src={plus} onClick={() => productStore.incrementCartCount(product?.activeVariant!)} />
        </Container>
    )
}

export default observer(AdditionsCartCount)