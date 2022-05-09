import styles from './Ordering.module.css'
import closeImg from "../../images/Close.svg";
import {observer} from "mobx-react-lite";
import number1Image from "../../images/Number1.svg"
import number2Image from "../../images/Number2.svg"
import number3Image from "../../images/Number3.svg"
import InputMask from "react-input-mask";
import {useState} from "react";

const Ordering = observer((props: {close: any}) => {
    const [receiveWay, setReceiveWay] = useState("delivery")

    const selectButtonClassname = (buttonType: string) => {
        let classname = styles["selectButton"]
        if (buttonType === "delivery" && receiveWay === "delivery") {
            classname += ` ${styles["selectedLeft"]}`
        }
        if (buttonType === "pickup" && receiveWay === "pickup") {
            classname += ` ${styles["selectedRight"]}`
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
                    <input className={styles["inputName"]} placeholder={"Имя"} />
                    <InputMask className={styles["inputName"]} mask="+7 (999) 999-99-99" placeholder={"+7"} />
                </div>

                <div className={styles["labelRow"]}>
                    <img src={number2Image} alt={""} />
                    <div className={styles["label"]}>
                        Как вы хотите получить заказ?
                    </div>
                </div>

                <div className={styles["formRow"]}>
                    <div
                        className={selectButtonClassname("delivery")}
                        onClick={() => setReceiveWay("delivery")}
                    >
                        Доставка
                    </div>
                    <div
                        className={selectButtonClassname("pickup")}
                        onClick={() => setReceiveWay("pickup")}
                    >
                        Самовывоз
                    </div>
                </div>

                <div className={styles["labelRow"]}>
                    <img src={number3Image} alt={""} />
                    <div className={styles["label"]}>
                        Способ оплаты
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Ordering