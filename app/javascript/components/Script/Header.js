import React from 'react'

const Header = (props) => {
  const { name } = props.attributes

  return (
    <div className="container">
      <div><h3>{name} - (in the header)</h3></div>
    </div>
  )
}

export default Header
