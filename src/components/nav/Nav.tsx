import {observer} from "mobx-react-lite";
import category from "../../store/category";
import styles from './Nav.module.css'
import Link from "./Link";

const Nav = observer(() => {
    const categories = category.categories

    return (
        <nav className={styles.nav}>
            {categories.map((category) =>
                <Link path={category.path} name={category.name} key={category.id} />
            )}
        </nav>
    )
})

export default Nav