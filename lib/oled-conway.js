'use strict'

let Oled = require('oled-i2c-bus')
let i2c = require('i2c-bus'),
    i2cBus = i2c.openSync(1)
let c = require('../config/constants')
let utils = require('./utils')
let conway = require('./conway')

let opts = {
  width: c.WIDTH,
  height: c.HEIGHT,
  address: c.I2C_ADDR
}

let oled = new Oled(i2cBus, opts)
oled.clearDisplay()

let cells = conway.generateRandomWorld()
let newCells = []
let pixels = []

while (true) {
    newCells = conway.evolveOneStep(cells)
    pixels = utils.conwayToOledPixels(newCells)
    oled.clearDisplay()
    oled.drawPixel(pixels)
    console.log('one more step.')
    cells = newCells
}


