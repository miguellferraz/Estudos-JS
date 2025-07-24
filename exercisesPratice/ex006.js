function criarProduto(nome, preco, qtd) {
  const produto = {
    nome: nome,
    preco: preco,
    qtd: qtd,
    info: function() {
        return `\nProduto: ${this.nome} \nPreço: R$ ${this.preco} \nQuantidade: ${this.qtd}`;
    },
    total: function() {
        return `\nValor Total: R$ ${this.preco * this.qtd}`;
    }
  };
  return produto;
}

const produto1 = criarProduto("Camisa", 80, 8);
console.log(produto1.info()); 
console.log(produto1.total()); 

const produto2 = criarProduto("Calça", 110, 4);
console.log(produto2.info()); 
console.log(produto2.total()); 


