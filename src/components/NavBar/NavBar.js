import { Link } from "react-router-dom"
import Styles from "./NavBar.module.css"

function NavBar() {
    return(
        <nav>
            <ul className={Styles.navbar}>

                <li className={Styles.li}>
                    <Link className={Styles.navItemLink} to="/aboutme">Sobre Mim</Link>
                </li>

                <li className={Styles.li}>
                    <Link className={Styles.navItemLink}  to="/formation">Formação</Link>
                </li>

                <li className={Styles.li}>
                    <Link className={Styles.navItemLink} to="/experience">Experiência</Link>
                </li>

                <li className={Styles.li}>
                    <Link className={Styles.navItemLink} to="/">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
