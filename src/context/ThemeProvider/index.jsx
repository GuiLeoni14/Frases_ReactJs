import * as types from './types';
import { ThemeContext } from './context';
import data from './data';
import { useState } from 'react';
import P from 'prop-types';
export default function ThemeProvider({ children }) {
    const [themeMode, setThemeMode] = useState(data);
    console.log(themeMode);
    return <ThemeContext.Provider value={{ themeMode, setThemeMode }}>{children}</ThemeContext.Provider>;
}
ThemeProvider.propTypes = {
    children: P.node,
};
