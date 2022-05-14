import styles from './Header.module.css'
import HeaderCart from "./HeaderCart";
import infoIcon from "../../images/infoIcon.svg"
import React from "react";
import {Popover} from "@mui/material";
import infoLocation from "../../images/infoLocation.svg"
import infoPhone from "../../images/infoPhone.svg"
import navBurger from "../../images/navBurger.svg"

const isNight = () => {
    let hours = new Date().getHours()
    return hours >= 22 || hours < 8;
}

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.brand}>
                    Гурман
                </div>
                <div className={styles.info}>
                    <a href="https://yandex.ru/maps/-/CCUFV8xoPC" target="_blank" rel="noreferrer">
                        <img src={infoLocation} alt={""} />
                    </a>
                    <div>
                        <div className={styles.infoTextTop}>
                            Калуга
                        </div>
                        <div className={styles.infoTextBottom}>
                            Плеханова, 19А
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <a href={"tel:+79109140005"}>
                        <img src={infoPhone} alt={""} />
                    </a>
                    <div>
                        <div className={styles.infoTextTop}>
                            8 910 914 00 05
                        </div>
                        <div className={styles.infoTextBottom}>
                            Готовим круглосуточно
                        </div>
                    </div>
                </div>
                {isNight() &&
                    <div className={styles["infoPayment"]}>
                        <img
                            src={infoIcon}
                            alt={""}
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                            disableScrollLock
                            elevation={0}
                            PaperProps={{style: {backgroundColor: 'transparent',}}}
                        >
                            <div className={styles["infoPaymentPopup"]}>
                                <div className={"text-info"}>
                                    Все способы оплаты будут доступны<br />
                                    с 8:00 до 22:00
                                </div>
                            </div>
                        </Popover>
                        <div className={"text-info"}>
                            Доступна только<br />
                            онлайн-оплата
                        </div>
                    </div>
                }
                <HeaderCart />
                <img className={styles['navBurger']} src={navBurger} alt={""} />
            </div>
        </div>
    )
}

export default Header