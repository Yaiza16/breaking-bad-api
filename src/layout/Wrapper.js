import PropTypes from 'prop-types';
import useStyles from '../theme/elements/layoutStyles';

function Wrapper({ children }) {
  const { wrapper } = useStyles();
  return <div className={wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
