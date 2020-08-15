import React from 'react';
import { Link } from 'react-router-dom'

const MenuBar = (props) => {
  // console.log(props)
  const { scriptID } = props
  return (
    <div className="container menu-bar">
      <Link to={`/scripts/${scriptID}/scenes`} className="item">Scenes</Link>
      <Link to={`/scripts/${scriptID}/roles`} className="item">Roles</Link>
      <Link to={`/scripts/${scriptID}/cast`} className="item">Cast</Link>
      <Link to={`/scripts/${scriptID}/costumes`} className="item">Costumes</Link>
    </div>
  )
}

export default MenuBar
