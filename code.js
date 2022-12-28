const input1 = document.getElementById("calculo1")
const input2 = document.getElementById("calculo2")
const boton = document.getElementById("btnCalcular")
const resultado = document.getElementById("resultado")
const form = document.getElementById('form')

form.addEventListener('submit', sumarInput)

function sumarInput (event){
    event.preventDefault()
    let suma = Number(input1.value) + Number(input2.value) 
    resultado.innerHTML = "El Resultado Es: " + suma
    
}