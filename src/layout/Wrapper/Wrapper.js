import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
