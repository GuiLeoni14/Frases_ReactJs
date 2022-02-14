import Container from '../../../layout/Container';
import Stars from '../../../components/Particles/Stars';
import Frase from '../Frase';
import Switch_All from '../../../components/Switch';
import { ThemeContext } from '../../../context/ThemeProvider/context';
import { toggleTheme } from '../../../context/ThemeProvider/actions';
import { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { loadFrases } from '../../../context/FrasesProvider/actions';
import { FrasesContext } from '../../../context/FrasesProvider/context';
import { searchOneFrases } from '../../../context/FrasesProvider/actions';
export default function SectionHome() {
    const theContext = useContext(FrasesContext);
    const {
        stateFrases: { frases, frase, loading },
        frasesDispatch,
    } = theContext;
    const {
        themeMode: { themeDark },
    } = useContext(ThemeContext);
    const searchFrase = () => {
        console.log('Fui chamado');
        searchOneFrases(frasesDispatch, frases).then((dispatch) => {
            dispatch();
        });
    };
    console.log(frase);
    return (
        <section className={themeDark ? `s_home s_home_dark` : `s_home s_home_light`}>
            <Container>
                <div className="main_home" data-aos="fade-up">
                    <h1 data-aos="zoom-in">Inspire-se, e transforme o Mundo!</h1>
                    <Stars />
                    <Frase />
                    <button href="" className="btn_frase" onClick={searchFrase}>
                        inspirar-me
                    </button>
                </div>
                <Switch_All />
            </Container>
        </section>
    );
}
