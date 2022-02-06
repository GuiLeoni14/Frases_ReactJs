import * as types from './types';
export const loadFrases = async (dispatch) => {
    dispatch({ type: types.FRASES_LOADING });
    const response = await fetch('http://localhost:5000/frases');
    const data = await response.json();
    return () => dispatch({ type: types.FRASES_SUCCESS, payload: data });
};
export const searchOneFrases = async (dispatch, frases) => {
    const number = Math.floor(Math.random() * (290 - 0)) + 0;
    const data = frases[number];
    return () => dispatch({ type: types.FRASE_SUCCESS, payload: data });
};
