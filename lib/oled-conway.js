'use strict'

let Oled = require('oled-i2c-bus')
let i2c = require('i2c-bus'),
    i2cBus = i2c.openSync(1)
let c = require('../config/constants')
let conway = require('./conway')

let opts = {
  width: c.WIDTH,
  height: c.HEIGHT,
  address: c.I2C_ADDR
}

let oled = new Oled(i2cBus, opts)
oled.clearDisplay()

let cells = conway.generateRandomWorld()
let pixels = []

while (true) {
    cells = conway.evolveOneStep(cells)
    pixels = utils.conwayToOledPixels(cells)
    oled.clearDisplay()
    oled.drawPixels(pixels)
}


