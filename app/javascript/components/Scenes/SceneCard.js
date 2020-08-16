import React from 'react'
import SceneRole from './SceneRole'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const SceneCard = (props) => {
  console.log(props)
  const { id, number, name, description, mood, theme } = props.attributes

  let roles
    roles = props.attributes.roles.map( (item, index) => {
      return (
        <SceneRole
          key={index}
          role={item.name}
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
              <div className="scene-place col-lg-8">Motiv: {theme}</div>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-1 flex-column text-center">
            <div>role</div>
            <button className="btn btn-primary small-button">+</button>
          </div>
          <div className="col-lg-11">
            <div className="row no-gutters">
              <div className="scene-main col-lg-4">main: {roles}</div>
              <div className="scene-feature col-lg-4">feature: </div>
              <div className="scene-extra col-lg-4">extra: </div>
            </div>
          </div>

        </div>

        <div className="row no-gutters">
          <div className="scene-description col-lg-1 d-flex justify-content-center">content:</div>
          <div className="scene-description col-lg-11">{description}</div>
        </div>

        <div className="row no-gutters">
          <div className="scene-footer col-lg-1 d-flex justify-content-center">notes:</div>
          <div className="scene-footer col-lg-11"><p>notes in the footer</p></div>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={props.handleDestroy.bind(this, id)}>
                <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>

    )


}
export default SceneCard
