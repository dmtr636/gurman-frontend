import navStore from "../../../store/navStore";
import {observer} from "mobx-react-lite";
import {IAddition} from "../../../model/IAddition";
import styled from "styled-components";
import checkBox from "../../../images/ingredientCheckBox.svg"
import checkBoxSelected from "../../../images/ingredientCheckBoxSelected.svg"
import productStore from "../../../store/productStore";


const Ingredient = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const CheckBox = styled.div<{selected: boolean}>`
  border-radius: 5px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  ${props => props.selected 
    ? `background: #D42216;`
    : `border: 1px solid #929292;`
  }
`
const Name = styled.div<{selected: boolean}>`
  margin-left: 16px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  
  color: ${props => props.selected ? "#231F20" : "#929292"}
`
const Cost = styled.div<{selected: boolean}>`
  margin-left: auto;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: ${props => props.selected ? "#231F20" : "#929292"}
`

function AdditionsIngredient(props: {addition: IAddition}) {
    const addition = props.addition

    return(
        <Ingredient onClick={() => productStore.toggleAddition(addition)}>
            <CheckBox selected={addition.selected}/>
            <Name selected={addition.selected}>
                {addition.name}
            </Name>
            <Cost selected={addition.selected}>
                {addition.selected && "+ "}
                {addition.cost + " ₽"}
            </Cost>
        </Ingredient>
    )
}

export default observer(AdditionsIngredient)