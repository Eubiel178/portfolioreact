import UlList from "../UlList/UlList"
import Title from "../Title/Title"

import Styles from "./Formation.module.css"

function Formation() {
    return (
        <main>
            <header>
                <Title title="Formação"/>
            </header>

            <section>
                <UlList>
                    <li className={Styles.liItem}>HTML5</li>
                    <li className={Styles.liItem}>CSS</li>
                    <li className={Styles.liItem}>Lógica de Programação</li>
                    <li className={Styles.liItem}>JavaScript</li>
                    <li className={Styles.liItem}>React</li>
                </UlList>
            </section>
        </main>
    )
}

export default Formation