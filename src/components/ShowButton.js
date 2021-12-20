import React from 'react';
import PropTypes from 'prop-types';

function ShowButton({ isExpanded, show }) {
  return (
    isExpanded
      ? (
        <button
          type="button"
          className="bottom-bar expand-button"
          onClick={show}
        >
          Less
          {' '}
          <i className="chevron up icon" />
        </button>
      )
      : (
        <button
          type="button"
          className="bottom-bar expand-button"
          onClick={show}
        >
          More
          {' '}
          <i className="chevron down icon" />
        </button>
      )
  );
}

ShowButton.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  show: PropTypes.func.isRequired,
};

export default ShowButton;
