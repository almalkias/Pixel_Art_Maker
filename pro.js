const form = document.getElementById('sizePicker')
const canvas = document.getElementById('pixelCanvas')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const heightValue = document.getElementById('inputHeight').value
    const widthValue = document.getElementById('inputWidth').value
    for (let i = 0; i < heightValue; i++) {
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        canvas.appendChild(tr)
        tr.appendChild(td)
        for (let i = 1; i < widthValue; i++) {
            const td = document.createElement('td')
            tr.appendChild(td)
        }
    }
}
)

canvas.addEventListener('click', function (event) {
    const colorValue = document.getElementById('colorPicker').value
    event.target.style.backgroundColor = colorValue
})


