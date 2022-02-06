import Container from '../../layout/Container';
import Particles from 'react-tsparticles';
import Typist from 'react-typist';
import AmongUs from '../../components/Particles/AmongUs';
import Stars from '../../components/Particles/Stars';
import './styles.scss';
export default function Home() {
    return (
        <section className="s-home">
            <Container>
                <div className="main-home">
                    <Stars />
                    <Typist>
                        <span> First Sentence </span>
                        <Typist.Backspace count={8} delay={200} />
                        <span> Phrase </span>
                    </Typist>
                </div>
            </Container>
        </section>
    );
}
