import React from 'react';
import PropTypes from 'prop-types';

export default function List ({ data }) {
    return(

<ul>
{data.map((item) => {
return(
<li key={item.trackId}> Artist: {item.artistName} Song: {item.trackName} </li>);

})}
</ul>
    );
}

List.propTypes = {
    data: PropTypes.array
}