let data = 15/10/2021;
let idadeParticipante = 26;

//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
if (data <= 16/10/2021 ) {
    console.log("Evento permitido")
}else{
    console.log("evento não permitido, pois a data é inválida")
}

// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
if(idadeParticipante >= 18){
    console.log("Acesso permitido")
}else {
    console.log("Cadastro não é permitido pela idade")
}

//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
let participantes = ["(Alex) "+"(joao) "+"(Maria e Antônio)"]

while(participantes.length < 100){
    console.log("Lista de participantes: " +participantes)
    participantes = participantes.length++

    if(participantes <= 100){
        console.log("Participantes cadastrados")
    }else{
        console.log("Participantes não cadastrados, pois ultrapassou a quantidades de 100 pessoas")
    }
}
