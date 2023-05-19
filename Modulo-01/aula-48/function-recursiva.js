function dividir(num) { //Primeira function
    console.log(num);
    if (num % 2 === 0) {
        dividir(num / 2) //Segunda function
    } else {
        return num
    }
}
dividir(2)

// Primeira -> Segunda -> Terceira ...
function fatorial(num) {
    console.log("Número: " + num);
    if (num === 0) { //Caso base
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * ! " + (num - 1));
        return num * fatorial(num - 1)
    }
}
console.log(fatorial(5));