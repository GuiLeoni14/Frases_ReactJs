import Container from '../../layout/Container';
import Typist from 'react-typist';
import Stars from '../../components/Particles/Stars';
import './styles.scss';
import { useEffect, useState } from 'react';
import FrasesProvider from '../../context/FrasesProvider';
import Frase from './Frase';
import AmongUs from '../../components/Particles/AmongUs';
import * as Switch from '@radix-ui/react-switch';
import Switch_All from '../../components/Switch';
export default function Home() {
    const [modeLight, setModeLight] = useState(true);
    return (
        <FrasesProvider>
            <section className={modeLight ? `light s_home` : `s_home`}>
                <Container>
                    <div className="main-home">
                        <Typist startDelay={800}>
                            <h1>Inspire-se, e transforme o Mundo!</h1>
                        </Typist>
                        <Stars />
                        <Frase />
                    </div>
                    <Switch_All setMode={setModeLight} mode={modeLight} />
                </Container>
            </section>
        </FrasesProvider>
    );
}
