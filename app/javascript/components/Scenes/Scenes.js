import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import SceneCard from './SceneCard'
import SceneForm from './SceneForm'

const Scenes = props => {
  // console.log(props)
  const [script, setScript] = useState(props.script)
  const [scene, setScene] = useState({})
  const [loaded, setLoaded] = useState(true)
  const [validation, setValidation] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setScene(Object.assign({}, scene, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const script_id = script.data.id
    axios.post('/api/v1/scenes', {scene, script_id})
    .then(resp => {
      const included = [...script.included, resp.data.data]
      setScript({...script, included})
      setValidation('')
    })
    .catch(err => {
      console.log(err.response.data.error)
      setValidation(err.response.data.error)
    })
    .finally(() => {
      setScene({name: '', description: '', mood: '', place: ''})
    })

  }

  let scenes
  if (script.included) {
    scenes = script.included.map( (item, index) => {
      // console.log(item)
      if(item.type === "scene") {
        return (
          <SceneCard
            key={index}
            attributes={item.attributes}
            roles={item.relationships.roles.data}
          />
        )
      }
    })
  }

  return (
    <div className="wrapper">
      {
        loaded &&
          <Fragment>
            <SceneForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={script.data.attributes}
              scene={scene}
              validation={validation}
            />
            <div className="script-body">
              <div className="script-header"></div>
              <div className="script-content">{scenes}</div>
            </div>
          </Fragment>
      }
    </div>
  )
}

export default Scenes
