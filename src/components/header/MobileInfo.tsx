import styled from "styled-components"
import locationImg from "../../images/LocationImg.svg"
import phoneImg from "../../images/PhoneImg.svg"

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  height: 46px;
`

const LeftCol = styled.a`
  display: flex;
  align-items: center;
  flex-grow: 1;
  background: #D42216;
  border-radius: 0px 5px 5px 0px;
  text-decoration: none;
`

const LocationImg = styled.a`
  margin-left: 12px;
  height: 30px;
`

const PhoneImg = styled.a`
  margin: 9px 20px;
`

const Text = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  margin-left: 1px;
`

const MobileInfo = () => {
    return(
        <Container>
            <LeftCol href="https://yandex.ru/maps/-/CCUFV8xoPC" target="_blank" rel="noreferrer">
                <LocationImg>
                    <img src={locationImg} alt={""} />
                </LocationImg>
                <Text>Калуга, Плеханова, 19А</Text>
            </LeftCol>
            <PhoneImg href="tel:+79109140005">
                <img src={phoneImg} alt={""} />
            </PhoneImg>
        </Container>
    )
}

export default MobileInfo