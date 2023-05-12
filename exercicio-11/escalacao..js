function addPlayer() {

    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    console.log({ position, name, number });

    const confirmation = confirm("Escalar " + name + " como " + position + " ?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + " (" + number + " )"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''

    }

}





function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    console.log(typeof number)
    
    const playerToRemove = document.getElementById('play-' + number)
    console.log(typeof playerToRemove)
   
    const confirmation = confirm('Deseja remover o jogador  ?' + playerToRemove + number)
    console.log(typeof confirmation)

    if (confirmation) {
        playerToRemove.remove()
        //document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''

    }


}