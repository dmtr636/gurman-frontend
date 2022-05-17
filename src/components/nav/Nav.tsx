import {observer} from "mobx-react-lite";
import category from "../../store/categoryStore";
import styles from './Nav.module.css'
import Link from "./Link";
import React from "react";
import navStore from "../../store/navStore";

const Nav = observer(() => {
    const categories = category.categories

    return (
        <nav className={styles.nav}>
            <Link
                categoryId={0}
                name={"Акции"}
                key={0}
            />
            {categories.map((category) =>
                <Link
                    categoryId={category.id}
                    name={category.name}
                    key={category.id}
                />
            )}
        </nav>
    )
})

export default Nav