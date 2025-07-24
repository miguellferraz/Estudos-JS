function criarCarro(marca, modelo, ano) {
        const carro = {
          marca: marca,
          modelo: modelo,
          ano: ano,
          info: function() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
          },
          verificarIdade: function() {
            if (this.ano >= 2020) {
              return `Carro novo`;
            } else {
              return `Carro velho`;
            }
          },
          atualizarAno: function(novoAno) {
            this.ano = novoAno;
            return `Ano do ${marca} ${modelo} atualizado para ${this.ano}!`
          }
        };
        return carro;
      }

      const carro1 = criarCarro("Volkswagen", "Bora", 2008);
      console.log(carro1.info());
      console.log(carro1.verificarIdade());

      const carro2 = criarCarro("Honda", "Civic", 2022);
      console.log(carro2.info());
      console.log(carro2.verificarIdade());

      console.log(carro1.atualizarAno(2012));
      console.log(carro1.info());