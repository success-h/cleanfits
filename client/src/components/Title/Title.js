import React from 'react'

const Title = ({title}) => {
  return (
    <div className="title">
      <h1 className="bd-title" style={{fontSize: '3rem'}}>{title}</h1>
      <span
        className="mx-auto"
        style={{
          height: '4px',
          width: '150px',
          display: 'block',
          background: '#007bff'
        }} />
    </div>
  )
}

export default Title