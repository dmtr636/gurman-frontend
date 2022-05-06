import styles from "./HeaderCart.module.css";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore"
import cartStore from "../../store/cartStore";
import React, {useState} from "react";
import {Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Cart from '../cart/Cart'
import {set} from "mobx";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const HeaderCart = observer(() => {
    const cartCount = cartStore.cartCount

    const cartClassName = () => {
        let empty = cartCount === 0 ? styles.empty : " "
        return `${styles.cart} ${empty}`
    }

    const [open, setOpen] = useState(false)

    return (
        <div className={cartClassName()} onClick={() => {
            if (cartCount > 0) {
                setOpen(true)
            }
        }}>
            <div className={styles.image}>
                {cartCount === 0
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                        <path d="M23.8636 7.5H19.0341V6.9C19.0341 3.09 16.108 0 12.5 0C8.89205 0 5.96591 3.09 5.96591 6.9V7.5H1.13636C0.507812 7.5 0 8.03625 0 8.7V28.8C0 29.4638 0.507812 30 1.13636 30H23.8636C24.4922 30 25 29.4638 25 28.8V8.7C25 8.03625 24.4922 7.5 23.8636 7.5ZM8.52273 6.9C8.52273 4.57875 10.3018 2.7 12.5 2.7C14.6982 2.7 16.4773 4.57875 16.4773 6.9V7.5H8.52273V6.9ZM22.4432 27.3H2.55682V10.2H5.96591V13.5C5.96591 13.665 6.09375 13.8 6.25 13.8H8.23864C8.39489 13.8 8.52273 13.665 8.52273 13.5V10.2H16.4773V13.5C16.4773 13.665 16.6051 13.8 16.7614 13.8H18.75C18.9062 13.8 19.0341 13.665 19.0341 13.5V10.2H22.4432V27.3Z" fill="white"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.8182 7.5H19.7955V6.9C19.7955 3.09 16.7523 0 13 0C9.24773 0 6.20455 3.09 6.20455 6.9V7.5H1.18182C0.528126 7.5 0 8.03625 0 8.7V28.8C0 29.4637 0.528126 30 1.18182 30H10.8332C10.4867 29.1402 10.2306 28.2365 10.0762 27.3H2.65909V10.2H6.20455V13.5C6.20455 13.665 6.3375 13.8 6.5 13.8H8.56818C8.73068 13.8 8.86364 13.665 8.86364 13.5V10.2H17.1364V13.5C17.1364 13.5128 17.1372 13.5253 17.1387 13.5377C17.9761 13.1061 18.8655 12.7567 19.7955 12.5007V10.2H23.3409V12.0012C23.4018 12.0004 23.4627 12 23.5238 12C24.3694 12 25.197 12.0747 26 12.2177V8.7C26 8.03625 25.4719 7.5 24.8182 7.5ZM8.86364 6.9C8.86364 4.57875 10.7139 2.7 13 2.7C15.2861 2.7 17.1364 4.57875 17.1364 6.9V7.5H8.86364V6.9Z" fill="white"/>
                    </svg>
                }
            </div>
            {cartCount > 0 &&
                <div className={styles.positions}>
                    <div className={styles.positionsText}>
                        {cartCount}
                    </div>
                </div>
            }
            <div className={styles.text}>
                {cartCount === 0
                    ? "Корзина пустует"
                    : "Оформить заказ"
                }
            </div>
            <Drawer
                anchor={'right'}
                open={open}
            >
                <Cart close={() => setOpen(false)} />
            </Drawer>
        </div>
    )
})

export default HeaderCart