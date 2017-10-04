/* jshint undef: true, node: true, esnext: true, asi: true */

'use strict'

const conway = require('./lib/conway')
const utils = require('./lib/utils')

let cells = conway.generateRandomWorld()

utils.logWorld(cells)

function step() {
    cells = conway.evolveOneStep(cells)
    utils.logWorld(cells)
}

setInterval(step, 300)
