import Container from '../../../layout/Container';
import Stars from '../../../components/Particles/Stars';
import Frase from '../Frase';
import Switch_All from '../../../components/Switch';
import { ThemeContext } from '../../../context/ThemeProvider/context';
import { toggleTheme } from '../../../context/ThemeProvider/actions';
import { useContext } from 'react';
export default function SectionHome() {
    const {
        setThemeMode,
        themeMode: { themeDark },
    } = useContext(ThemeContext);
    return (
        <section className={themeDark ? `dark s_home` : `s_home`}>
            <Container>
                <div className="main-home" data-aos="fade-up">
                    <h1 data-aos="zoom-in">Inspire-se, e transforme o Mundo!</h1>
                    <Stars />
                    <Frase />
                </div>
                <Switch_All />
            </Container>
        </section>
    );
}
