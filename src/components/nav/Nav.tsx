import {observer} from "mobx-react-lite";
import category from "../../store/categoryStore";
import styles from './Nav.module.css'
import Link from "./Link";

const Nav = observer(() => {
    const categories = category.categories

    return (
        <nav className={styles.nav}>
            <Link path={"promotions"} name={"Акции"} key={0} />
            {categories.map((category) =>
                <Link path={category.path} name={category.name} key={category.id} />
            )}
        </nav>
    )
})

export default Nav