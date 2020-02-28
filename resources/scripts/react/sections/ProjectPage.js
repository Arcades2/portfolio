import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import iaxios from '../iaxios';
import ProjectList from '../components/ProjectList';

const ProjectPage = () => {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    iaxios('/pages/34')
      .then((res) => {
        setPageContent(res.data);
      }).catch((e) => console.log(e));
  }, []);

  return (
    <Container className="project-page" fluid>
      <Container>
        <h2>{pageContent?.title?.rendered}</h2>
        <div className="project-presentation">
          {ReactHtmlParser(pageContent?.content?.rendered)}
        </div>
      </Container>
      <ProjectList />
    </Container>
  );
};

export default ProjectPage;
