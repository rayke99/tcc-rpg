var nome = "sn";
//Espera carregar e executa a função
window.addEventListener('load', function () {
  mudartexto("Quatro amigos, incluindo Vitor, Rayke, Kaiser e "+localStorage.getItem("nome")+", aceitam o desafio de passar uma noite no Hospital Sanatório abandonado por uma recompensa financeira. Ansiosos, eles se encontram na frente do hospital e adentram o local à meia-noite. Ao explorarem, deparam-se com uma recepção desolada, marcada por anos de abandono, com pichações e móveis deteriorados. O eco do silêncio do hospital abandonado acompanha suas explorações, criando uma atmosfera onde o tempo parece ter congelado");
  
})
function confirm(){
  nome = document.getElementById("nome").value
  localStorage.setItem("nome", nome);    
}
function mudartexto(t){
  document.getElementById("texto").innerText = t;
}
function mudarbutao1(t){
  document.getElementById("butao1").innerText = t;
}
function mudarbutao2(t){
  document.getElementById("butao2").innerText = t;
}
function mudarImg(t){
  document.getElementById("imagem").src = t;
}
var escolha = 0;
atualizarConteudo();
function atualizarConteudo(){
  switch(escolha){
    case 1:
    mudartexto("Kaiser: Certo... o que a gente faz agora? Só esperamos aqui ou exploramos? Deve ter um motivo para eles terem fechado isso aqui, e eu estou afim de descobrir.\nRayke: Por mim, tanto faz. Confio em vocês.\nVitor: (Fica calado)");
      mudarbutao1("Explorar");
      mudarbutao2("Esperar na recepção");
    mudarImg("https://th.bing.com/th/id/OIG.hDK5avd55KXX6UWkstSK?pid=ImgGn");
    break;



    case 2:
    mudartexto("Kaiser: Vambora então, galera, esse lugar é grande, então temos muito pela frente.\nRayke: Vamos lá então... você vem, Vitor?\nVitor: Eu vou, mas se aparecer um bicho, eu pulo da janela.\nKaiser: Medroso do caramba, ein. Relaxa que não deve ter nada aqui, só papéis e salas de cirurgia abandonadas.\nVocês procuram em vários lugares aí dentro, usando lanterna e celulares, e encontram uma caixinha contendo 8 pilhas; cada lanterna usa 2, então dá para uma carga para cada lanterna. Existem alguns corredores para cada lado. Qual você gostaria de olhar?");
    mudarbutao1("O da direita");
    mudarbutao2("O da esquerda");
    mudarImg("https://th.bing.com/th/id/OIG.wQD1dIm74FLi2IYb6PmM?w=1024&h=1024&rs=1&pid=ImgDetMain");
    break;

    case 3:
    mudartexto("As salas trancadas desafiam os esforços do grupo de adolescentes, incapazes de arrombar as portas devido à falta de força. Diante dessa limitação, a única opção disponível é seguir pelo caminho da esquerda.");
    mudarbutao1("Continuar");
    mudarbutao2("Continuar");
    mudarImg("https://th.bing.com/th/id/OIG.qsM0kUg55ZGj2uc_2UhM?w=1024&h=1024&rs=1&pid=ImgDetMain");
    break;

    case 4:
    mudartexto(" Ao dar a volta pela mesa da recepção,"+localStorage.getItem("nome")+" observa seus amigos lutando sem sucesso para abrir as portas. Os corredores se estendem à frente, longos e enigmáticos, com poucas portas ao longo do trajeto. Apesar das tentativas em todas as portas, apenas uma delas está destrancada, entreaberta, capturando a atenção do grupo.");
    mudarbutao1("Chamar os meninos pra abrir com você");
    mudarbutao2("Abrir sem eles");
    mudarImg("https://th.bing.com/th/id/OIG.KhoHMjNKMpmeUSWEThiR?w=270&h=270&c=6&r=0&o=5&pid=ImgGn");
    break;

    case 5:
    mudartexto(localStorage.getItem("nome")+ " grita por eles falando que achou algo e os mesmos chegam perto\nKaiser: achou alguma coisa??\nPersonagem: tem uma porta aberta aqui, mas não sei o que pode ter\nRayke: gente... Não parece que tem um pouco de luz saindo de lá de dentro???\nVitor: o que??? Não sei se é uma boa abrir isso não");
    mudarbutao1("Abrir");
    mudarbutao2("Deixar como esta");
    mudarImg("https://th.bing.com/th/id/OIG.t.V2y2nEC9IGwo2YESzC?pid=ImgGn");
    break;

    case 6:
    mudartexto("Ao abrir a porta entreaberta,"+localStorage.getItem("nome")+" se depara com uma sala vazia, contendo apenas algumas correntes ensanguentadas e uma luz que pisca fracamente em vermelho. Enquanto analisa o ambiente, os meninos chegam.\nRayke: Gente... O que é isso???\nVitor: Não tenho ideia... Mas parece que estavam querendo prender alguma coisa aqui...\nKaiser: Eu dei uma pesquisada no Google... Parece que este hospital foi fechado por experimentos estranhos em seres vivos, mas não especifica que ser vivo... Eles devem ter achado um jeito de ocultar tudo o que fizeram da internet, porque tem pouquíssimas coisas aqui.");
    mudarbutao1("Continuar");
    mudarbutao2("Continuar");
mudarImg("https://img.mobiuspace.com/image/aigc/a1eb7802f391b31806b9d9b470ea886d_768_768.webp");
    break;

    case 7:
    mudartexto("Rayke: Vamos sair logo daqui que não tá legal.\nOs amigos deixam a sala e deparam-se com uma escadaria.\nVitor: É... Parece que vamos subir.\nTodos seguem juntos para o andar de cima. Às vezes, são surpreendidos, pois o hospital ainda recebe um pouco de energia, e as lâmpadas piscam intensamente ocasionalmente. Ao alcançarem o andar superior, deparam-se com uma situação peculiar - uma bifurcação que instiga a sensação de que qualquer desvio pode ser fatal.\nFIM DO CAPÍTULO");
    mudarbutao1("FIM");
    mudarbutao2("FIM");
mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175432120735379516/DreamShaper_v7_dark_abandoned_hospital_hallway_with_a_scary_si_3.jpg?ex=65746ff8&is=6561faf8&hm=c90ead2fb8698f899fd1afe8203042e05fc18cfaffda09d927a708ae6e308731&=&format=webp&width=936&height=468");
    break;

    case 8:
    mudartexto("seu irmao ganhou um poder overpower e matou você");
    mudarbutao1("começar do zero");
    mudarbutao2("começar do zero");
      mudarImg("https://media1.giphy.com/media/hKafco7mFwBioBxqFT/200w.webp?cid=ecf05e4791aqvxkaw83165pzamlw7xnn5ybiuyyay8oepmd1&ep=v1_gifs_search&rid=200w.webp&ct=g");
    break;

    case 9:
    mudartexto("você deixou sua cama bagunçada e foi comer");
    mudarbutao1("ir para a escola");
    mudarbutao2("ficar em casa");
      mudarImg("https://media4.giphy.com/media/Bg6mBcEe1nXag/200w.webp?cid=ecf05e47v7lzy2uaeyxe1fe3ph1sjc9qquu2h17mqw7dh4hb&ep=v1_gifs_search&rid=200w.webp&ct=g");
    break;

    case 10:
    mudartexto("você foi para a escola e foi atropelado e morreu");
    mudarbutao1("começar do zero");
    mudarbutao2("começar do zero");
      mudarImg("https://media2.giphy.com/media/HFD1jnyM1HuV2/200w.webp?cid=ecf05e47nqg0omxt4qo9rcvmasg48jzwddggzkfv6ur7iwj5&ep=v1_gifs_search&rid=200w.webp&ct=g");
    break;

    case 11:
    mudartexto("você decidiu ficar em casa e foi dumir e morreu");
    mudarbutao1("começar do zero");
    mudarbutao2("começar do zero");
      mudarImg("https://media1.giphy.com/media/RECbLzega6Drj1knHo/200.webp?cid=ecf05e47ppz6t3wl19gl373ob0qj5enwk5lf4hl8rrk2cp23&ep=v1_gifs_search&rid=200.webp&ct=g");
    break;

    case 12:
    mudartexto("Permanecem no hospital até o dia seguinte, quando subitamente, um ruído de passos ressoa pelos corredores, interrompendo o silêncio que envolvia o lugar.\nFIM");
    mudarbutao1("FIM");
    mudarbutao2("FIM");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175442984658018344/Leonardo_Vision_XL_silhouette_of_a_quadrupedal_creature_on_a_d_1_1.jpg?ex=65747a16&is=65620516&hm=0be47005c4443d90b0a014f757eab5a33f962aa264906312cda3b0cdd06d70ed&=&format=webp&width=936&height=468");
    break;

  }
}
function butao1(){
 if(escolha == 1){
   escolha = 2;
 }else if(escolha == 2){
   escolha = 3;
 }else if(escolha == 3){
     escolha = 4;
   }else if(escolha == 4){
     escolha = 5;
   }else if(escolha == 5){
     escolha = 6;
   }else if(escolha == 6){
     escolha = 7;
   }else if(escolha == 0){
     escolha = 1;
   }else if(escolha == 7){
   window.location.href = "index2.html";
   }else if(escolha == 0){
     escolha = 2;
   }else if(escolha == 9){
     escolha = 10;
   }else if(escolha == 10){
     escolha = 0;
   }else if(escolha == 11){
     escolha = 0;
   }else if(escolha == 12){
   window.location.href = "index.html";
   }




  atualizarConteudo();
}
function butao2(){
 if(escolha == 1){
   escolha = 12;
 }else if(escolha == 2){
   escolha = 4;
 }else if(escolha == 3){
     escolha = 4;
   }else if(escolha == 3){
     escolha = 7;
   }else if(escolha == 4){
     escolha = 6;
   }else if(escolha == 6){
     escolha = 7;
   }else if(escolha == 5){
     escolha = 12;
   }else if(escolha == 7){
   window.location.href = "index2.html";
   }else if(escolha == 8){
     escolha = 0;
   }else if(escolha == 9){
     escolha = 11;
   }else if(escolha == 0){
     escolha = 1;
   }else if(escolha == 11){
     escolha = 0;
   }else if(escolha == 12){
   window.location.href = "index.html";
   }
  atualizarConteudo();
}