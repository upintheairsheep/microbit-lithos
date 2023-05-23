input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 1) {
        basic.showString("?")
        basic.showString("HOW? How did you get ZERO light source?")
        basic.clearScreen()
    } else {
        if (input.lightLevel() > 250) {
            basic.showLeds(`
                # # # # #
                # . # . #
                . . # . .
                . # # # .
                # # # # #
                `)
        } else {
            if (input.lightLevel() > 100) {
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
            } else {
                basic.clearScreen()
                basic.showLeds(`
                    . . # # .
                    . # # . #
                    # # . # #
                    . # # . #
                    . . # # .
                    `)
            }
        }
    }
})
