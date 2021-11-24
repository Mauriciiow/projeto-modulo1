function escolha1() {
      let escolhaF1 


      while (escolhaF1 != 1 || escolhaF1 != 2) {
            escolhaF1 = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')
            if (escolhaF1 == 2 ) {
                  return  window.location.href = '/projeto-modulo1/michael-myers/passou-michael/passou-fase.html'
            } else if (escolhaF1 == 1) {
                  return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over1.html'
            } else{
                  alert('Dado inválido - Digite apenas 1 ou 2')
                  
            }
      }

     
 
     
}

function escolha2() {
      let escolhaF2 
        
      while (escolhaF2 != 1 || escolhaF2 != 2) {
            escolhaF2 = prompt('Escolha a alternativa desejada: \n (1) - Proteger a sede  \n (2) - Ficar na linha de frente')

        if (escolhaF2 == 2 ) {
        return  window.location.href = '/projeto-modulo1/michael-myers/passou-michael/passou-fase2.html'
       } else if (escolhaF2 == 1) {
        return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over2.html'
       } else{
       alert('Dado inválido - Digite apenas 1 ou 2')
       
       }     
            
      }
      
      
         
  }


  function escolha3() {
      let escolhaF3
        

      while (escolhaF3 != 1 || escolhaF3 != 2) {
        escolhaF3 = prompt('Escolha a alternativa desejada: \n (1) - Usar suas habilidades juntamente com a arma e tentar combater o máximo de inimigos possíveis  \n (2) - Focar totalmente no abate dos chefes de cada organização')
        if (escolhaF3 == 2 ) {
          return  window.location.href = '/projeto-modulo1/michael-myers/game-over-michael/game-over-final.html'
      } else if (escolhaF3 == 1) {
          return  window.location.href = "/projeto-modulo1/michael-myers/passou-michael/passou-fase-final.html"
      } else{
         alert('Dado inválido - Digite apenas 1 ou 2')
               
       }   
      }

         
  }
 