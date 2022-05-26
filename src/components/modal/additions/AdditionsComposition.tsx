import {observer} from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";

const COMPOSITION_MAX_LEN = 110

function truncate(input: string) {
    if (input.length > COMPOSITION_MAX_LEN) {
        return input.substring(0, COMPOSITION_MAX_LEN) + '...';
    }
    return input;
}

const Composition = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 40px;
`

function AdditionsComposition() {
    const product = navStore.additionsModalProduct

    return(
        <Composition>
            {truncate(product?.activeVariant.composition!)}
        </Composition>
    )
}

export default observer(AdditionsComposition)