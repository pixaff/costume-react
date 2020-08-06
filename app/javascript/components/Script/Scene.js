import React from 'react'

const Scene = (props) => {
  const { number, name, description, mood, place } = props.attributes
  return (
    <div className="card container">
      <div className="scene-header d-flex justify-content-between bg-info">
        <p>Number: {number}</p>
        <p>Name: {name}</p>
        <p>Mood: {mood}</p>
        <p>place: {place}</p>
      </div>
      <div className="scene-roles">All the roles here</div>
      <div className="scene-description">Description: {description}</div>
      <div className="scene-footer">notes in the footer</div>
    </div>

    )
}

export default Scene
