import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SceneEditForm = (props) => {
  console.log(props)
  const { id, number, name, description, mood, set, play_day } = props.scene.data.attributes
  const validationError = props.validation === '' ? '' : "error"  // sets error class (i.e. red border)
  return (
    <div className="container">

        <div className="scene-form">

          <form onSubmit={props.handleSubmit} className="needs-validation">
            <div className="form-group">
              <input
                id="inputName"
                className="form-control"
                // className={`form-control ${validationError}`}
                onChange={props.handleChange}
                value={name || ""}
                type="text"
                name="name"
                placeholder="Scene Name"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group col-md-3">
                <label htmlFor="inputNumber">Scene number</label>
                <input
                  id="inputNumber"
                  className="form-control"
                  onChange={props.handleChange}
                  value={number || ""}
                  type="text"
                  name="number"
                  placeholder="Scene number"
                  required
                />

              </div>

              <div className="form-group col-md-3">
                <label htmlFor="inputNumber">play day</label>
                <input
                  id="inputPlayDay"
                  className="form-control"
                  onChange={props.handleChange}
                  value={play_day || ""}
                  type="number"
                  name="play_day"
                  placeholder="play day"
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="inputMood">Scene mood</label>
                <input
                  id="inputMood"
                  className="form-control"
                  onChange={props.handleChange}
                  value={mood || ""}
                  type="text"
                  name="mood"
                  placeholder="Scene mood" />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="inputPlace">Motiv</label>
                <input
                  id="inputPlace"
                  className="form-control"
                  onChange={props.handleChange}
                  value={set || ""}
                  type="text"
                  name="set"
                  placeholder="Motiv" />
              </div>
            </div>


            <div className="form-group">
              <label htmlFor="inputDescription">Scene description</label>
              <input
                id="inputDescription"
                className="form-control"
                onChange={props.handleChange}
                value={description || ""}
                type="text"
                name="description"
                placeholder="Scene description" />
            </div>
            <Button onClick={props.handleSubmit} className="mb-3">store</Button>
            <Button onClick={props.handleClose} className="mb-3">cancel</Button>
          </form>

        </div>
      </div>
    )
}

export default SceneEditForm








