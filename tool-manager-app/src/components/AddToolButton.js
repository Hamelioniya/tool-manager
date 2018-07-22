import React from 'react'
import { Link } from 'react-router-dom'

function AddToolButton(){
    return(
        <button>
            <Link to="/new">+Add Tool</Link>
        </button>
    )
}

export default AddToolButton