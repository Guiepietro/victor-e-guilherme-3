//calculadora de idade
function idade(){
console.log("está funcionando!");

let anoDeNascimento= window.prompt("em que ano voce nasceu?")
console.log(anoDeNascimento);

let resultado = 2023 - anoDeNascimento;
console.log(resultado);
alert("quem nasceu em "+ anoDeNascimento + " vai fazer " + resultado + " anos em 2023");
}


//---------------------------------------------------------------------------------------
//calculadora de nota
//perguntar as notas e mostrar o resultado via função alert


function notas(){
let nota1 = parseFloat (window.prompt ("nota do primeiro trimestre"));
console.log(nota1);
let nota2 = parseFloat (window.prompt ("nota do segundo trimestre"));
console.log (nota2);
let nota3 = parseFloat (window.prompt ("nota do terceiro trimestre"));
console.log(nota3)

let resultado = nota1+nota2+nota3;
if (resultado >= 180){
    alert ("nota dos trimestre: " + resultado + "aprovado");
}else{
    alert("nota dos trimestre: " + resultado + "reprovado");
}
}