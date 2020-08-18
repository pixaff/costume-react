import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import AxiosHelper from '../../utils/Requests/AxiosHelper'
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

    AxiosHelper()

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
      setScene({name: '', description: '', mood: '', set: ''})
    })

  }

  // Destroy a scene
  const handleDestroy = (id, e) => {
    e.preventDefault()

    const confirmation = confirm("Do you really want to delete this item?");
    if (confirmation) {

      AxiosHelper()

      const url = `/api/v1/scenes/${id}`
      axios.delete(url)
      .then( (data) => {
        let scenes = script.included
        const index = script.included.findIndex(data => data.id == id && data.type == "scene")
        scenes.splice(index, 1)

        setScript({...script, scenes})

      })
      .catch( data => console.log('Error', data) )
    }
  }

    // Edit a scene
  const handleEdit = (id, e) => {
    e.preventDefault()
    console.log(`This is going to be the edit function for ${id}`)
    // const confirmation = confirm("Do you really want to delete this item?");
    // if (confirmation) {

    //   const csrfToken = document.querySelector('[name=csrf-token]').content
    //   axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    //   const url = `/api/v1/scenes/${id}`
    //   axios.patch(url)
    //   .then( (data) => {
    //     let scenes = script.included
    //     const index = script.included.findIndex(data => data.id == id && data.type == "scene")
    //     scenes.splice(index, 1)

    //     setScript({...script, scenes})

    //   })
    //   .catch( data => console.log('Error', data) )
    // }
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
            handleDestroy={handleDestroy}
            handleEdit={handleEdit}
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
