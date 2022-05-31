import {observer} from "mobx-react-lite";
import React from "react";
import bg from "../../images/headerCartClosedBg.svg"
import styled from "styled-components";
import navStore from "../../store/navStore";

const Container = styled.div`
  width: 276px;
  height: 86px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  background: url("${bg}");
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 767px) {
    display: none;
  }
`
const Text = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #FFFFFF;
  text-align: center;
`

const HeaderCartClosed = observer(() => {
    return (
        <Container onClick={() => navStore.openSiteClosedModal()}>
            <Text>
                У нас перерыв<br />
                Скоро вернёмся!
            </Text>
        </Container>
    )
})

export default HeaderCartClosed