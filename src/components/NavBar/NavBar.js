import { Link } from "react-router-dom"
import Styles from "./NavBar.module.css"

function NavBar() {
    return(
        <ul className={Styles.navbar}>

            <li className={Styles.navItem}>
                <Link className={Styles.navItem} to="/aboutme">Sobre Mim</Link>
            </li>

            <li className={Styles.navItem}>
                <Link className={Styles.navItem}  to="/formation">Formação</Link>
            </li>

            <li className={Styles.navItem}>
                <Link className={Styles.navItem} to="/experience">Experiência</Link>
            </li>

            <li className={Styles.navItem}>
                <Link to="/">Contato</Link>
            </li>
        </ul>
    )
}

export default NavBar