const router = require('express').Router()
const {Door} = require('../db/models')
module.exports = router

//All Doors
router.get('/', async (req, res, next) => {
  try {
    const doors = await Door.findAll()
    res.json(doors)
  } catch (error) {
    next(error)
  }
})

//Get door by ID/NAME
// router.get('/:id', async (req, res, next) => {
//   try {
//     const magic = await Object.keys(Door.prototype)
//     const door = await Door.findByPk(req.params.id)
//     res.json(magic, door)
//   } catch (error) {
//     next(error)
//   }
// })

router.get('/:name', async (req, res, next) => {
  try {
    const magic = await Object.keys(Door.prototype)
    console.log(req.params.name)
    const door = await Door.findAll({where: {name: req.params.name}})
    res.json(door)
  } catch (error) {
    next(error)
  }
})

router.post('/newdoor', async (req, res, next) => {
  try {
    // delete req.body.id
    let newDoor = await Door.create(req.body)
    res.status(201).send(newDoor)
  } catch (error) {
    next(error)
  }
})
