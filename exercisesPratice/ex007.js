function criarTermometro(temp) {
  const termometro = {
    temp: temp,
    mostrar: function () {
      return `Temperatura Atual: ${this.temp}°C`;
    },
    aumentar: function (valor) {
      this.temp += valor;
    },
    diminuir: function (valor) {
      this.temp -= valor;
    }
  };
  return termometro;
}

const termometro = criarTermometro(25);

console.log(termometro.mostrar()); 

termometro.aumentar(3);
console.log(termometro.mostrar()); 

termometro.diminuir(5);
console.log(termometro.mostrar()); 
