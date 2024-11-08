// display card
(() => {
    const container = document.querySelector('.container')
    people.forEach((man, i) => {
        const panelDiv = document.createElement('div')
        panelDiv.classList.add('panel',)
        panelDiv.style.backgroundImage = `url(${man.imgPath})`;

        i === 0 && panelDiv.classList.add('active',)

        const textContDiv = document.createElement('div')
        textContDiv.classList.add('panel-text')

        const name = document.createElement('h3')
        name.innerText = man.name
        textContDiv.appendChild(name)

        const age = document.createElement('p')
        age.innerText = `Age - ${man.age}`
        textContDiv.appendChild(age)

        const nationality = document.createElement('p')
        nationality.innerText = `Nationality - ${man.nationality}`
        textContDiv.appendChild(nationality)

        panelDiv.appendChild(textContDiv)

        container.appendChild(panelDiv)
    })
})();


// listener to panel
(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            panels.forEach((p) => {
                p.classList.remove('active')
            })

            panel.classList.add('active')
        })
    })
})()




