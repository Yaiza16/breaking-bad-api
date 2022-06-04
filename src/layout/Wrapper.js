import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return <div className="page-wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
