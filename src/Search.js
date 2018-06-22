import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { saveRepos } from "./actions/AppActions";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducEm from "./reducers/reducEm";


class Search extends React.Component {
  state = {
    search: ""
  };

  searchGithub = () => {
    fetch('https://api.github.com/search/repositories?q=' + this.state.search)
      .then(res => res.json())
      .then(resJson => {
        this.props.dispatch(saveRepos(resJson.items));
      })
    };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div>
        <Header title="Search" />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {repos: state.repos};
};

export default connect(mapStateToProps)(Search);
