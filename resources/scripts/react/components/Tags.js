import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Tags = ({ tags, ...props }) => (
    <p {...props}>{tags.map((t) => `#${t}`).join(' ')}</p>
);

Tags.propTypes = propTypes;

export default Tags;
