'use strict'

const c = require('../config/constants')

module.exports = exports = {}

/*
Function to browse an array of array with 0 and 1 and convert it
into an array of coordinates suitable for the drawPixel() function:

oled.drawPixel([
    [128, 1, 1],
    [128, 32, 1],
    [128, 16, 1],
    [64, 16, 1]
]);

Note: we are keeping only the 1s as the screen will be cleared at every step

*/
exports.conwayToOledPixels = (cells) => {
    let pixels = []

    for (let i = 0; i<c.WIDTH ; i++ ) {
        for (let j = 0; j<c.HEIGHT ; j++ ) {
            if (cells[i][j] === 1) {
                pixels.push([i,j,1])
            }
        }
    }
    return pixels
}

