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
import ThemeProvider from '../../context/ThemeProvider';
import SectionHome from './SectionHome';
export default function Home() {
    AOS.init({
        once: false,
    });
    return (
        <ThemeProvider>
            <FrasesProvider>
                <SectionHome />
            </FrasesProvider>
        </ThemeProvider>
    );
}
