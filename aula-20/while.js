let velocidade =  80;

while (velocidade > 0) {
    alert("O Carro está a velocidade " + velocidade + " Km/h")
    velocidade -= 20
    alert("Diminuindo 20km/h")
    if (velocidade === 40) {
        alert( "A velocidade é " + velocidade)
        break
    }
}
alert("O carro parou.")