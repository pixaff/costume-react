import React from 'react'
import SceneForm from './SceneForm'

const Accordion = (props) => {
  console.log(props)
  return (
    <div className="accordion" id="accordionExample">
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Add Scene
            </button>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <SceneForm
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
              attributes={props.script.data.attributes}
              scene={props.scene}
          />
        </div>
    </div>
  )
}

export default Accordion
