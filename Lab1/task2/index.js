//^ get elements
let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let h3 = document.getElementsByTagName('h3')[0]
let colors = [red, green, blue]

//^ add input event to colors
colors.forEach(color => {
    color.addEventListener('input', function () {
        h3.style.color = `rgb(${red.value},${green.value},${blue.value})`
    })
    //h
})