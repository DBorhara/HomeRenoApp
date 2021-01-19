import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getAllDoors} from '../store'

class Doors extends Component {
  componentDidMount() {
    this.props.getAllDoors()
  }

  render() {
    const {allDoors} = this.props
    console.log(allDoors)
    return (
      <div>
        {allDoors.map(door => {
          return (
            <Link to="/doors/:param" key={door.id}>
              Name:{door.name}
            </Link>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allDoors: state.doors.doors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllDoors: () => dispatch(getAllDoors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doors)
