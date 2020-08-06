import React from 'react'
import SceneRole from './SceneRole'

const SceneCard = (props) => {
  const { number, name, description, mood, place } = props.attributes

  let roles
    roles = props.roles.map( (item, index) => {
      return (
        <SceneRole
          key={index}
          role={item.id}
        />
      )
    })

  return (
    <div className="container">
      <div className="scene-card card">

        <div className="scene-header row no-gutters align-items-center">
          <div className="col-lg-1 d-flex justify-content-center">
            <div className="scene-number"><p>{number}</p></div>
          </div>
          <div className="col-lg-11">
            <div className="row no-gutters">
              <div className="scene-name col-lg-12">{name}</div>
            </div>
            <div className="row no-gutters">
              <div className="scene-mood col-lg-4">mood: {mood}</div>
              <div className="scene-place col-lg-8">place: {place}</div>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-1 d-flex justify-content-center">roles:</div>
          <div className="col-lg-11">{roles}</div>
        </div>
        <div className="scene-description row no-gutters">Description: {description}</div>
        <div className="scene-footer row">notes in the footer</div>
      </div>
    </div>

    )


}
export default SceneCard
