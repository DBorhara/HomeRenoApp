const Sequelize = require('sequelize')
const db = require('../db')

const Door = db.define('door', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  material: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  height: {
    type: Sequelize.DECIMAL(10, 3),
    allowNull: false
  },
  width: {
    type: Sequelize.DECIMAL(10, 3),
    allowNull: false
  },
  depth: {
    type: Sequelize.DECIMAL(10, 3),
    allowNull: false
  }
})

module.exports = Door
