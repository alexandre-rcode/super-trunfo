const button = document.querySelector('button');
button.addEventListener('click', function(){ 
const audio = document.querySelector('audio');
audio.currentTime = 0 
audio.play()
})


var personagem1 = {
    nome: "Pikachu",
    imagem:
      "https://i.pinimg.com/originals/4d/93/8a/4d938af96bce499869d8ee34751f64d9.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      magia: 4
    }
  };
  
  var personagem2 = {
    nome: "Charizard",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ASqCtq-0vSWh9r0ZpLgo5xr_P1oYACvFew6saPRWpAPxBIxDkmy1ncSkMmk5e3wGWAM&usqp=CAU",
    atributos: {
      ataque: 8,
      defesa: 4,
      magia: 7
    }
  };
  
  var personagem3 = {
    nome: "Bulbasaur",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsajTrqfmQnAgNNaJnJCsh8_Bp6tjXiaywHxOGG7XHj9XU5w2KgsT8Wx8LyMuYL7JmSCw&usqp=CAU",
    atributos: {
      ataque: 7,
      defesa: 9,
      magia: 8
    }
  };
  
  var personagem4 = {
    nome: "Gyarados",
    imagem:
      "https://i.pinimg.com/originals/f9/99/41/f99941d53186be1dcfc0357d516b4bbf.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 3
    }
  };
  
  var personagem5 = {
    nome: "Starmie",
    imagem:
      "https://i.pinimg.com/236x/3e/a8/5e/3ea85e2f622dea870bdfb5516e615be7--pokemon-art.jpg", //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDHMS_Edn_9NU6vzL0ts2-pIpxfDO1ORkiBSxpuE0IbZOXc4VFBa_GwBfxARdlOc9Nvg&usqp=CAU",
    atributos: {
      ataque: 10,
      defesa: 9,
      magia: 9
    }
  };
  
  var personagem6 = {
    nome: "Wartortle",
    imagem:
      "https://shop7.webmodule.prestashop.net/pokedoge/11290-large_default/wartortle.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 7
    }
  };
  
  var personagem7 = {
    nome: "Charmeleon",
    imagem:
      "https://www.seekpng.com/png/detail/174-1744839_charmeleon-pokemon-charmeleon-png.png",
    atributos: {
      ataque: 4,
      defesa: 8,
      magia: 5
    }
  };
  
  var personagem8 = {
    nome: "Jigglypuff",
    imagem:
      "https://media.pocketmonsters.net/characters/2082.png",
    atributos: {
      ataque: 5,
      defesa: 7,
      magia: 9
    }
  };
  
  var personagem9 = {
    nome: "Nidorino",
    imagem:
      "https://static.wikia.nocookie.net/pokemon-rebootash-new-begining/images/7/73/Nidorino.jpg/revision/latest?cb=20200707162659",
    atributos: {
      ataque: 7,
      defesa: 5,
      magia: 8
    }
  };
  
  var personagem10 = {
    nome: "Ninetales",
    imagem:
      "https://ovicio.com.br/wp-content/uploads/ninetales.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 9
    }
  };

  var personagem11 = {
    nome: "Onix",
    imagem:
      "https://www.wikihow.com/images_en/thumb/1/16/Evolve-Onix-Step-1-Version-5.jpg/v4-460px-Evolve-Onix-Step-1-Version-5.jpg.webp",
    atributos: {
      ataque: 10,
      defesa: 5,
      magia: 6
    }
  };
  
  var personagens = [
    personagem1,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7,
    personagem8,
    personagem8,
    personagem9,
    personagem10,
    personagem11
  ];
  var personagemMaquina;
  var personagemJogador;
  
  function sortearPersonagem() {
    var numeroPersonagemMaquina = parseInt(Math.random() * 12);
    personagemMaquina = personagens[numeroPersonagemMaquina];
  
    var numeroPersonagemJogador = parseInt(Math.random() * 12);
    while (numeroPersonagemMaquina == numeroPersonagemJogador) {
      numeroPersonagemJogador = parseInt(Math.random() * 12);
    }
    personagemJogador = personagens[numeroPersonagemJogador];
    console.log(personagemJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirPersonagemJogador();
  
    resetarPersonagemMaquina();
  }
  
  // function exibirOpcoes() {
  //   var opcoes = document.getElementById("opcoes");
  //   var opcoesTexto = "";
  
  //   for (var atributo in personagemJogador.atributos) {
  //     opcoesTexto +=
  //       "<input type='radio' name='atributo' value='" +
  //       atributo +
  //       "'>" +
  //       atributo;
  //   }
  //   opcoes.innerHTML = opcoesTexto;
  // }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
  
    var elementoResultado = document.getElementById("resultado");
    var valorPersonagemJogador = personagemJogador.atributos[atributoSelecionado];
    var valorPersonagemMaquina = personagemMaquina.atributos[atributoSelecionado];
  
    if (valorPersonagemJogador > valorPersonagemMaquina) {
      htmlResultado = "<p class='resultado-final'>Parabéns! Você venceu!</p>";
    } else if (valorPersonagemMaquina > valorPersonagemJogador) {
      htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empate!</p>";
    }
    elementoResultado.innerHTML = htmlResultado;
    //document.getElementByID("btnJogar").disabled = true;
    exibirPersonagemMaquina();
    document.getElementById("btnSortear").disabled = false;
  }
  
  function exibirPersonagemJogador() {
    var divPersonagemJogador = document.getElementById("carta-jogador");
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    divPersonagemJogador.style.backgroundImage = `url(${personagemJogador.imagem})`;
    //ou tbm pode ser divPersonagemJogador.style.backgroundImage = "url(" + personagemJogador.imagem + ")";
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in personagemJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        personagemJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${personagemJogador.nome}</p>`;
    divPersonagemJogador.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirPersonagemMaquina() {
    var divPersonagemMaquina = document.getElementById("carta-maquina");
    divPersonagemMaquina.style.backgroundImage = `url(${personagemMaquina.imagem})`;
    //ou tbm pode ser divPersonagemJogador.style.backgroundImage = "url(" + personagemJogador.imagem + ")";
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in personagemMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        personagemMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${personagemMaquina.nome}</p>`;
    divPersonagemMaquina.innerHTML =
      moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function resetarPersonagemMaquina() {
    var divPersonagemMaquina = document.getElementById("carta-maquina");
    document.getElementById("carta-maquina").innerHTML =
      "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    document.getElementById("carta-maquina").style.backgroundImage = null;
  }