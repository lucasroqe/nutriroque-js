var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function () {

    var pacientes = document.querySelectorAll('.paciente')

    if (this.value.length > 0) {
        pacientes.forEach(paciente => {

            var tdNome = paciente.querySelector('.info-nome')
            var nome = tdNome.textContent

            //OQ VAI BUSCAR ,  COMO VAI BUSCAR  I = INSENSITIVE = ACEITA MINUSC E MAIUSCU
            const expressao = new RegExp(this.value, 'i');

            //TESTAR SE NO NOME VAI TER ALGUMA PARTE DO QUE TEM EM EXPRESSÃO 
            if (expressao.test(nome)) {
                paciente.classList.remove('invisivel')            
            } else {
                paciente.classList.add('invisivel')
            }

        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove('invisivel')
        });
    }

})



