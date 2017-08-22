let Oled = require('oled-i2c-bus')
let font = require('oled-font-5x7')

function display(driver, s) {
    driver.setCursor(1, 1)
    driver.writeString(font, 1, s, 1, true)
}

let oled = new Oled()
oled.clearDisplay()

let counter = 0
setInterval(display, 1000, oled, 'This is call number ' + ++counter)

