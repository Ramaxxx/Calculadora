var numero = 0
var numero1 = 0
var operador = 0

const display = document.querySelector('#display')

const boton_numero = document.querySelectorAll('#num')
const boton_operacion = document.querySelectorAll('#oper')
const boton_igual = document.querySelector('#result')
const boton_borrar = document.querySelector('#borrar')
const boton_mr = document.querySelector('#mr')
const boton_pi = document.querySelector('#pi')
const boton_e = document.querySelector('#e')

const pi = Math.PI
const e = Math.E

boton_numero.forEach(btn =>{
    btn.addEventListener('click', () =>{
        display.innerText += btn.innerText
    })
})

boton_operacion.forEach(btn =>{
    btn.addEventListener('click', () =>{
        display.innerText += btn.innerText

        if ((btn).innerText === '+'){
            console.log("suma")
        }
        else if ((btn).innerText === '-'){
            console.log("resta")
        }
        else if ((btn).innerText === '/'){
            console.log("div")
        }
        else if ((btn).innerText === '*'){
            console.log("mult")
        }

    })
})

boton_borrar.addEventListener('click', () =>{
    display.innerText = ''
})

boton_pi.addEventListener('click', () =>{
    display.innerText += boton_pi.innerText 
})

boton_e.addEventListener('click', () =>{
    display.innerText += boton_e.innerText 
})


