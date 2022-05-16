import styles from "./Link.module.css";
import navStore from "../../store/navStore";
import { observer } from "mobx-react-lite";

function Link(props: { categoryId: number; name: string }) {
    const match = props.categoryId === navStore.categoryId

    return (
        <div
            className={styles.item + (match ? " " + styles.active : "")}
            onClick={() => navStore.setCategoryId(props.categoryId)}
        >
            {props.name}
            {match && <div className={styles.line} />}
        </div>
    )
}

export default observer(Link)