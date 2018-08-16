import React from 'react';
import { Link } from 'react-router-dom';

function Tool({ tool }){
    return(
        <tr>
            <td><Link to={`/${tool.id}`}>{tool.name}</Link></td>
            <td>{tool.type}</td>
            <td>{tool.location}</td>
        </tr>
    );
};

export default Tool