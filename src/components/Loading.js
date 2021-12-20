import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/EFTs.css';

function Loading({ body }) {
  return (
    <ul className={`${body} loading`}>
      <li>
        <Loader type="ThreeDots" color="var(--text-color)" height={50} width={50} />
      </li>
    </ul>
  );
}

Loading.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Loading;
