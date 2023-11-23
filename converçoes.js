// tipo dado
// booleanos

//conversão implicita
const numero = 69;
const numeroString = "69";
console.log(numero == numeroString);


//Number()
// Vamos calcular a área de um retângulo

let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura1 = "10";
let altura2 = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

//String()
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.



//converção explicita
console.log(numero + Number(numeroString));


