(() => {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num
            if (value !== undefined) {
                screen.value += value
            }
        })
    })

    equal.addEventListener('click', (e) => {
        if (screen.value === '') {
            screen.value = 'please enter..'
        } else {
            try {
                let answer = eval(screen.value)
                screen.value = answer
            } catch (error) {
                screen.value = 'Error'

            }
        }
    })

    clear.addEventListener('click', () => {
        screen.value = ''
    })

})()