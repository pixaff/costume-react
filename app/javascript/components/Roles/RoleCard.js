import React from 'react'
// import SceneRole from './SceneRole'

const RoleCard = (props) => {
  // console.log("Props", props)
  const { id, number, name, role_type } = props.attributes

  let scenes = props.attributes.scenes.map(element => element.name);

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
              <div className="scene-mood col-lg-12">type: {role_type}</div>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-1 flex-column text-center">
            <div>scene</div>
            <button className="btn btn-primary small-button">+</button>
          </div>
          <div className="col-lg-11">
            <div className="row no-gutters">
              <div className="scene-main col-lg-4">scenes: {scenes}</div>
            </div>
          </div>

        </div>

        <div className="row no-gutters">
          <div className="scene-footer col-lg-1 d-flex justify-content-center">notes:</div>
          <div className="scene-footer col-lg-11"><p>notes in the footer</p></div>
          <button onClick={props.handleDestroy.bind(this, id)}> <i className="fa fa-trash">X</i></button>
        </div>

      </div>
    </div>

    )


}
export default RoleCard
