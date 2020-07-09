import React from 'react';
import { apiURL } from '../Common';

export default class Search extends React.Component{
constructor(props) {
    super(props);

    this.state = {
        qeury: ""


    }
}

search = () => {
if (!this.state.query || this.state.query.length === 0) {
    return;
}

    //dohvati podatke
    fetch(apiURL + this.state.query)
    .then(response => response.json())
    .then(dataObject => {
        this.props.onResult(dataObject.results);
        this.setState({ query: ''});
   
});
}

handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
}

    render() {
        return(

            <p>  
                <input type="text" 
                value={this.state.query}
                onChange={this.handleQueryChange}/>

                <button onClick={this.search}>FIND!</button>
            </p>
        )
    }
}