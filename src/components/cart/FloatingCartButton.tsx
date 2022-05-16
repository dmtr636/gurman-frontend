import {observer} from "mobx-react-lite";
import styled from "styled-components";
import bg from "../../images/floatingCartBg.svg"
import cart from "../../images/floatingCart.svg"
import circle from "../../images/ellips.svg"
import productStore from "../../store/productStore";
import navStore from "../../store/navStore";

const Button = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-image: url(${bg});
`
const CartImage = styled.div`
  background-image: url(${cart});
  position: absolute;
  top: 13px;
  left: 16px;
  width: 26px;
  height: 30px;
`
const CountBg = styled.div`
  background-image: url(${circle});  
  width: 18px;
  height: 18px;
  position: absolute;
  top: 28px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CountText = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FA3D3D;
`

function FloatingCartButton() {
    return(
        <Button onClick={() => navStore.openCart()}>
            <CartImage />
            <CountBg>
                <CountText>
                    {productStore.cartCount}
                </CountText>
            </CountBg>
        </Button>
    )
}

export default observer(FloatingCartButton)