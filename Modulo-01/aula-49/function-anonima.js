function somar(a, b) {
    return a + b
}
let operacao = somar
console.log(operacao(4, 5));
operacao = function (a, b) {
    return a - b
}
console.log(operacao(4, 5));
olaMundo()
oiMundo()//ReferenceError: Cannot access 'oiMundo' before initialization  
function olaMundo() {
    console.log("Ola, Mundo");
}
const oiMundo = function(){
    console.log("Oi, Mundo");
}

