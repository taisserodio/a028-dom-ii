function adicionaItem(event){
    //atribuindo a tag container na variavel container                                                                          
    let container = document.getElementById("container");

    //atribuindo a funcionalidade de criar um elemento article na varial novoItem
    let novoItem = document.createElement("article");

    //inserindo o texto "novo item" dentro do HTML da variavel novoItem
    novoItem.innerHTML="novo item"

    //adicionando a classe item na variavel novoItem
    novoItem.classList.add("item")

    novoItem.style.backgroundColor = "pink"

    //adicionando o atributo onclick e a funcao de remover ao ser clicado á variavel novoItem.
    novoItem.setAttribute("onclick" , "removeItem(event)")

    //inserindo a variavel novoItem,já com a classe e o atributo definido no container
    container.appendChild(novoItem)

}

function removeItem(event){
    event.target.remove();
}
