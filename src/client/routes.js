import MainView from './ui/domain/ViewMain';
import DomainContainer from './ui/domain/DomainContainer';
import NotFound from './ui/domain/NotFound';

const IndexPage = () => <DomainContainer load={import('./ui/domain/PageIndex')} />;
const AboutPage = () => <DomainContainer load={import('./ui/domain/PageAbout')} />;

const routes = [
  { component: MainView,
    routes: [
      {
        path: '/',
        exact: true,
        component: IndexPage
      },
      {
        path: '/home',
        component: IndexPage
      },
      {
        path: '/about',
        component: AboutPage,
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
