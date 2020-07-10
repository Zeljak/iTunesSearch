import React from 'react';
import { apiURL } from '../Common';
import PropTypes from 'prop-types';

export default class Search extends React.Component{
constructor(props) {
    super(props);

    this.state = {
        query: ""


    }
}

search = (e) => {
e.preventDefault();

if (!this.state.query || this.state.query.length === 0) {
    this.setState({placeholder: "Pleas, type something..."});
    return;
}

this.props.onSearchStart();

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

            <form onSubmit={this.search}> 
                <input required placeholder={this.state.placeholder} type="text" 
                value={this.state.query}
                onChange={this.handleQueryChange}/>

                <input type="submit" 
                value="FIND!"/>
             
                </form> 
        )
    }
}

Search.propTypes = {
    onResult: PropTypes.func,
    onSearchStart: PropTypes.func
        
    }
