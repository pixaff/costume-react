import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import ScriptCard from './ScriptCard'

const Scripts = props => {
  const [scripts, setScripts] = useState([])

  useEffect(() => {
    axios.get('/api/v1/scripts')
    .then(resp => {
      // console.log(resp.data.data)
      setScripts(resp.data.data)
      })
    .catch(resp => console.log(resp))

  }, [scripts.lenght])

const grid = scripts.map( item => {
  return (
    <ScriptCard
      key={item.id}
      address={item.id}
      attributes={ item.attributes }
    />
    )
})

  return(
    <div className="container">
      <div className="header"><h1>This is Scripts</h1></div>
      <div className="grid">
        {grid}
      </div>
    </div>
    )
}

export default Scripts
