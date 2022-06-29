import Styles from "./Title.module.css"

function Title({title}) {
    return <h2 className={Styles.title}>{title}</h2>
}

export default Title