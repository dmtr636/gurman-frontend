import {ICartItem} from "../../model/ICartItem";
import styles from './CartItem.module.css'
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";
import {SERVER_HOST} from "../../constants/constants";
import useWindowDimensions from "../../hooks/hooks";
import styled from "styled-components";
import navStore from "../../store/navStore";
import cartStore from "../../store/cartStore";


function truncate(input: string, title: string, screenWidth: number) {
    let maxLength = 60
    if (title.length > 20) {
        if (screenWidth < 768) {
            maxLength = 25
        } else {
            maxLength = 35
        }
    }
    if (input.length > maxLength) {
        return input.substring(0, maxLength) + '...';
    }
    return input;
}

const Addition = styled.span`
  color: #D42216;
`

const CartItem = observer((props: {item: ICartItem}) => {
    const item = props.item
    const {width} = useWindowDimensions()

    return (
        <div className={styles.item}>
            <img className={styles.image} src={SERVER_HOST + item.product.image} alt={""}/>
            <div className={styles.infoColumn}>
                <div className={styles.titleRow}>
                    <span className={styles.title}>
                        {item.product.name}
                        {item.isBigPortion && " (большая)"}
                        <span className={styles.portion}>
                            {item.product.portion + " г."}
                        </span>
                    </span>
                </div>

                <div className={styles['composition']}>
                    <span className={styles['compositionText']}>
                        {item.additionsIds?.map(additionId =>
                            <Addition>{productStore.getAddition(item.product, additionId)?.name + ", "}</Addition>
                        )}
                        {truncate(item.variant.composition, item.product.name, width)}
                    </span>
                </div>

                <div className={styles.orderRow}>
                    <div className={styles.cost}>
                        {cartStore.getItemCost(item) + " ₽"}
                    </div>

                    <div className={styles.cartCount}>
                        <div
                            className={styles.cartCountButton}
                            onClick={() => {
                                cartStore.decAmount(item)
                                if (cartStore.cartAmount === 0) {
                                    navStore.closeCart()
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M1 1H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div>{item.amount}</div>

                        <div
                            className={styles.cartCountButton}
                            onClick={() => {
                                cartStore.incAmount(item)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 1L6 11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['divider']} />
        </div>
    )
})

export default CartItem