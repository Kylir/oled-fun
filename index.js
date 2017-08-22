let Oled = require('oled-ssd1306-i2c')
let font = require('oled-font-5x7')

function display(driver, s) {
    driver.setCursor(1, 1)
    driver.writeString(font, 1, s, 1, true)
}

let oled = new Oled()
let counter = 0

setInterval(display, 1000, oled, 'This is call number ' + counter++)

