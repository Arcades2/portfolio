import React from 'react';
import PropTypes from 'prop-types';
import Tags from './Tags';

const propTypes = {
  project: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    acf: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.shape({
        sizes: PropTypes.shape({
          medium_large: PropTypes.string,
        }),
      })),
      subtitle: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })).isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const Project = ({
  project: { title, acf },
}) => (
    <div className="project">
      <div className="project-overlay valencia" style={{ backgroundImage: `url(${acf.images[0].sizes.medium_large})` }}>
        <div className="project-overlay-blur" />
        </div>
        <div className="project-title">
          <h3>{title.rendered}</h3>
          <p>{acf.subtitle}</p>
          <div className="line" />
        </div>
        <span className="year">{acf.year}</span>
        <Tags tags={acf.tags.map((t) => t.name)} className="project-tags"/>
    </div>
);

Project.propTypes = propTypes;

export default Project;
