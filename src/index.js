import React, { component } from 'react';
import { render } from 'react-dom';
import { Home, Mine, Searcher } from './screens';
import style from './index.css';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/searcher":
      return <Searcher />;
    case "/mine":
      return <Mine />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<div><Index pathname={pathname} /></div>, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
