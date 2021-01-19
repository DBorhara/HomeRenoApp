import axios from 'axios'

//Action Types
const GOT_ALL_DOORS = 'GOT_ALL_DOORS'
const GOT_DOOR = 'GOT_DOOR'
const CREATE_DOOR = 'CREATE_DOOR'

//Initial State
const initialState = {
  doors: [],
  currentDoor: {}
}

//Action Creators

const gotAllDoors = payload => ({type: GOT_ALL_DOORS, payload})
const gotSingleDoor = payload => ({type: GOT_DOOR, payload})
// const createDoor = (payload) => ({type: CREATE_DOOR, payload})

//THUNKS

export const getAllDoors = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/doors')
      dispatch(gotAllDoors(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getDoorByParam = param => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`api/doors/${param}`)
      dispatch(gotSingleDoor(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const newDoor = door => {
  return async dispatch => {
    try {
      const {data} = await axios.post('api/doors/newdoor', door)
      dispatch(getAllDoors())
    } catch (error) {
      console.error(error)
    }
  }
}
// export const getDoorByName = (name) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get(`api/doors/${name}`)
//       dispatch(gotSingleDoor(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

//REDUCER

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GOT_ALL_DOORS:
      return {...state, doors: payload}
    case GOT_DOOR:
      return {...state, currentDoor: payload}
    default:
      return state
  }
}
