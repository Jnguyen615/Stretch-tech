import React from 'react'
import {Link} from "react-router-dom"
function ErrorComponent() {
  return (
    <div>
      <h1>Something Went Wrong</h1>
      <Link to='/'>
        <button>Return to Home</button>
      </Link>
    </div>
  )
}

export default ErrorComponent
