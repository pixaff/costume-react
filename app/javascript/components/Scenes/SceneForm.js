import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SceneForm = (props) => {
  const validationError = props.validation === '' ? '' : "error"  // sets error class (i.e. red border)
  return (

    <div className="accordion container" id="accordionScene">
      <button className="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Add Scene
      </button>
      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionScene">
        <div className="scene-form">

          <form onSubmit={props.handleSubmit} className="needs-validation">
            <div className="form-group">
              <input
                id="inputName"
                className="form-control"
                // className={`form-control ${validationError}`}
                onChange={props.handleChange}
                value={props.scene.name || ""}
                type="text"
                name="name"
                placeholder="Scene Name"
                required
              />
              <small className="form-text error-text">{props.validation.name}</small>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputNumber">Scene number</label>
                <input
                  id="inputNumber"
                  className="form-control"
                  onChange={props.handleChange}
                  value={props.scene.number || ""}
                  type="text"
                  name="number"
                  placeholder="Scene number"
                  required
                />
                <small className="form-text error-text">{props.validation.number}</small>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputMood">Scene mood</label>
                <input
                  id="inputMood"
                  className="form-control"
                  onChange={props.handleChange}
                  value={props.scene.mood || ""}
                  type="text"
                  name="mood"
                  placeholder="Scene mood" />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputPlace">place</label>
                <input
                  id="inputPlace"
                  className="form-control"
                  onChange={props.handleChange}
                  value={props.scene.place || ""}
                  type="text"
                  name="place"
                  placeholder="place" />
              </div>
            </div>


            <div className="form-group">
              <label htmlFor="inputDescription">Scene description</label>
              <input
                id="inputDescription"
                className="form-control"
                onChange={props.handleChange}
                value={props.scene.description || ""}
                type="text"
                name="description"
                placeholder="Scene description" />
            </div>
            <Button className="mb-3" type="submit">store</Button>
          </form>

        </div>
      </div>
    </div>
    )
}

export default SceneForm








