//parãmetros de função

              //2   //2
// function soma(num1, num2){
//     return num1 + num2;
// }



// console.log(soma(2, 2));
// console.log(soma(284, 20));
// console.log(soma(-54454, 54841));

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado;
// algumas documentações se referem a parâmetros no momento em que a função é definida 
// (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função
// (ou seja, 30, 45, etc).

// Ordem dos parãmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(73, "Tinha"));

function soma(num1, num2){
    return num1 + num2;
}

                   
function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;

}
                            //9          //6
console.log(multiplica(soma(4, 5), soma(3, 3)))

function comParametro(param) {
    console.log(param)
}
comParametro()