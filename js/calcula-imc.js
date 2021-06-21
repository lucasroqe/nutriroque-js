//SELECIONANDO Os IDs PRINCIPAIS
var pacientes = document.querySelectorAll('.paciente')

// for (let i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i]

//     //SELECIONANDO OS ELEMENTOS DAS CLASSES
//     var pesoPaciente = paciente.querySelector('.info-peso').textContent
//     var alturaPaciente = paciente.querySelector('.info-altura').textContent

//     var imcPaciente = paciente.querySelector('.info-imc')

//     var pesoEhValido = validaPeso(pesoPaciente)
//     var alturaEhValido = validaAltura(alturaPaciente)

//     if (!pesoEhValido) {
//         paciente.classList.add('paciente-invalido')
//         imcPaciente.textContent = 'Inválido'

//     } else if (!alturaEhValido) {
//         paciente.classList.add('paciente-invalido')
//         imcPaciente.textContent = 'Inválido'
//     }else{
//         if (alturaEhValido && pesoEhValido) {
//             imcPaciente.textContent = calcularImc(pesoPaciente, alturaPaciente) //SUBSTITUINDO O CONTEÚDO PELO VALOR DO IMC
//         } else {
//             console.log('n vai dar n');
//         }
//     }
// }

pacientes.forEach(paciente => {

    //SELECIONANDO OS ELEMENTOS DAS CLASSES
    var pesoPaciente = paciente.querySelector('.info-peso').textContent
    var alturaPaciente = paciente.querySelector('.info-altura').textContent

    var imcPaciente = paciente.querySelector('.info-imc')

    var pesoEhValido = validaPeso(pesoPaciente)
    var alturaEhValido = validaAltura(alturaPaciente)

    if (!pesoEhValido) {
        paciente.classList.add('paciente-invalido')
        imcPaciente.textContent = 'Inválido'

    } else if (!alturaEhValido) {
        paciente.classList.add('paciente-invalido')
        imcPaciente.textContent = 'Inválido'
    } else {
        if (alturaEhValido && pesoEhValido) {
            imcPaciente.textContent = calcularImc(pesoPaciente, alturaPaciente) //SUBSTITUINDO O CONTEÚDO PELO VALOR DO IMC
        } else {
            console.log('n vai dar n');
        }
    }
});

function calcularImc(peso, altura) {
    var total = 0
    total = peso / Math.pow(altura, 2)
    return total.toFixed(2)
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true
    } else {
        return false
    }
}