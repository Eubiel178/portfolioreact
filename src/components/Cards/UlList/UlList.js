import Styles from "./UlList.module.css"

function UlList({children}) {
    return (
        <ul className={Styles.ulList}>
            {children}
        </ul>
    )
}

export default UlList