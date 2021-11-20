function escolha1() {
      let escolha1 = prompt('Escolha a alternativa desejada: \n (1) - Trazer a cabeça de um dos principais chefes da Luf  \n (2) - Roubar uma arma rara que somente a Son possuí')


      // while (escolha1 != 1 || escolha1 != 2) {
      //       escolha1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
      // }

      if (escolha1 == 2 ) {
            return  window.location.href = '/projeto-modulo1/michael-myers/passou-michael/passou-fase.html'
      } else if (escolha1 == 1) {
            return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over1.html'
      } else{
            alert('Dado inválido - Digite apenas 1 ou 2')
            escolha1()
      }
 
     
}

function escolha2() {
      let escolha = prompt('Escolha a alternativa desejada: \n (1) - Proteger a sede  \n (2) - Ficar na linha de frente')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/michael-myers/passou-michael/passou-fase2.html'
       } else if (escolha == 1) {
        return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over2.html'
       } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha2()
       }
      
         
  }


  function escolha3() {
      let escolha = prompt('Escolha a alternativa desejada: \n (1) - Usar suas habilidades juntamente com a arma e tentar combater o máximo de inimigos possíveis  \n (2) - Focar totalmente no abate dos chefes de cada organização')
        
       if (escolha == 2 ) {
        return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over-final.html'
     } else if (escolha == 1) {
        return  window.location.href = "/projeto-modulo1/michael-myers/passou-michael/passou-fase-final.html"
      } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       escolha3()
      }
         
  }
 