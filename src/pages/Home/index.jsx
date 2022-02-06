import Container from '../../layout/Container';
import Typist from 'react-typist';
import Stars from '../../components/Particles/Stars';
import './styles.scss';
import { useEffect, useState } from 'react';
import FrasesProvider from '../../context/FrasesProvider';
import Frase from './Frase';
import AmongUs from '../../components/Particles/AmongUs';
export default function Home() {
    return (
        <FrasesProvider>
            <section className="s-home">
                <Container>
                    <div className="main-home">
                        <AmongUs />
                        <Frase />
                    </div>
                </Container>
            </section>
        </FrasesProvider>
    );
}
