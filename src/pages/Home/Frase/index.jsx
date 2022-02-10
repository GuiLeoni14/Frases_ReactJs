import Typist from 'react-typist';
import P from 'prop-types';
import './styles.scss';
import { useRef, useContext, useEffect, useState } from 'react';
import { loadFrases, searchOneFrases } from '../../../context/FrasesProvider/actions';
import { FrasesContext } from '../../../context/FrasesProvider/context';
import { ThemeContext } from '../../../context/ThemeProvider/context';
import left_aspas from '../../../assets/img/left-aspas.svg';
import right_aspas from '../../../assets/img/right-aspas.svg';
export default function Frase() {
    const componentIsMounted = useRef(true);
    const theContext = useContext(FrasesContext);
    const {
        themeMode: { themeDark },
    } = useContext(ThemeContext);
    const {
        stateFrases: { frases, frase, loading },
        frasesDispatch,
    } = theContext;
    useEffect(() => {
        loadFrases(frasesDispatch).then((dispatch) => {
            if (componentIsMounted.current) {
                dispatch();
            }
        });
        return () => {
            componentIsMounted.current = false;
        };
    }, [frasesDispatch]);
    useEffect(() => {
        if (frases.length > 0) {
            searchOneFrases(frasesDispatch, frases).then((dispatch) => {
                dispatch();
            });
        }
    }, [frasesDispatch, frases]);
    return (
        <div className={themeDark ? 'main_frase main_frase_dark' : 'main_frase main_frase_light'}>
            {frase['quote'] && (
                <>
                    <img src={left_aspas} alt="" id="left_aspas" />
                    <Typist startDelay={800}>
                        <p id="frase">{frase['quote']}</p>
                    </Typist>
                    <img src={right_aspas} alt="" id="right_aspas" />
                    <Typist>
                        <span>{frase['author']}</span>
                        <Typist.Backspace count={frase['author'].length} delay={100} />
                        <span id="autor">{frase['author']}</span>
                    </Typist>
                </>
            )}
        </div>
    );
}
