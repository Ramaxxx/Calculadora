var numero1 = null
var numero2 = null
var operador = ''
var bandera = false

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
        if (bandera === true){
            display.innerText = ''
            bandera = false
            display.innerText += btn.innerText
        }else{
            display.innerText += btn.innerText
        }
    })
})

boton_operacion.forEach(btn =>{
    btn.addEventListener('click', () =>{
        operador = ''
        numero1 = parseInt(display.innerText)
        bandera = true
        display.innerText = ''
        display.innerText += btn.innerText

        if ((btn).innerText === '+'){
            operador = '+'
        }
        else if ((btn).innerText === '-'){
            operador = '-'
        }
        else if ((btn).innerText === '/'){
            operador = '/'
        }
        else if ((btn).innerText === '*'){
            operador = '*'
        }

    })
})

function operar(operador, num1, num2){
    if (operador === '+'){
        return num1 + num2
    }
    else if (operador === '-'){
        return num2 - num1
    }
    else if (operador === '/'){
        return num1 / num2
    }
    else{
        return num1 * num2
    }
}

boton_igual.addEventListener('click', () =>{
    numero2 = parseInt(display.innerText)
    display.innerText = operar(operador, numero1, numero2)
    operador = ''
    numero1 = null
    numero2 = null
    bandera = false
})

boton_borrar.addEventListener('click', () =>{
    display.innerText = ''
    operador = ''
    numero1 = null
    numero2 = null
    bandera = false
})

boton_pi.addEventListener('click', () =>{
    display.innerText += boton_pi.innerText 
})

boton_e.addEventListener('click', () =>{
    display.innerText += boton_e.innerText 
})


