import styled from "styled-components"
import

const Container = styled.div`
  display: flex;
`

const LeftCol = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: 68px;
`

const LocationImg = styled.img`
  margin-left: 12px;
`

const Text = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`

const MobileInfo = () => {
    return(
        <Container>
            <LeftCol>
                <LocationImg src={}
            </LeftCol>
        </Container>
    )
}

export default MobileInfo