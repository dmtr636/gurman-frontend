import {observer} from "mobx-react-lite";
import styled from "styled-components";
import categoryStore from "../../store/categoryStore";
import navStore from "../../store/navStore";

const Container = styled.div`
  padding: 20px;
`
const Header = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  text-align: right;
  margin-bottom: 30px;
`
const Divider = styled.div`
  position: absolute;
  height: 1px;
  left: 20px;
  right: 0;
  top: 65px;
  opacity: 0.3;
  background: #929292;
`
const Item = styled.div<{active: boolean}>`
  margin-top: 10px;
  text-align: right;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.active ? "#D42216" : "#00000"};
`

function MobileMenu() {
    return (
        <Container>
            <Header>Меню</Header>
            <Divider />
            {categoryStore.categories.map((category, index) =>
                <Item
                    key={index}
                    active={index === navStore.navIndex}
                    onClick={() => {
                        navStore.setNavIndex(index, true)
                        navStore.closeMenu()
                    }}
                >
                    {category.name}
                </Item>
            )}
        </Container>
    )
}

export default observer(MobileMenu)