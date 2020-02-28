import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.string,
  depth: PropTypes.number,
};

const defaultProps = {
  classes: '',
  depth: 1,
};

const Screen = ({ depth, classes }) => (
    <div data-depth={depth} className={`screen ${classes}`}>
      <div className="name">
        <p>Etienne</p>
        <p>Peret</p>
      </div>
      <p className="job">Développeur Web</p>
    </div>
);

Screen.propTypes = propTypes;
Screen.defaultProps = defaultProps;

export default Screen;
