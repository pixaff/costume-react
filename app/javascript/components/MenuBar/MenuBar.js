import React from 'react';
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className="container menu-bar">
      <Link to="/scripts/1/scenes" className="item">Scenes</Link>
      <Link to="/scripts/1/roles" className="item">Roles</Link>
      <Link to="/scripts/1/cast" className="item">Cast</Link>
      <Link to="/scripts/1/costumes" className="item">Costumes</Link>
    </div>
  )
}

export default MenuBar
