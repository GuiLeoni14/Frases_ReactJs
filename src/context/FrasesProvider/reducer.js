import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.FRASES_SUCCESS:
            console.log('carregou frases');
            return { ...state, frases: action.payload, loading: false };
        case types.FRASES_LOADING:
            return { ...state, loading: true };
        case types.FRASE_SUCCESS:
            return { ...state, frase: action.payload, loading: false };
        case types.FRASE_LOADING:
            return { ...state, loading: true };
    }
    return { ...state };
};
