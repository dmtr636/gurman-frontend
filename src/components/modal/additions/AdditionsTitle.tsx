import { observer } from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";

const Title = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  color: #231F20;
  margin-bottom: 20px;
`
const Portion = styled.span`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25px;
  color: #929292;
`

function AdditionsTitle() {
    const product = navStore.additionsModalProduct

    return(
        <Title>
            {product?.name}
            &nbsp;&nbsp;
            <Portion>
                {product?.portion + " " + product?.unit}
            </Portion>
        </Title>
    )
}

export default observer(AdditionsTitle)