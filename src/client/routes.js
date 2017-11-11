import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainView from './ui/views/ViewMain';
import IndexPage from './ui/views/PageIndex';
import DomainContainer from './ui/views/DomainContainer';
import NewsPage from './ui/views/PageNews';

const AboutPage = () => <DomainContainer load={import('./ui/views/PageAbout')} />;

export default (
  <Route path="/" component={MainView}>
    <IndexRoute component={IndexPage} />
    <Route path="about" component={AboutPage} />
    <Route path="news" component={NewsPage} />
  </Route>
);
