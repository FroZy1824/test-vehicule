input.onButtonPressed(Button.A, function () {
    strip.clear()
    for (let index = 0; index < 4; index++) {
        strip.setBrightness(50)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(500)
        strip.clear()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    for (let index = 0; index < 4; index++) {
        strip.setBrightness(50)
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(500)
        strip.clear()
        basic.pause(500)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P8, 10, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.pause(2000)
strip.clear()
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 64 && BitMaker.read_Ain(AnalogPort.P0) < 255) {
        strip.setBrightness(100)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
        strip.show()
    } else {
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
        strip.show()
    }
})
