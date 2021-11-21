function escolhaPersonagem() {
  var escolhaPer =  prompt('Escolha seu personagem \n (1) - Jason \n (2) - Michael Myers \n (3) - Freddy Krueger')
  if (escolhaPer == 1) {
    return window.location.href = '/projeto-modulo1/jason/fases-jason/fase1.html'

  } else if(escolhaPer == 2) {
    return window.location.href = '/projeto-modulo1/michael-myers/fases-michael/fase1.html'
    
  } else if (escolhaPer == 3) {
    return window.location.href = '/projeto-modulo1/freddy-krueger/fases-freddy/fase1.html'

  } else {
    alert('Escolha algum personagem!')
    escolhaPersonagem()
  }
}

