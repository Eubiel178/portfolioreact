import Styles from "./AboutMe.module.css"
import Title from "../Title/Title"

function AboutMe() {
    return(
        <section>
            <Title title="Sobre Mim"/>

            <p className={Styles.paragraph}>
                Me chamo Gabriel e sou apaixonado por tecnologia atualmante estou estudando HTML5, CSS e JavaScript. Sou um tipo de pessoa que esta sempre em busca de aprender coisas novas sobre a área que escolhi, no caso Front-end. Meu objetivo profissional é adquiri experiência para poder me tornar um desenvolvedor web melhor.
            </p>

        </section>
    )
}

export default AboutMe