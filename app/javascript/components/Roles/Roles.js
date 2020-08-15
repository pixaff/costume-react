import React, { useState, Fragment }  from 'react'
import axios from 'axios'
import RoleCard from './RoleCard'
import RoleForm from './RoleForm'

const Roles = props => {
  const [script, setScript] = useState(props.script)
  const [loaded, setLoaded] = useState(true)
  const [role, setRole] = useState({})
  const [validation, setValidation] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setRole(Object.assign({}, role, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const script_id = script.data.id
    axios.post('/api/v1/roles', {role, script_id})
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
      setRole({number: '', name: '', type: ''})
    })

  }

    // Destroy a role
  const handleDestroy = (id, e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const url = `/api/v1/roles/${id}`
    axios.delete(url)
    .then( (data) => {
      let roles = script.included.filter(item => item.type === "role")
      console.log("Roles", roles)
      const index = roles.findIndex(data => data.id == id)
      console.log(index)
      roles.splice(index, 1)
      console.log("Roles", roles)
      setScript({...script, roles})   // TODO: Update DOM after delete
    })
    .catch( data => console.log('Error', data) )
  }

  let roles
    if (script.included) {
      roles = script.included.map( (item, index) => {
        if(item.type === "role") {
          // console.log(item)
          return (
            <RoleCard
              key={index}
              attributes={item.attributes}
              scenes={item.relationships.scenes.data}
              handleDestroy={handleDestroy}
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
              <RoleForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                attributes={script.data.attributes}
                role={role}
                validation={validation}
              />
              <div className="script-body">
                <div className="script-header"></div>
                <div className="script-content">{roles}</div>
              </div>
            </Fragment>
        }
      </div>
    )
}

export default Roles
