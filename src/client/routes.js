import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainView from './ui/domain/ViewMain';
import IndexPage from './ui/domain/PageIndex';
import DomainContainer from './ui/domain/DomainContainer';

const AboutPage = () => <DomainContainer load={import('./ui/domain/PageAbout')} />;

export default (
  <Route path="/" component={MainView}>
    <IndexRoute component={IndexPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
