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
        <div className={themeDark ? 'main_switch dark_main_switch' : 'main_switch light_main_switch'}>
            <label htmlFor="switch">
                <span>Escuro</span>/<span>Claro</span>
            </label>
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
