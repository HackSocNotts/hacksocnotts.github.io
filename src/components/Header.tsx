import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

const Header = (props) => {
  return (
    <header id="header" className="reveal alt">
      <h1>
        <a id="logo">
          Cogent <span>by Pixelarity</span>
        </a>
        <Navigation />
      </h1>
    </header>
  );
};

Header.propTypes = {};

export default Header;
