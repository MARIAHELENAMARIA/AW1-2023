//Crie uma função hora() que retorne o horário atual do sistema no formato horas:minutos:segundos.

function hora(){
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    console.log(`${hora}:${minutos}:${segundos}`);
}

hora();