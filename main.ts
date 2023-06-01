let strip = neopixel.create(DigitalPin.P8, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) > 64 && BitMaker.read_Ain(AnalogPort.P0) < 255) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.White))
        strip.show()
    } else {
        strip.setBrightness(50)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
