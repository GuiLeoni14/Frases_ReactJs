import './styles.scss';
import * as Switch from '@radix-ui/react-switch';
import P from 'prop-types';
export default function Switch_All({ setMode, mode }) {
    return (
        <div className="main_switch">
            <label htmlFor="switch">Escuro/Claro</label>
            <Switch.Root
                className="switch"
                defaultChecked
                name="switch"
                id="switch"
                onCheckedChange={() => setMode(!mode)}
            >
                <Switch.Thumb className="switch_thumb" />
            </Switch.Root>
        </div>
    );
}
Switch_All.propTypes = {
    setMode: P.func,
    mode: P.bool,
};
