import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import iaxios from '../iaxios';
import Project from './Project';
import ProjectModal from './ProjectModal';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, _selectProject] = useState(null);

  const selectProject = (projectId) => {
    _selectProject(projects.find((p) => p.id === projectId));
  };

  useEffect(() => {
    iaxios
      .get('/project')
      .then((res) => {
        setProjects(res.data);
      })
      .catch(() => {
        console.log('Une erreur est survenue pendant la récupération des projets.');
      });
  }, []);

  useEffect(() => {
  }, [selectedProject]);

  return (
    <Container fluid className="project-list-container">
        {projects.map((p, index) => (
          <div
          role="button"
          tabIndex={index}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              selectProject(p.id);
            }
          }}
          onClick={() => selectProject(p.id)} key={p.id} className="project-container">
            <Project project={p} />
          </div>
        ))}
        <ProjectModal project={selectedProject} onHide={() => selectProject(null)} />
    </Container>
  );
};

export default ProjectList;
