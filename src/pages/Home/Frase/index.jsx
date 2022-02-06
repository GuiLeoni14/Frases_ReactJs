import Typist from 'react-typist';
import P from 'prop-types';
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
        searchOneFrases(frasesDispatch, frases).then((dispatch) => {
            dispatch();
        });
    }, [frasesDispatch, frases]);
    return (
        <>
            {frase && (
                <div className="main-frase">
                    <Typist>
                        <span>{frase['quote']}</span>
                    </Typist>
                    <Typist>
                        <span>{frase['author']}</span>
                        <Typist.Backspace count={8} delay={200} />
                        <span>{frase['author']}</span>
                    </Typist>
                </div>
            )}
        </>
    );
}
