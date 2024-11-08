// display card
(() => {
    const container = document.querySelector('.container')
    people.forEach((men, i) => {
        const panelDiv = document.createElement('div')
        panelDiv.classList.add('panel',)
        panelDiv.style.backgroundImage = `url(${men.imgPath})`;

        i === 0 && panelDiv.classList.add('active',)

        const name = document.createElement('h3')
        name.innerText = men.name

        panelDiv.appendChild(name)

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




