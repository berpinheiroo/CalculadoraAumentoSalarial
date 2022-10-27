/* Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o
aumento de salário de seus clientes.
1. Peça para seu cliente informar seu nome, idade e salário atual e exibe essas
informações em tela.
2. Faça a previsão do salário dele para os próximos 10 anos considerando que:
O cliente recebe, anualmente, aumento salarial.
Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o
seu salário atual; A partir do segundo ano, os aumentos salariais sempre
corresponderam ao dobro do percentual do ano anterior. Apresente todos os
valores com o ano correspondente ex: 2023 - R$1500.
3. Peça para que seu cliente confirme as informações, se ele informar que digitou
errado, peça para colocar TODAS as informações novamente, se o cliente errar 4
vezes o programa deve ser encerrado. */

var nome = prompt("Insira seu nome")
var idade = prompt("Insira sua idade")
var salAtual = parseInt(prompt("Insira seu salário atual"))
var anoAtual = 2022
var novoSal
var confirm = prompt("Suas informações estão certas? Se sim: 1, se não: 2")
var sim
var nao

console.log("Seu nome é:", nome)
console.log("Sua idade é:", idade)
console.log("Seu salário atual é:", salAtual, "R$")

for(i = 0; i < 10; i++){
   novoSal = ((salAtual*1.5) / 100) + salAtual
   console.log(anoAtual + " - " + "R$"+novoSal.toFixed(2))
   salAtual = novoSal
   anoAtual = anoAtual + 1
}

confirm 

if(confirm == 1){
   console.log("Está pronto seu relatório")
}

if(confirm == 2){
   console.log("Digite novamente seus dados")
}