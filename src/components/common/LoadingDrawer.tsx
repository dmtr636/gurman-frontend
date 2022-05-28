import {observer} from "mobx-react-lite";
import loadingGif from "../../images/logotypeLoading.gif"
import DrawerContainer from "./DrawerContainer";
import navStore from "../../store/navStore";
import styled from "styled-components";
import {useEffect} from "react";

const Loader = styled.img`
  width: 243px;
  height: 238px;
  margin: auto;
`

function LoadingDrawer(props: {forceOpen?: boolean}) {
    useEffect(() => {
        if (props.forceOpen) {
            navStore.openLoading()
        }
    }, [props.forceOpen])

    return (
        <DrawerContainer close={() => navStore.closeLoading()}>
            <Loader src={loadingGif} alt={""}/>
        </DrawerContainer>
    )
}

export default observer(LoadingDrawer)