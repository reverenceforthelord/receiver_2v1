radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
        start = 1
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    if (receivedString == "B") {
        basic.showString("B")
        start = 0
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
let start = 0
radio.setGroup(1)
start = 0
let speed = 450
let direction = 1
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.analogWritePin(AnalogPin.P0, speed)
basic.forever(function () {
	
})
