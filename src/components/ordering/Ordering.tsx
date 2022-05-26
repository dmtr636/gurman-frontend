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
import OrderingResultSuccess from "./OrderingResultSuccess";
import orderStore, {CARD_COURIER, CASH_COURIER} from "../../store/orderStore";
import {DELIVERY, ONLINE, CHECKOUT, PICKUP} from "../../store/orderStore";
import SelectTime from "./SelectTime";
import {isNight} from "../../utils/utils";
import {postOrder} from "../../api/api"
import useWindowDimensions from "../../hooks/hooks";

const Ordering = observer((props: {close: any}) => {

    const selectReceiveWayButtonClassname = (buttonType: string) => {
        let classname = styles["selectButton"]
        if (buttonType === DELIVERY && orderStore.receiveWay === DELIVERY) {
            classname += ` ${styles["selectedLeft"]}`
        }
        if (buttonType === PICKUP && orderStore.receiveWay === PICKUP) {
            classname += ` ${styles["selectedRight"]}`
        }
        return classname
    }

    const selectPaymentTypeButtonClassname = (buttonType: string) => {
        let classname = styles["selectButtonWide"]
        if (buttonType === ONLINE && orderStore.paymentType === ONLINE) {
            classname += ` ${styles["selected"]}`
        }
        if (buttonType === CHECKOUT && orderStore.paymentType === CHECKOUT) {
            classname += ` ${styles["selected"]}`
        }
        if (buttonType === CARD_COURIER && orderStore.paymentType === CARD_COURIER) {
            classname += ` ${styles["selected"]}`
        }
        if (buttonType === CASH_COURIER && orderStore.paymentType === CASH_COURIER) {
            classname += ` ${styles["selected"]}`
        }
        return classname
    }

    const {width, height} = useWindowDimensions()

    return(
        <div className={styles.wrapper}>
            <div className={styles.cart}>
                <form onSubmit={(event) => {
                    postOrder()
                    if (orderStore.paymentType === ONLINE) {

                    } else {
                        navStore.openResult()
                    }
                    event.preventDefault()
                    event.stopPropagation()
                }}>
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
                            required={true}
                        />
                        <InputMask
                            className={styles["inputName"]}
                            mask="+7 (999) 999-99-99"
                            placeholder={"+7"}
                            value={orderStore.phone}
                            onChange={event => orderStore.setPhone(event.target.value)}
                            required={true}
                            pattern={"\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}"}
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

                    {isNight()
                        ?
                        <div className={styles["paymentMessage"]}>
                            Все способы оплаты будут доступны<br/>
                            с 8:00 до 22:00
                        </div>
                        :
                        <div className={styles["formRow"]}>
                            {orderStore.receiveWay === DELIVERY
                                ?
                                <>
                                    <div
                                        className={selectPaymentTypeButtonClassname(CASH_COURIER)}
                                        onClick={() => orderStore.setPaymentType(CASH_COURIER)}
                                    >
                                        {width < 768 ? "Наличными" : "Наличными курьеру"}
                                    </div>
                                    <div
                                        className={selectPaymentTypeButtonClassname(CARD_COURIER)}
                                        onClick={() => orderStore.setPaymentType(CARD_COURIER)}
                                    >
                                        {width < 768 ? "Картой" : "Картой курьеру"}
                                    </div>
                                </>
                                :
                                <div
                                    className={selectPaymentTypeButtonClassname(CHECKOUT)}
                                    onClick={() => orderStore.setPaymentType(CHECKOUT)}
                                >
                                    На кассе
                                </div>
                            }
                        </div>
                    }

                    {(width < 768 && orderStore.receiveWay === DELIVERY && !isNight()) &&
                        <div className={styles["paymentMessage"]}>
                            Оплата наличными или картой<br />
                            производится курьеру
                        </div>
                    }

                    <button
                        type={"submit"}
                        className={styles.button}
                    >
                        <div>Подтвердить</div>
                    </button>

                </form>
            </div>
        </div>
    )
})

export default Ordering