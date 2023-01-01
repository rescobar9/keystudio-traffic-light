led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
