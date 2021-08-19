import React from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

export default function LoginForm (props) {
  return (
    <Togglable buttonLabel='Login'>
      <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <input
              type='text'
              value={props.username}
              name='Username'
              placeholder='Username'
              onChange={props.handleUsernameChange}
            />
          </div>
          <div>
            <input
              type='password'
              value={props.password}
              name='Password'
              placeholder='Password'
              onChange={props.handlePasswordChange}
            />
          </div>
          <button>
            Login
          </button>
        </form>
      </div>
    </Togglable>
  )
}

LoginForm.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string
}
