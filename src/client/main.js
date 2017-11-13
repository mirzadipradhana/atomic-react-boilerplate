import { Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { syncHistoryWithStore } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory'

import { connect, Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import styles from './assets/css/globals.css';

import configureStore from './configureStore';

import DomainContainer from './ui/domain/DomainContainer';
import MainView from './ui/domain/ViewMain';
import IndexPage from './ui/domain/PageIndex';
const AboutPage = () => <DomainContainer load={import('./ui/domain/PageAbout')} />;

const history = createBrowserHistory();
const store = configureStore(history);

injectTapEventPlugin();

const App = (
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainView>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
        </MainView>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('app'));
