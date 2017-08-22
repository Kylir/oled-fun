let oled = require('oled-ssd1306-i2c')()
let font = require('oled-font-5x7')

function writeString(driver, s) {
    driver.setCursor(1, 1)
    driver.writeString(font, 1, s, 1, true)
}

let counter = 0
setInterval(writeString, 1000, oled, 'This is call number ' + counter++)

