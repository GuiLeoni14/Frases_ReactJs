import Container from '../Container';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import './styles.scss';
export default function NavBar() {
    return (
        <header>
            <Container>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/gui_leoni14/" target={'_blank'} rel="noreferrer">
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/GuiLeoni14" target={'_blank'} rel="noreferrer">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/guileoni14" target={'_blank'} rel="noreferrer">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://api.whatsapp.com/send/?phone=5535999979041&text&app_absent=0"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            <AiOutlineWhatsApp />
                        </a>
                    </li>
                </ul>
            </Container>
        </header>
    );
}
