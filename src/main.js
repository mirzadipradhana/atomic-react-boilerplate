import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./assets/css/global.css');

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
