import styles from "./OrderingResult.module.css"
import navStore from "../../store/navStore";
import DrawerContainer from "../common/DrawerContainer";

const OrderingResult = () => {
    return(
        <DrawerContainer close={() => navStore.closeResult()} hideClose={true}>
            Успех
        </DrawerContainer>
    )
}

export default OrderingResult