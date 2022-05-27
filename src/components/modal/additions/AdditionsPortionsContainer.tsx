import { observer } from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";
import AdditionsIngredient from "./AdditionsIngredient";
import {IAddition} from "../../../model/IAddition";

const Header = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #231F20;
  margin-bottom: 20px;
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

function AdditionsPortionsContainer() {
    const product = navStore.additionsModalProduct

    const portions: IAddition[] = [
        {id: 0, name: "Стандартная", cost: 0, selected: !product!.activeVariant.isBigPortion},
        {id: 1, name: "Большая", cost: product!.bigPortionCost, selected: product!.activeVariant.isBigPortion}
    ]

    return(
        <>
            <Header>
                Порции
            </Header>
            <List>
                <AdditionsIngredient
                    addition={portions[0]}
                    onSelect={() => product!.activeVariant.isBigPortion = false}
                />
                <AdditionsIngredient
                    addition={portions[1]}
                    onSelect={() => product!.activeVariant.isBigPortion = true}
                />
            </List>
        </>
    )
}

export default observer(AdditionsPortionsContainer)
