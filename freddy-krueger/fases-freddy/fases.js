function escolha1() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Matar 50 integrantes da Luf em 1 hora e obter informações sobre o local  \n (2) - Tentar enfrentar durante o dia um dos chefões da Corvi ')


      // while (escolha != 1 || escolha1 != 2) {
      //       escolha = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
      // }

      if (escolha == 2 ) {
            return  window.location.href = '/projeto-modulo1/freddy-krueger/game-freddy/game-over1.html'
      } else if (escolha == 1) {
            return  window.location.href = "/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase.html"
      } else{
            alert('Dado inválido - Digite apenas 1 ou 2')
            escolha1()
      }
 
     
}

function escolha2() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Atacar os soldados das outras organizações pelos seus sonhos durante a noite  \n (2) - Tentar usar a lendária arma da Son e atacar de uma forma mais direta')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/freddy-krueger/game-freddy/game-over2.html'
     } else if (escolha == 1) {
        return  window.location.href = "/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase2.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha2()
      }
         
  }


  function escolha3() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Criar uma revolução com todos os subordinados da Son para tomar o poder   \n (2) - Esperar anoitecer e invadir o sonho do chefe e matá-lo, tomando o poder da organização na base do medo ')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase-final.html'
     } else if (escolha == 1) {
        return  window.location.href = "/projeto-modulo1/freddy-krueger/game-freddy/game-over-final.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha3()
      }
         
  }
 