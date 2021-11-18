function escolha1() {
      let escolha1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')


      // while (escolha1 != 1 || escolha1 != 2) {
      //       escolha1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
      // }

      if (escolha1 == 2 ) {
            return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase.html'
      } else if (escolha1 == 1) {
            return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over1.html"
      } else{
            alert('Dado inválido - Digite apenas 1 ou 2')
      }
 
     
}

function escolha2() {
      let escolha2 = prompt('Escolha a alternativa desejada: \n (1) - Atacar as duas ao mesmo tempo com força total  \n (2) - Atacar uma de cada vez cuidadosamente')
        
       if (escolha2 == 2 ) {
        return  window.location.href = '/projeto-modulo1/jason/game-over-jason/game-over2.html'
     } else if (escolha2 == 1) {
        return  window.location.href = "/projeto-modulo1/jason/passou-jason/passou-fase2.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
      }
         
  }


  function escolha3() {
      let escolha3 = prompt('Escolha a alternativa desejada: \n (1) - Atacar de forma mais chamativa   \n (2) - Se infiltrar fazendo um ataque mais furtivo e silencioso ')
        
       if (escolha3 == 2 ) {
        return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase-final.html'
     } else if (escolha3 == 1) {
        return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over-final.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
      }
         
  }
 