import Link from "../Link/Link"
import "./Contact.css"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RiMailAddLine } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"

function Contact() {
    return (
        <main>
            <section className="flexContainer">
                <header>
                    <figure className="photoContainer">
                        <img className="photo" src="./photo.jpg"/>
                    </figure>
                </header>

                <main>
                    <p>
                        <Link href="https://api.whatsapp.com/send?phone=555571997398005">
                            <AiOutlineWhatsApp className="iconWhats"/>
                        </Link>
                    </p>

                    <p >
                        <Link href="mailto:dev123gabriel@gmail.com">
                            <RiMailAddLine className="iconGmail"/>
                        </Link>
                    </p>

                    <p>
                        <Link href="https://github.com/Eubiel178">
                            <FaGithub className="iconGitHub"/>
                        </Link>
                    </p>          

                    <p>
                        <Link href="https://www.linkedin.com/in/devgabrielsilva">
                            <FaLinkedin className="iconLinkedin"/>
                        </Link>
                    </p>
                </main>
            </section>

            <section className="sectionContainer">
                <div>
                    <h1 className="title">Gabriel Silva</h1>

                    <p className="paragraph">
                        <span className="emphasis">Dev Front End</span>
                    </p>
                </div>    
            </section>
        </main>
    )
}

export default Contact