import React from 'react';
import './App.css';
import List from "./Components/List";
import Search from "./Components/Search";

export default class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    results: [],
    isLoading: false
  }
}

handleResult = (data) => {
  this.setState({ results : data, isLoading: false});
}

startSearch = () => {
  this.setState({isLoading: true});
}

  render() {
    let showing = (<List data={this.state.results}/>);
    if (this.state.isLoading){
    showing = "Loading...";
  }



  return (
    <div className="App">
      <Search onSearchStart = {this.startSearch} onResult={this.handleResult}  />
      <List data={this.state.results}/>
      {showing}
  
    </div>
  );
}
}

