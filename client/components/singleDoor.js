import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getDoorByParam} from '../store'

class SingleDoor extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
    let param = this.props.match.params.id || this.props.match.params.name
    this.props.getDoorByParam(param)
    console.log('am i hitting?')
  }

  render() {
    return <div>Single Door?</div>
  }
}

const mapStateToProps = state => {
  return {
    currentDoor: state.doors.currentDoor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleDoor: param => dispatch(getDoorByParam(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDoor)
