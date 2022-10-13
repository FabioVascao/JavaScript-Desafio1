/* Operações Matemáticas e par/impar */

let n1 = prompt("Digite o 1° Número:"); /* Solicita ao usuário e guarda o número em n1 */
let n2 = prompt("Digite o 2° Número:") /* Solicita ao usuário e guarda o número em n1 */

n1 = Number(n1) /* Transforma o n1 de String para Number */
n2 = Number(n2) /* Transforma o n2 de String para Number */

let sum = n1 + n2; /* Faz a soma dos números */
let sub = n1 - n2; /* Faz a subtração dos números */
let div = (n1 / n2).toFixed(2); /* Faz a divisão dos números e deixa 2 casas depois da vírgula*/
let multi = n1 * n2; /* Faz a multiplicação dos números */
let rest = n1 % n2; /* Calcula o resto da divisão dos números */

alert(`A soma dos números é ${sum}`) /* Escreve na tela */
alert(`A subtração dos números é ${sub}`) /* Escreve na tela */
alert(`A divisão dos números é ${div}`) /* Escreve na tela */
alert(`A multiplicação dos números é ${multi}`) /* Escreve na tela */
alert(`O resto da divisão dos números é ${rest}`) /* Escreve na tela */

if (sum % 2 == 0) { /* Compara se o resto da divisão da soma por 2 é igual a 0*/
  alert("A soma dos números é par") 
} else {
  alert("A soma dos números é impar")
}

if (n1 == n2) { /* Compara se o n1 é igual ao n2*/
  alert("Os dois números digitados são iguais")
} else {
  alert("Os dois números digitados são diferentes")
}
