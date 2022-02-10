import Container from '../Container';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import './styles.scss';
export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="main-footer">
                    <ul>
                        <li>
                            <a href="">
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <AiOutlineWhatsApp />
                            </a>
                        </li>
                    </ul>
                    <h4>
                        Desenvolvido por: <a href="">Guilherme dos Reis Leoni</a>
                    </h4>
                </div>
            </Container>
        </footer>
    );
}
