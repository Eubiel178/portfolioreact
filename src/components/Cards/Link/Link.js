import { Children } from "react"
import Styles from "./Link.module.css"  

function Link({href, children}) {
    return (
        <a className={Styles.link} href={href} target="_blank">{children}</a>
    )
}

export default Link