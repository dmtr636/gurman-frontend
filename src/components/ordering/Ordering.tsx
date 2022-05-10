import styles from './Ordering.module.css'
import closeImg from "../../images/Close.svg";
import {observer} from "mobx-react-lite";
import number1Image from "../../images/Number1.svg"
import number2Image from "../../images/Number2.svg"
import number3Image from "../../images/Number3.svg"
import InputMask from "react-input-mask";
import React, {useState} from "react";
import DeliveryForm from "./DeliveryForm";
import PickupForm from "./PickupForm";
import orderButtonArrow from "../../images/orderButtonArrow.svg";
import Drawer from "@mui/material/Drawer";
import navStore from "../../store/navStore";
import OrderingResult from "./OrderingResult";
import orderStore from "../../store/orderStore";
import {DELIVERY, ONLINE, CHECKOUT, PICKUP} from "../../store/orderStore";

const Ordering = observer((props: {close: any}) => {

    const selectReceiveWayButtonClassname = (buttonType: string) => {
        let classname = styles["selectButton"]
        if (buttonType === "delivery" && orderStore.receiveWay === "delivery") {
            classname += ` ${styles["selectedLeft"]}`
        }
        if (buttonType === "pickup" && orderStore.receiveWay === "pickup") {
            classname += ` ${styles["selectedRight"]}`
        }
        return classname
    }

    const selectPaymentTypeButtonClassname = (buttonType: string) => {
        let classname = styles["selectButtonWide"]
        if (buttonType === "online" && orderStore.paymentType === "online") {
            classname += ` ${styles["selected"]}`
        }
        if (buttonType === "checkout" && orderStore.paymentType === "checkout") {
            classname += ` ${styles["selected"]}`
        }
        return classname
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.cart}>
                <img
                    src={closeImg}
                    className={styles.closeImg}
                    alt={""}
                    onClick={(event) => {
                        props.close()
                        event.stopPropagation()
                    }}
                />
                <div className={styles.header}>
                    Оформление заказа
                </div>
                <div className={styles["divider"]} />

                <div className={styles["labelRow"]}>
                    <img src={number1Image} alt={""} />
                    <div className={styles["label"]}>
                        Как вас зовут и как с вами связаться?
                    </div>
                </div>

                <div className={styles["formRow"]}>
                    <input
                        className={styles["inputName"]}
                        placeholder={"Имя"}
                        value={orderStore.name}
                        onChange={event => orderStore.setName(event.target.value)}
                    />
                    <InputMask
                        className={styles["inputName"]}
                        mask="+7 (999) 999-99-99"
                        placeholder={"+7"}
                        value={orderStore.phone}
                        onChange={event => orderStore.setPhone(event.target.value)}
                    />
                </div>

                <div className={styles["labelRow"]}>
                    <img src={number2Image} alt={""} />
                    <div className={styles["label"]}>
                        Как вы хотите получить заказ?
                    </div>
                </div>

                <div className={styles["formRow"]}>
                    <div
                        className={selectReceiveWayButtonClassname(DELIVERY)}
                        onClick={() => orderStore.setReceiveWay(DELIVERY)}
                    >
                        Доставка
                    </div>
                    <div
                        className={selectReceiveWayButtonClassname(PICKUP)}
                        onClick={() => orderStore.setReceiveWay(PICKUP)}
                    >
                        Самовывоз
                    </div>
                </div>

                {orderStore.receiveWay === DELIVERY
                    ? <DeliveryForm />
                    : <PickupForm />
                }

                <div className={styles["labelRow"]}>
                    <img src={number3Image} alt={""} />
                    <div className={styles["label"]}>
                        Способ оплаты
                    </div>
                </div>

                <div
                    className={selectPaymentTypeButtonClassname(ONLINE)}
                    onClick={() => orderStore.setPaymentType(ONLINE)}
                >
                    Онлайн оплата
                </div>

                <div
                    className={selectPaymentTypeButtonClassname(CHECKOUT)}
                    onClick={() => orderStore.setPaymentType(CHECKOUT)}
                >
                    На кассе
                </div>

                <div
                    className={styles.button}
                    onClick={() => {navStore.openResult()}}
                >
                    <div>Подтвердить</div>
                </div>

                <Drawer
                    anchor={'right'}
                    open={navStore.resultOpenState}
                    BackdropProps={{style:{opacity:0}}}
                >
                    <OrderingResult />
                </Drawer>
            </div>
        </div>
    )
})

export default Ordering