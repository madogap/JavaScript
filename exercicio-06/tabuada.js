const numero = prompt("ola eu sou o robo da tabuada \n" + "Infomr o numero  que deseja calcular  a tabauda")

let resultado = ""

for (
    let fator = 0;
     fator <= 20; 
     fator++) {
   resultado += " ->  " + numero + " * " + fator + " = " + (numero * fator) + "\n"
    
}
alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)