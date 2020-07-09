import React from 'react';
import './App.css';
import List from "./Components/List";
import Search from "./Components/Search";

export default class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    results: []
  }
}

handleResult = (data) => {
  this.setState({ results : data });
}

  render() {
  return (
    <div className="App">
      <Search onResult={this.handleResult}  />
      <List data={this.state.results}/>
    
  
    </div>
  );
}
}

