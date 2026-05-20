//capturar o formulario
const formulario= document.getElementById("formReserva");
//capturara mensagem
const resultado= documento.getElementById("resultado");

//evento de envio

formulario.addEventListener("submit", function(event){
    //impede recarregar a pagina
    event.preventDefault();
    //captura os valores
    const nome= document.getElementById("nome").ariaValueMax;
    const email= document.getElementById("email").ariaValueMax;
    const whatsapp= document.getElementById("Whatsapp").ariaValueMax;
    const data= document.getElementById("data").ariaValueMax;
    const horario= document.getElementById("horario").ariaValueMax;
    const mensagem= documet.getElementById("mensagem").ariaValueMax;

    //exibe confirmação
    resultado.innerHTML='Reserva realizada com sucesso';

    //monta otexto do email
    const corpoEmail=
    `Nome: ${nome}
    E-mail: ${email}
    Whatsapp: ${whatsapp}
    Data: ${data}
    Horario: ${horario}
    Detalhe: ${mensagem}`;
    //abre o e-mail
    window.location.href=`mailto:ncondori292@gmail.com?subject=NovaReserva &body={encodeURIComponent(corpoEmail)}`;
  });