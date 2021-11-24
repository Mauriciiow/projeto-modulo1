function escolha1() {
      var escolhaF1 

      while (escolhaF1 != 1 || escolhaF1 != 2) {
            escolhaF1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
            if (escolhaF1 == 2 ) {
                  return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase.html'
            } else if (escolhaF1 == 1) {
                  return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over1.html"
            } else{
                  alert('Dado inválido - Digite apenas 1 ou 2')
                  
            }
      }

      
 
     
}

function escolha2() {
      var escolhaF2 

      while (escolhaF2 != 1 || escolhaF2 != 2) {
            escolhaF2 = prompt('Escolha a alternativa desejada: \n (1) - Atacar as duas ao mesmo tempo com força total  \n (2) - Atacar uma de cada vez cuidadosamente')
       if (escolhaF2 == 2 ) {
            return  window.location.href = '/projeto-modulo1/jason/game-over-jason/game-over2.html'
    } else if (escolhaF2 == 1) {
            return  window.location.href = "/projeto-modulo1/jason/passou-jason/passou-fase2.html"
    } else{
        alert('Dado inválido - Digite apenas 1 ou 2')
                 
        }
                   
      }

      
  }


  function escolha3() {
      var escolhaF3
        
      while (escolhaF3 != 1 || escolhaF3 != 2) {
      escolhaF3 = prompt('Escolha a alternativa desejada: \n (1) - Atacar de forma mais chamativa   \n (2) - Se infiltrar fazendo um ataque mais furtivo e silencioso ')
      
       if (escolhaF3 == 2 ) {
          return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase-final.html'
       } else if (escolhaF3 == 1) {
         return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over-final.html"
       } else{
         alert('Dado inválido - Digite apenas 1 ou 2')
        }

      }
         
  }
 