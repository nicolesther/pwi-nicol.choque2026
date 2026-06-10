function mostrarPratos(){
    //Matriz
    var pratos=["Lasanha","Pizza","Risoto","Nhoque","Ravioli"];
    //divResultado
    let resultado=document.getElementById("resultado");
    resultado.innerHTML="";

//PERCORRER A MATRIZ
for(let i=0; i<pratos.length;i++){
    resultado.innerHTML+="<p>" + pratos[i]+"</p>";
}
}