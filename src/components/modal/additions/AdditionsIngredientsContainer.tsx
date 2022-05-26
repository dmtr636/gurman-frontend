import { observer } from "mobx-react-lite";
import navStore from "../../../store/navStore";
import styled from "styled-components";
import AdditionsIngredient from "./AdditionsIngredient";

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
  margin-bottom: 80px;
`

function AdditionsIngredientsContainer() {
    const product = navStore.additionsModalProduct

    return(
        <>
            <Header>
                Ингредиенты
            </Header>
            <List>
                {product?.additions.map(addition =>
                    <AdditionsIngredient addition={addition} />
                )}
            </List>
        </>
    )
}

export default observer(AdditionsIngredientsContainer)
