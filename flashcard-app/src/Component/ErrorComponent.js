import React from 'react'

function ErrorComponent(props) {
  return (
    <div className='text-red-600'>{props.children}</div>
  )
}

export default ErrorComponent