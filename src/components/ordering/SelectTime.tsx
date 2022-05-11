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
import selectMark from "../../images/selectMark.svg"
import {Popover, Typography} from "@mui/material";

const cookingTimes = () => {
    const currentHours = new Date().getHours()
    let times = []

    for (let hour = currentHours + 2; hour <= 23; hour++) {
        times.push(hour + ":00")
    }
    times.push("24:00")
    return times
}

function SelectMenuItem(props: { time: any, onClick: () => void }) {
    return <div
        className={
            props.time === orderStore.cookingTime
                ? styles["selectMenuItemActive"]
                : styles["selectMenuItem"]
        }
        onClick={props.onClick}
    >
        {props.time}
    </div>;
}

const SelectTime = observer(() => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                        className={orderStore.cookingTime === "" ? styles["selectButtonSelected"] : styles["selectButton"]}
                        onClick={() => orderStore.setCookingTime("")}
                    >
                        <img
                            src={flagImage}
                            alt={""}
                        />
                        Как можно скорее!
                    </div>
                    <div
                        className={orderStore.cookingTime !== "" ? styles["selectButtonSelected"] : styles["selectButton"]}
                        onClick={() => orderStore.setCookingTime(cookingTimes()[0])}
                    >
                        <img
                            src={alarmImage}
                            alt={""}
                        />
                        Ко времени
                    </div>
                </div>

                {orderStore.cookingTime !== "" &&
                    <>
                        <div className={styles["divider"]} />

                        <div className={styles["formRow"]}>
                            <div className={styles['todayLabel']}>
                                Сегодня
                            </div>
                            <button
                                className={open ? styles["selectActive"] : styles["select"]}
                                onClick={handleClick}
                            >
                                {orderStore.cookingTime}
                                <img
                                    className={open ? styles["selectMarkRotated"] : styles["selectMark"]}
                                    src={selectMark}
                                    alt={""}
                                />
                            </button>
                        </div>

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            elevation={0}
                            PaperProps={{style: {marginTop: "20px", width: "250px"}}}
                        >
                            <div className={styles["selectMenu"]}>
                                {cookingTimes().map(time =>
                                    <SelectMenuItem time={time} onClick={() => {
                                        orderStore.setCookingTime(time)
                                        setAnchorEl(null)
                                    }}/>
                                )}
                                <div className={styles['verticalDivider1']}></div>
                                <div className={styles['verticalDivider2']}></div>
                                <div className={styles['verticalDivider3']}></div>
                            </div>
                        </Popover>
                    </>
                }

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