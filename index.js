let Oled = require('oled-i2c-bus')
let font = require('oled-font-5x7')
let i2c = require('i2c-bus'),
    i2cBus = i2c.openSync(1)

var opts = {
  width: 128,
  height: 32,
  address: 0x3C
};

var oled = new Oled(i2cBus, opts);

function display(driver, font, s) {
    driver.setCursor(1, 1)
    driver.writeString(font, 1, s, 1, true)
}

oled.clearDisplay()

let counter = 0
setInterval(display, 1000, oled, font, 'This is call number ' + ++counter)
