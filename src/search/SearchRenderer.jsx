import SearchHome from './SearchHome.jsx';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

export async function renderPage(req, res) {
   let path = req.path;
   let hostname = req.hostname;
   const context = {};
   try {
      //const html = ReactDOMServer.renderToString(React.createElement(TestPage, {hostname, path}));
      const html = ReactDOMServer.renderToString(
         <StaticRouter location={path} content={context}>
            <SearchHome />
         </StaticRouter>
      );
      res.set('Content-Type', 'text/html');
      res.send(html);
   } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500);
      res.send(err.message);
   }
}
