import styles from './Layout.module.css'
import Header from "./header/Header";
import Nav from './nav/Nav'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, NavLink
} from "react-router-dom";
import category from "../store/category";
import {observer} from "mobx-react-lite";

const Layout = observer(() => {
    const categories = category.categories

    return (
        <div className={styles.layout}>
            <Header />

            <Router>
                <Nav />

                <Routes>
                    {categories.map((category) =>
                        <Route path={'/' + category.path} element={<h1>{category.name}</h1>} />
                    )}
                    <Route path={'*'} element={<h1>Not found</h1>} />

                </Routes>
            </Router>
        </div>
    )
})

export default Layout
