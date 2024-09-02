let valorTotal = 0;
limpar();


//botao adicionar ao carrinho
function adicionar() {
//recuperar valores - nome do produto, quantidade e valor
 let produto = document.getElementById('produto').value;
 let nomeProduto = produto.split('-')[0];
 let valorUnitario = produto.split('R$')[1];
 let quantidade = document.getElementById('quantidade').value;

 quantidade = quantidade.trim(); // Remove espaços em branco
 quantidade = parseInt(quantidade); // Converte para número
 
 if (isNaN(quantidade) || quantidade <= 0) {
     alert("Insira uma quantidade válida.");
     return;
 }

 //calcular o preço
 let preco = parseFloat(quantidade * valorUnitario);

//adicionar ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

//atualizar o valor total
valorTotal = valorTotal + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${valorTotal}`;
document.getElementById('quantidade').value = '';


}

//botao limpar
function limpar () {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
}

// Adicione validações no código para garantir 
//que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. 
//Se a entrada não for válida, exiba uma mensagem de erro apropriada.