import {observer} from "mobx-react-lite";
import navStore from "../../store/navStore";
import styles from "./SelectTime.module.css"
import closeImage from "../../images/Close.svg"
import React from "react";
import flagImage from "../../images/flag.svg"
import alarmImage from "../../images/alarm.svg"
import orderStore, {DELIVERY, PICKUP} from "../../store/orderStore";
import orderButtonArrow from "../../images/orderButtonArrow.svg";
import Drawer from "@mui/material/Drawer";
import Ordering from "./Ordering";

const SelectTime = observer(() => {
    return(
        <div className={styles["wrapper"]}>
            <div className={styles["selectTime"]}>
                <img
                    className={styles["closeImg"]}
                    alt={""}
                    src={closeImage}
                    onClick={() => navStore.closeSelectTime()}
                />
                <div className={styles.header}>
                    Когда начать готовить?
                </div>

                <div className={styles["divider"]} />

                <div className={styles["formRow"]}>
                    <div
                        className={orderStore.cookingTime === -1 ? styles["selectButtonSelected"] : styles["selectButton"]}
                        onClick={() => orderStore.setCookingTime(-1)}
                    >
                        <img
                            src={flagImage}
                            alt={""}
                        />
                        Как можно скорее!
                    </div>
                    <div
                        className={orderStore.cookingTime !== -1 ? styles["selectButtonSelected"] : styles["selectButton"]}
                        onClick={() => orderStore.setCookingTime(16)}
                    >
                        <img
                            src={alarmImage}
                            alt={""}
                        />
                        Ко времени
                    </div>
                </div>

                <div className={styles["divider"]} />

                <div
                    className={styles.button}
                    onClick={() => navStore.openOrdering()}
                >
                    <div>Далее</div>
                    <img src={orderButtonArrow} alt={""} />
                </div>

                <Drawer
                    anchor={'right'}
                    open={navStore.orderingOpenState}
                    BackdropProps={{style:{opacity:0}}}
                >
                    <Ordering close={() => navStore.closeOrdering()} />
                </Drawer>
            </div>
        </div>
    )
})

export default SelectTime