import { useReducer } from 'react';
import { reducer } from './reducer';
import P from 'prop-types';
import { data } from './data';
import { FrasesContext } from './context';
export default function FrasesProvider({ children }) {
    const [stateFrases, frasesDispatch] = useReducer(reducer, data);
    return <FrasesContext.Provider value={{ stateFrases, frasesDispatch }}>{children}</FrasesContext.Provider>;
}

FrasesProvider.propTypes = {
    children: P.node.isRequired,
};
