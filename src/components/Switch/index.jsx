import './styles.scss';
import * as Switch from '@radix-ui/react-switch';
import P from 'prop-types';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeProvider/context';
import { toggleTheme } from '../../context/ThemeProvider/actions';
export default function Switch_All() {
    const {
        setThemeMode,
        themeMode: { themeDark },
    } = useContext(ThemeContext);
    return (
        <div className="main_switch">
            <label htmlFor="switch">Escuro/Claro</label>
            <Switch.Root
                className="switch"
                defaultChecked
                name="switch"
                id="switch"
                onClick={() => {
                    toggleTheme({ setThemeMode, themeDark });
                }}
            >
                <Switch.Thumb className="switch_thumb" />
            </Switch.Root>
        </div>
    );
}
Switch_All.propTypes = {
    setThemeMode: P.func,
    themeDark: P.bool,
};
