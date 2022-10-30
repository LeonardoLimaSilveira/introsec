import React from 'react'

const Item = ({ title, icon, onClick, className }) => {
  return (
    <ul className={className} onClick={onClick}>
      <li>
        <a href="" onClick={e => e.preventDefault()}>
          {title}
        </a>
        <span>{icon}</span>
      </li>
    </ul>
  )
}

export default Item
