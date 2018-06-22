import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { saveRepos } from "./actions/AppActions";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducEm from "./reducers/reducEm";

class MySearch extends React.Component {
  constructor(props) {
    super(props);
    this.msearchGithub()
    }

  msearchGithub = () => {
    fetch('https://api.github.com/users/RobBender/repos')
      .then(res => res.json())
      .then(resJson => {
        this.props.dispatch(saveRepos(resJson));
      })
    };


  render() {
    return(
      <Header title="Mine" />
    )
  }
}

const mapStateToProps = state => {
  return {repos: state.repos};
};

export default connect(mapStateToProps)(MySearch);
