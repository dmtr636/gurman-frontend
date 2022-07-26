import styles from './Header.module.css'
import HeaderCart from "./HeaderCart";
import infoIcon from "../../images/infoIcon.svg"
import React, {useEffect} from "react";
import {Popover} from "@mui/material";
import infoLocation from "../../images/infoLocation.svg"
import infoPhone from "../../images/infoPhone.svg"
import navBurger from "../../images/navBurger.svg"
import navClose from "../../images/navClose.svg"
import Dialog from "@mui/material/Dialog";
import navStore from "../../store/navStore";
import EmptyCart from "../cart/EmptyCart";
import { observer } from 'mobx-react-lite';
import MobileMenu from "./MobileMenu";
import productStore from "../../store/productStore";
import brandImage from "../../images/brandImage.svg"
import brandTextImage from "../../images/brandTextImage.svg"
import settingsStore from "../../store/settingsStore";
import HeaderCartClosed from "./HeaderCartClosed";
import cartClosedBg from "../../images/headerCartClosedBg.svg"

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

    useEffect(() => {
        //preloading image
        new Image().src = cartClosedBg;
    }, []);

    const open = Boolean(anchorEl);

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                {navStore.backButtonVisible &&
                    <div
                        className={styles['backButton']}
                        onClick={() => navStore.back()}
                    />
                }

                <img src={brandImage} alt={""} className={styles['brandImage']} onClick={() => navStore.setNavIndex(0, true)}/>
                <img src={brandTextImage} alt={""} className={styles['brand']} onClick={() => navStore.setNavIndex(0, true)} />
                <div className={styles.info}>
                    <a href="https://yandex.ru/maps/-/CCUFV8xoPC" target="_blank" rel="noreferrer">
                        <img src={infoLocation} alt={""} />
                    </a>
                    <div>
                        <a href={"https://yandex.ru/maps/-/CCUFV8xoPC"} target="_blank" rel="noreferrer" className={styles.infoTextTop + " " + styles['infoTextTop']}>
                            Калуга
                        </a>
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
                        <a href={"tel:+79109130005"} className={styles.infoTextTop + " " + styles['infoTextTop']}>
                            8 910 913 00 05
                        </a>
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

                {settingsStore.siteOpenState
                    ? <HeaderCart />
                    : <HeaderCartClosed />
                }


                {navStore.menuOpenState
                    ?
                    <img
                        className={styles['navClose']}
                        src={navClose}
                        alt={""}
                        onClick={() => navStore.closeMenu()}
                    />
                    :
                    <img
                        className={styles['navBurger']}
                        src={navBurger}
                        alt={""}
                        onClick={() => navStore.openMenu()}
                    />
                }

                <Dialog
                    open={navStore.menuOpenState}
                    PaperProps={{ style: {
                            width: "155px",
                            position: "absolute",
                            right: "0",
                            top: "60px",
                            margin: "0",
                            borderRadius: "0px 0px 0px 5px"
                    }}}
                    onClose={(event: React.KeyboardEvent | React.MouseEvent) => {
                        event.stopPropagation()
                        navStore.closeMenu()
                    }}
                >
                    <MobileMenu />
                </Dialog>
            </div>
        </div>
    )
}

export default observer(Header)