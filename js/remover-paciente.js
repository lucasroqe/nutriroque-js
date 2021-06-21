// var pacientes = document.querySelectorAll('.paciente')

// pacientes.forEach(paciente => {
//     paciente.addEventListener('dblclick', function () {
//          this.remove() //=paciente.remove
//     })
// });

var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function (event) {

    event.target.parentNode.classList.add('fadeOut')

    //ACEITA EM MILISEGUNDOS
    setTimeout(function () {
        //SELECIONA QUEM FOI CLICADO E REMOVE O PAI DELE
        //TARGET = TD  PARENT = TR
        event.target.parentNode.remove()
    }, 500)



})


