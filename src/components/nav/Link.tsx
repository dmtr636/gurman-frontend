import {NavLink, useMatch, useResolvedPath} from "react-router-dom";
import styles from "./Link.module.css";

function Link(props: { path: string; name: string }) {
    let resolved = useResolvedPath(props.path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavLink
            to={"/" + props.path}
            className={styles.item + (match ? " " + styles.active : "")}
        >
            {props.name}
            {match && <div className={styles.line} />}
        </NavLink>
    )
}

export default Link