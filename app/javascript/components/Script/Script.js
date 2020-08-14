import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import SceneForm from './SceneForm'
import RoleForm from './RoleForm'
import SceneCard from './SceneCard'
import MenuBar from '../MenuBar/MenuBar'


const Script = props => {
  const [script, setScript] = useState({})


  return (
    <div className="wrapper">
      <BrowserRouter>
        <div>
          <MenuBar />
          <Route path="/scripts/1/scenes" exact component={ Header } />
          <Route path="/scripts/1/roles" exact component={ Header } />
          <Route path="/scripts/1/cast" exact component={ Header } />
          <Route path="/scripts/1/costumes" exact component={ Header } />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Script
