import Link from "../Link/Link"
import "./Contact.css"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RiMailAddLine } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"

function Contact() {
    return (
        <section className="container">
            <main className="flexContainer">
                <figure className="photoContainer">
                    <img className="photo" src="./photo.jpg"/>
                </figure>

                <section>
                    <p>
                        <Link href="https://api.whatsapp.com/send?phone=555571997398005">
                            <AiOutlineWhatsApp className="iconWhats"/>
                        </Link>
                    </p>

                    <p >
                        <Link>
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
                </section>
            </main>

            <section className="sectionContainer">
                <section>
                    <h1 className="title">Gabriel Silva</h1>

                    <p className="paragraph">
                        <span className="emphasis">Dev Front End</span>
                    </p>
                </section>    
            </section>
        </section>
    )
}

export default Contact