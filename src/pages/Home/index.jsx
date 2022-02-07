import Container from '../../layout/Container';
import Typist from 'react-typist';
import Stars from '../../components/Particles/Stars';
import './styles.scss';
import { useEffect, useRef, useState } from 'react';
import FrasesProvider from '../../context/FrasesProvider';
import Frase from './Frase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Switch_All from '../../components/Switch';
export default function Home() {
    AOS.init({
        once: false,
    });
    const [modeLight, setModeLight] = useState(true);
    const home = useRef(null);
    console.log(home.current);
    return (
        <FrasesProvider>
            <section className={modeLight ? `light s_home` : `s_home`} ref={home}>
                <Container>
                    <div className="main-home" data-aos="fade-up">
                        <h1 data-aos="zoom-in">Inspire-se, e transforme o Mundo!</h1>
                        <Stars />
                        <Frase />
                    </div>
                    <Switch_All setMode={setModeLight} mode={modeLight} />
                </Container>
            </section>
        </FrasesProvider>
    );
}
