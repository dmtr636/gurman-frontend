import styles from "./Link.module.css";
import navStore from "../../store/navStore";
import { observer } from "mobx-react-lite";
import React, {useEffect, useRef} from "react";

function Link(props: { navIndex: number; name: string;}) {
    const match = props.navIndex === navStore.navIndex

    const ref = useRef(null)

    useEffect(() => {
        if (match && ref != null) {
            console.log("UE")
            // @ts-ignore
            //ref.current!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })

            setTimeout(() => {
                // @ts-ignore
                ref.current!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            }, 50)
        }
    }, [match, ref])

    return (
        <div
            className={styles.item + (match ? " " + styles.active : "")}
            onClick={() => navStore.setNavIndex(props.navIndex, true)}
            ref={ref}
        >
            {props.name}
            {match && <div className={styles.line} />}
        </div>
    )
}

export default observer(Link)