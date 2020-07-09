import React from 'react';

export default function List ({ data }) {
    return(

<ul>
{data.map((item) => {
return(
<li key={item.trackId}> artist= {item.artistName}song={item.trackName} </li>);

})}
</ul>
    );
}