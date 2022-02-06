import './styles.scss';
import P from 'prop-types';
export default function Container({ children }) {
    return <Container>{children}</Container>;
}
Container.propTypes = {
    children: P.node,
};
