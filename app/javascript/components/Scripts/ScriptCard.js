import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const ScriptCard = props => {
  return(
    <div className="card">
      <Link to={`/scripts/${props.address}`} alt={props.attributes.name}>
        <div className="script-name">{props.attributes.name}</div>
        <div className="script-user">{props.address}</div>
      </Link>
    </div>
    )
}

export default ScriptCard
