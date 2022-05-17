import styles from "./Link.module.css";
import navStore from "../../store/navStore";
import { observer } from "mobx-react-lite";
import React, {useRef} from "react";

function Link(props: { categoryId: number; name: string;}) {
    const match = props.categoryId === navStore.categoryId
    const ref = useRef(null)

    if (match) {
        navStore.setActiveNavLinkRef(ref)
    }

    return (
        <div
            ref={ref}
            className={styles.item + (match ? " " + styles.active : "")}
            onClick={() => navStore.setCategoryId(props.categoryId)}
        >
            {props.name}
            {match && <div className={styles.line} />}
        </div>
    )
}

export default observer(Link)