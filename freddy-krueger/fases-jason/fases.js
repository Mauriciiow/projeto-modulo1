function escolha1() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')


      // while (escolha != 1 || escolha1 != 2) {
      //       escolha = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
      // }

      if (escolha == 2 ) {
            return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase.html'
      } else if (escolha == 1) {
            return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over1.html"
      } else{
            alert('Dado inválido - Digite apenas 1 ou 2')
            escolha1()
      }
 
     
}

function escolha2() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Atacar as duas ao mesmo tempo com força total  \n (2) - Atacar uma de cada vez cuidadosamente')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/jason/game-over-jason/game-over2.html'
     } else if (escolha == 1) {
        return  window.location.href = "/projeto-modulo1/jason/passou-jason/passou-fase2.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha2()
      }
         
  }


  function escolha3() {
      var escolha = prompt('Escolha a alternativa desejada: \n (1) - Atacar de forma mais chamativa   \n (2) - Se infiltrar fazendo um ataque mais furtivo e silencioso ')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase-final.html'
     } else if (escolha == 1) {
        return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over-final.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha3()
      }
         
  }
 