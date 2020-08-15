import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RoleForm = (props) => {
  // console.log(props)
  const validationError = props.validation === '' ? '' : "error"
  return (

    <div className="accordion container" id="accordionRole">
      <button className="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Add Role
      </button>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionRole">
        <div className="scene-form">

          <form onSubmit={props.handleSubmit} className="needs-validation">

            <div className="form-row">

              <div className="form-group col-md-4">
              <label htmlFor="inputNumber">Name</label>
                <input
                  id="inputName"
                  className={`form-control ${validationError}`}
                  onChange={props.handleChange}
                  value={props.role.name || ""}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <small className="form-text error-text">{props.validation}</small>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputNumber">Number</label>
                <input
                  id="inputNumber"
                  className="form-control"
                  onChange={props.handleChange}
                  value={props.role.number || ""}
                  type="text"
                  name="number"
                  placeholder="Role number" />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="inputMood">Type</label>
                <input
                  id="inputMood"
                  className="form-control"
                  onChange={props.handleChange}
                  value={props.role.role_type || ""}
                  type="text"
                  name="role_type"
                  placeholder="Role type" />
              </div>
            </div>
            <Button className="mb-3" type="submit">store</Button>
          </form>

        </div>
      </div>
    </div>
    )
}

export default RoleForm








