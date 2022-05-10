import styles from "./DrawerContainer.module.css";
import closeImg from "../../images/Close.svg";
import {ReactNode} from "react";

const DrawerContainer = (props: { close: () => void, children: ReactNode }) => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["container"]}>
                <img
                    src={closeImg}
                    className={styles["closeImg"]}
                    alt={""}
                    onClick={(event) => {
                        props.close()
                        event.stopPropagation()
                    }}
                />
                {props.children}
            </div>
        </div>
    )
}

export default DrawerContainer