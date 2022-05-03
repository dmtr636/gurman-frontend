import styles from './Layout.module.css'
import Header from "./header/Header";
import Nav from './nav/Nav'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, NavLink, HashRouter
} from "react-router-dom";
import category from "../store/category";
import {observer} from "mobx-react-lite";

const Layout = observer(() => {
    const categories = category.categories

    return (
        <div className={styles.layout}>
            <Header />

            <HashRouter>
                <Nav />

                <Routes>
                    {categories.map((category) =>
                        <Route
                            path={'/' + category.path}
                            element={<h1>{category.name}</h1>}
                            key={category.id}
                        />
                    )}
                    <Route path={'*'} element={<h1>Not found</h1>} />

                </Routes>
            </HashRouter>
        </div>
    )
})

export default Layout
