O que é o DOM 
Document Object Model
-> Permite que um documento escrito em uma linguagem de marcação (HTML, XML, etc), seja acessado pelo code JavaScript
Isso é feito através de uma estrutura de árvore de objetos.
Permite que tenhamos acesso direto à página HTML para manipulá-la de várias formas.-> ler os elementos, criar novos elementos, excluir elementos modificar elementos e  modificar estilos.
No navegador, podemos acessar o DOM através do objeto document.

Obtendo elementos HTML do DOM-. Permite ler elementos específicos do documento HTML;

Obter vários elementos em uma HTMLColletion; -> document.getElementsByTagName() && document.getElementsByClassName()

Obter vários elementos em uma NodeList; -> document.getElementsByName() && document.querySelectorAll()

Obtendo um único elemento; -> document.getElementById() && document.querySelector()

O DOM nos permite adicionar dinamicamente novos elementos HTML ao documento:
Criar elemento:
document.createElement() 

Adicionar: 
newElement.innerHTML = "Olá, Mundo!"

Adicionar o elemento com um novo nó no DOM:
element.appendChild(newElement)

Também é possível clonar algum elemento existente do DOM

