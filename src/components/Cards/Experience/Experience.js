import UlList from "../UlList/UlList"
import Link from "../Link/Link"
import Title from "../Title/Title"
import Styles from "./Experience.module.css"
import { RiMapPin4Line } from "react-icons/ri"

function Experience() {
    return(
        <main className={Styles.container}>
            <header>
                <Title title="Experiência"/>
            </header>

            <section>
                <h3 className={Styles.text}>Front End Developer</h3>

                <p className={Styles.text}>
                    Bom tenho alguns projetos que desenvolvi e hospedei no meu <Link href="https://github.com/Eubiel178">Github</Link>, estarei listando em ordem logo abaixo.
                </p>
                
                <UlList>
                    <li className={Styles.listItem}>
                        Um dos projeto que desenvolvi foi um <Link href="https://eubiel178.github.io/Cadastro-de-Devs/">Formulário</Link>  responsivo utilizando apenas HTML e CSS, e nele eu utilizei de alguns tipos de inputs (inputs são campos de entradas de dados onde tem a interação com o usuário). Após estudar bastante sobre flexbox, não tive muita dificuldade em organizar o layout, pois com flexbox tudo fica mais fácil.
                    </li>

                    <li className={Styles.listItem}>
                        Outro projeto que desenvolvi foi uma<Link href="https://eubiel178.github.io/balleBot/"> Landing Page</Link> que vi no canal da Rafaella Ballerini. Minha única dificuldade apenas foi em replicar o layout, porém com o inspecionar do chrome essa dificuldade desapereceu.
                    </li>

                    <li className={Styles.listItem}>
                        Essa é uma <Link href="https://eubiel178.github.io/calculadora/">Calculadora</Link> que desenvolvi a partir de tutorias com intuito de praticar Javascript.
                    </li>

                    <li className={Styles.listItem}>
                        Esse <Link href="https://tarefas-react-app.vercel.app/">App de Tarefas</Link> que desenvolvi com React tem como foco anotar as tarefas do úsuario e imprimir na tela.
                    </li>
                </UlList>
            </section>
        </main>
    )
}

export default Experience