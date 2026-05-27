function verificarPromocao(){
    let dia=document.getElementById("dia").value;
    let resultado=document.getElementById("resultado");
    //deixa tudo minusculo
    dia=dia.toLowerCase()
    //estrutura case
    switch(dia){
        case "segunda":
            resultado.innerHTML="Pizza em dobro"
            break;
            case "terça":
                resultado.innerHTML="Refrigerante grátis"
                break;
                case "quarta":
                    resultado.innerHTML="Rodizio com desconto";
                    break;
                    case "quinta":
                        resultado.innerHTML="Sobremesa grátis";
                        break;
                        case "sexta":
                            resultado.innerHTML="Caipirinha grátis";
                            break;
                            case "sabado":
                                resultado.innerHTML="Menu especial";
                                break;
                                case "domingo":
                                    resultado.innerHTML="Restaurante fechado";
                                    break;
                                    default:
                                        resultado.innerHTML="Digite um dia valido";
    }
}