function escolha1() {
      var escolhaF1 


      while (escolhaF1 != 1 || escolhaF1 != 2) {
            escolhaF1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
            if (escolhaF1 == 2 ) {
                  return  window.location.href = '/projeto-modulo1/freddy-krueger/game-freddy/game-over1.html'
            } else if (escolhaF1 == 1) {
                  return  window.location.href = "/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase.html"
            } else{
                  alert('Dado inválido - Digite apenas 1 ou 2')
                
            }
      }

      
 
     
}

function escolha2() {
      var escolhaF2 

      while (escolhaF2 != 1 || escolhaF2 != 2) {
            escolhaF2 = prompt('Escolha a alternativa desejada: \n (1) - Atacar os soldados das outras organizações pelos seus sonhos durante a noite  \n (2) - Tentar usar a lendária arma da Son e atacar de uma forma mais direta')
            if (escolhaF2 == 2 ) {
                  return  window.location.href = '/projeto-modulo1/freddy-krueger/game-freddy/game-over2.html'
               } else if (escolhaF2 == 1) {
                  return  window.location.href = "/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase2.html"
                } else{
                 alert('Dado inválido - Digite apenas 1 ou 2')
               
                }
      }
     
         
  }


  function escolha3() {
      var escolhaF3 
        

      while (escolhaF3 != 1 || escolhaF3 != 2) {
            escolhaF3 = prompt('Escolha a alternativa desejada: \n (1) - Criar uma revolução com todos os subordinados da Son para tomar o poder   \n (2) - Esperar anoitecer e invadir o sonho do chefe e matá-lo, tomando o poder da organização na base do medo ')
            if (escolhaF3 == 2 ) {
                  return  window.location.href = '/projeto-modulo1/freddy-krueger/passou-freddy/passou-fase-final.html'
               } else if (escolhaF3 == 1) {
                  return  window.location.href = "/projeto-modulo1/freddy-krueger/game-freddy/game-over-final.html"
                } else{
                 alert('Dado inválido - Digite apenas 1 ou 2')
                 
                }
      }
      
         
  }
 