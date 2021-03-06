import React from "react";
import PropTypes from "prop-types";

export default function NavOption({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="calendar-nav-button btn btn-primary "
    >
      <i className={`fas fa-angle-${icon}`}></i>
    </button>
  );
}

NavOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};
