import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  console.log(props)
  const {email, fullName, profilepic} = props

  return (
    <div>
      <h3>Welcome, {fullName}</h3>
      <img src={profilepic} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  const {email, fullName, imgUrl} = state.user
  return {
    email: email,
    fullName: fullName,
    profilepic: imgUrl
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
