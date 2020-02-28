import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Firstscreen from './sections/Firstscreen';
import ProjectList from './sections/ProjectPage';
import Footer from './sections/Footer';
import { onLeave } from './fullpage_callbacks';

const App = () => (
  <ReactFullpage
    onLeave={onLeave}
    scrollOverflow
    afterRender={() => {
      // Rebuild for to scrollOverflow to work because projectList is generated
      /* eslint-disable */
      fullpage_api.setAllowScrolling(false);
      fullpage_api.setKeyboardScrolling(false);
      setTimeout(() => {
        fullpage_api.reBuild();
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
      }, 100);
      /* eslint-disable */
    }}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Firstscreen />
        </div>
        <div className="section fp-auto-height">
          <ProjectList />
        </div>
        <div className="section fp-auto-height">
          <Footer />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default <App />;
