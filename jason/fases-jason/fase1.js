function escolher() {
 let escolha = prompt('Escolha a alternativa desejada: \n (1) - Matar 10 pessoas em 1 hora  \n (2) - Matar 100 pessoas em 5 horas ')

 if (escolha == 2 ) {
       return  window.location.href = '/projeto-modulo1/jason/passou-jason/passou-fase.html'
 } else if (escolha == 1) {
       return  window.location.href = "/projeto-modulo1/jason/game-over-jason/game-over1.html"
 } else(
     alert('Dado inválido - Digite apenas 1 ou 2')
 )
 
     
}