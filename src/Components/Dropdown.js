import React from 'react'

const Dropdown = ({ title, icon, className }) => {
  return (
    <>
      <div className={className}>
        <span>{icon}</span>
        <li>{title}</li>
      </div>
    </>
  )
}
export default Dropdown
