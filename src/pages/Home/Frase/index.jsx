import Typist from 'react-typist';
import P from 'prop-types';
import './styles.scss';
import { useRef, useContext, useEffect, useState } from 'react';
import { loadFrases, searchOneFrases } from '../../../context/FrasesProvider/actions';
import { FrasesContext } from '../../../context/FrasesProvider/context';
export default function Frase() {
    const componentIsMounted = useRef(true);
    const theContext = useContext(FrasesContext);
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
        <div className="main-frase">
            {frase['quote'] && (
                <>
                    <Typist startDelay={800}>
                        <span>{frase['quote']}</span>
                    </Typist>
                    <Typist>
                        <span>{frase['author']}</span>
                        <Typist.Backspace count={frase['author'].length} delay={100} />
                        <span>{frase['author']}</span>
                    </Typist>
                </>
            )}
        </div>
    );
}
