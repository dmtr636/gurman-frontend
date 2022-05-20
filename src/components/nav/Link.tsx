import styles from "./Link.module.css";
import navStore from "../../store/navStore";
import { observer } from "mobx-react-lite";
import React from "react";

function Link(props: { navIndex: number; name: string;}) {
    const match = props.navIndex === navStore.navIndex

    return (
        <div
            className={styles.item + (match ? " " + styles.active : "")}
            onClick={() => navStore.setNavIndex(props.navIndex, true)}
        >
            {props.name}
            {match && <div className={styles.line} />}
        </div>
    )
}

export default observer(Link)