import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import MenuBar from '../MenuBar/MenuBar'
import Scenes from '../Scenes/Scenes'
import Roles from '../Roles/Roles'
import Cast from '../Cast/Cast'
import Costumes from '../Costumes/Costumes'


const Script = props => {
  // console.log(props)
  const [script, setScript] = useState({})
  const [loaded, setLoaded] = useState(false)

  const scriptID = props.match.params.id

  useEffect(() => {
    // const scriptID = props.match.params.id
    const url = `/api/v1/scripts/${scriptID}`

    axios.get(url)
    .then( resp => {
      // console.log(resp.data)
      setScript(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))

  }, [])

  return (
    <div className="wrapper">
      {
        loaded &&
        <BrowserRouter>
          <div>
            <Header
                attributes={script.data.attributes}
            />
            <MenuBar scriptID={scriptID}/>
            <Route path="/scripts/:id/scenes" exact render={(props) => <Scenes {...props} script={script} />} />
            <Route path="/scripts/:id/roles" exact render={(props) => <Roles {...props} script={script} />} />
            <Route path="/scripts/:id/cast" exact render={(props) => <Cast {...props} script={script} />} />
            <Route path="/scripts/:id/costumes" exact render={(props) => <Costumes {...props} script={script} />} />
          </div>
        </BrowserRouter>
     }
    </div>
  )
}

export default Script
