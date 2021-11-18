function escolhaPersonagem() {
  var escolhaPersonagem =  prompt('Escolha seu personagem \n (1) - Jason \n (2) - Michael Myers \n (3) - Freddy Krueger')
  if (escolhaPersonagem == 1) {
    return window.location.href = '/projeto-modulo1/jason/fases-jason/fase1.html'
  } else {
    alert('em desenvolvimento!')
  }
}