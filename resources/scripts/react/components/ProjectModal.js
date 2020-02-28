import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {
  Modal, Row, Col, Carousel,
} from 'react-bootstrap';

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
          large: PropTypes.string,
        }),
      })),
      year: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onHide: PropTypes.func.isRequired,
};

const defaultProps = {
  project: null,
};

const ProjectModal = ({ project, onHide }) => (
    <Modal
      show={Boolean(project)}
      onHide={onHide}
      size="xl"
      centered
    >
      <Modal.Body>
        <Row>
          <Col lg={7} className="project-carousel">
            <Carousel>
              {project?.acf.images.map((i) => {
                const src = i.sizes.large;
                return (
                  <Carousel.Item key={i.id}>
                    <img src={src} alt={project?.title.rendered}/>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col lg={5} className="project-content">
            <a href={project?.acf.url} target="__blank">
              <h4>{project?.title.rendered}</h4>
            </a>
            <div className="project-description">
              {ReactHtmlParser(project?.content.rendered)}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
);

ProjectModal.propTypes = propTypes;
ProjectModal.defaultProps = defaultProps;

export default ProjectModal;
