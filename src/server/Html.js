// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';

// Redux
import { Provider } from 'react-redux';

class Html extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
  }

  render () {
    const IS_PROD = process.env.NODE_ENV === 'production';

    const {
      title,
      store,
      assets,
      url,
      context,
    } = this.props;

    const {
      manifest,
      app,
      vendor,
    } = assets || {};

    const state = store.getState();

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const Layout = IS_PROD ? require( '../../build/prerender.js').default : () => {};

    const root = IS_PROD && renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Layout />
        </StaticRouter>
      </Provider>
    );

    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2" />
         <title>{title}</title>

         {IS_PROD && <link rel="stylesheet" href="/static/prerender.css" type="text/css" />}
       </head>
       <body>
         <script dangerouslySetInnerHTML={{__html: initialState}} />
         {IS_PROD ? <div id="app" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="app"></div>}
          {IS_PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {IS_PROD && <script src={vendor.js} />}
         <script src={IS_PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
