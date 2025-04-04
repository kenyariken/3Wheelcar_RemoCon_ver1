input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.NorthEast)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
    basic.showArrow(ArrowNames.NorthWest)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("forward")
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("back")
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
})
radio.setGroup(1)
