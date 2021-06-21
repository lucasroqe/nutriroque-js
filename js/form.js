var botaoAdici = document.querySelector('#adicionar-paciente')

botaoAdici.addEventListener('click', function (event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    //EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
    var paciente = obtemPacienteForm(form)

    //CRIAR TR E TD
    var pacienteTr = criarTr(paciente)

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensErro(erros)
        return
    }

    //COLOCAR NA TABELA
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)

    form.reset()

    var msgErro = document.querySelector('#mensagens-erro')
    msgErro.innerHTML = ''

    //textcontent = quando você quiser alterar um text
    //innerHTML quando você quiser criar novos elementos -  
    //    Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
})

function obtemPacienteForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function criarTr(paciente) {

    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(criarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(criarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(criarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(criarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(criarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function criarTd(dado, classe) {

    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {

    var erros = []

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido')
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura inválida')
    }

    if (paciente.nome.length == 0) {
        erros.push('Nome = 0')
    }

    if (paciente.gordura.length == 0) {
        erros.push('Gordura = 0')
    }

    return erros
}

function exibeMensagensErro(erros) {
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(erro => {
        var li = document.createElement('li')
        li.textContent = erro
        li.classList.add('mensagem-erro')
        ul.appendChild(li)
    });
}

