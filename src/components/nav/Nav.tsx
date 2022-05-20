import {observer} from "mobx-react-lite";
import category from "../../store/categoryStore";
import styles from './Nav.module.css'
import Link from "./Link";
import React from "react";

const Nav = observer(() => {
    const categories = category.categories

    return (
        <nav className={styles.nav}>
            {categories.map((category, index) =>
                <Link
                    navIndex={index}
                    key={index}
                    name={category.name}
                />
            )}
        </nav>
    )
})

export default Nav