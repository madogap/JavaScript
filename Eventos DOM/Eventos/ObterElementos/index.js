//methodos seletores para fazer referência as páginas HTML

function show() {
    const contactList = document.getElementById('contact-list') //Retorna diretamente o elemento
    console.log(contactList);

    const listElements = document.getElementsByTagName('li') //Retorna um objeto HTMLCollection
    console.log(listElements);

    const contactInputs = document.getElementsByClassName('contact-input')//Retorna um objeto HTMLCollection
    console.log(contactInputs);

    const contactsClass = document.querySelectorAll('.contact-input')//Retorna um NodeList []
    console.log(contactsClass);
    const contactsId = document.querySelectorAll('#contact-list > li > label')//Retorna um NodeList []
    console.log(contactsId);
    const contact1 = document.getElementsByName('contact1')//Retorna um NodeList []
    console.log(contact1);

    const firstContact = document.querySelector('#contact-list > li > label')//Devolveu somente o elemento
    console.log(firstContact);

}''