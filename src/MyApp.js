import React from 'react';
import Header from './components/Header';
import { render } from 'react-dom';
import MySearch from './MySearch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducEm from "./reducers/reducEm";

const store = createStore(reducEm);

class Mine extends React.Component {

  state = {
    repos: []
  }

  componentDidMount() {
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.

      console.log(store.getState().repos);

      this.setState({
        repos: store.getState().repos
      });
    });
  }

  render() {
    return(
    <div>
      {this.state.repos.map((repo, index) => <div key={index}>
        <div id={repo.id}>
          <a href={repo.owner.html_url}><div>
            <div><img src={repo.owner.avatar_url} /></div>
            <div>{repo.owner.login}</div>
          </div></a>
          <a href={repo.html_url}><div>
            <div><h3>{repo.name}</h3></div>
            <div>{repo.description}</div>
          </div></a>
      </div>
    </div> )}
  </div>
  );
  }
  }

class MyApp extends React.Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <MySearch />
        </Provider>
          <Mine />
      </div>
    );
  }
}

export default MyApp;
