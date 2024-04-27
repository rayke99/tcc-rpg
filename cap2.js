var nome = "sn";
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
function mudarbutao3(t){
  document.getElementById("butao3").innerText = t;
}
function mudarImg(t){
  document.getElementById("imagem").src = t;
}
var escolha = 0;
atualizarConteudo();
function atualizarConteudo(){
  switch(escolha){
      case 1:
      mudartexto("entao "+localStorage.getItem("nome")+": você escolhe ir para a direita ou esquerda?");
        mudarbutao1("ir para a esquerda");
        mudarbutao2("ir para a direita");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175432120735379516/DreamShaper_v7_dark_abandoned_hospital_hallway_with_a_scary_si_3.jpg?ex=656b3578&is=6558c078&hm=4160524301c857e21ed0c1378095d3b30e94fc6f64cf83b86ee55111e28d1f25&=&width=936&height=468");
      break;
    
    case 2:
    mudartexto("Vocês seguem o caminho da esquerda   Kaiser: depois vamos ver o da direita de qualquer forma, então tá de boa Vitor: é que nem aquelas situações de filme onde vc tem que escolher entre o caminho da luz ou o das trevas....  Rayke: e nos vivíamos julgando os personagens desses filmes por caírem direto na morte Kaiser: gente, relaxa aí que ninguém vai morrer, não tem nada aqui não, Mas ó, parece ter algumas portas abertas, vamos ver oq tem.");
      mudarbutao1("continuar");
      mudarbutao2("continuar");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 3:
    mudartexto("Você se separam pra procurar nas salas que estão destrancadas mas não acham nada além de ferramentas de cirurgia enferrujados ou um monte de destroços, é de de esperar de um hospital abandonado, você termina de ver uma das salas e volta pro corredor, quando você percebe o caminho que vocês vieram... Tem uma silhueta de um homem adulto .. no corredor, o qual você não consegue ver o rosto mesmo jogando luz com sua lanterna");
    mudarbutao1("chamar os meninos");
    mudarbutao2("tentar interagir com a silhueta");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 4:
    mudartexto("Vocês seguem o caminho que está iluminando mas quando chegam lá, não conseguem ver nada além de uma lâmpada acesa num lugar totalmente degradado e destruído, porém... Uns 5 minutos depois você começa a sentir como se tivesse alguém te olhando, um olhar te observando, e quando você percebe... Tem uma porta ali.. essa porta não estava ali antes, é uma porta escura que tem uma fresta pequena aberta.");
    mudarbutao1("Continuar");
    mudarbutao2("Continuar");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 5:
    mudartexto("Kaiser:Gente... Tem algo errado... Parece que tem alguém observando a gente mas eu não sei da onde, "+localStorage.getItem("nome")+": ali...  Você aponta com o dedo pra porta e quando você pisca... Ela está fechada Kaiser:você fala que tem alguém naquela porta???? Tá... Você vê o Kaiser pegando um pedaço de madeira meio longo. Rayke: oque você vai fazer com isso?? Kaiser: nos manter seguros.. vamos pro outro caminho sem tirar os olhos daquela porta..");
    mudarbutao1("voltar e ir para o lado esquerda");
    mudarbutao2("voltar e ir para o lado esquerda");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606565855253/85_Sem_Titulo_20231208225659.png?ex=65864c8c&is=6573d78c&hm=166f43c7b45933010856b4be643fca2273daa3e8dec8c2ede3aa5d6382f71393&=&format=webp&quality=lossless&width=824&height=412");
    break;

    case 6:
      mudartexto("Você fala o nome deles alto e os três chegam perto, porém quando você menos percebe a silhueta deixou de existir Kaiser: aconteceu alguma coisa??? "+localStorage.getItem("nome")+": tinha alguém ali... Eu vi alguém ali mas sumiu... Rayke: poxa vida "+localStorage.getItem("nome")+" não assusta a gente assim, para de graça Vitor: é, isso não é nada legal Você apenas imagina que foi coisa da sua cabeça e vocês seguem em frente, explorando mais um pouco vocês encontram uma sala que está fechada porém tem um brilho passando por de baixo, e esse brilho tem duas sombras sendo formadas como se fosse de pernas do outro lado da porta.");
      mudarbutao1("continuar");
      mudarbutao2("continuar");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606909767730/DreamShaper_v7_Destroyed_Black_abandoned_Dark_macabre_scary_ab_0.jpg?ex=65864c8c&is=6573d78c&hm=215af6266670e731043546fef00a9bf9d2379b6bd642f749ab6985389c3c30de&=&format=webp&width=824&height=412");
      break;
      
    case 7:
      mudartexto("Rayke: gente... Não vamo abrir isso, e se for um bicho ou alguma coisa, vamo lá galera.. já são oque.. aqui no meu celular tá marcando 03:40 ent nós podemos simplesmente ficar em um canto só, que daqui umas horinhas nos podemos sair Kaiser: eu concordo com a ideia de não abrirmos a porta mas podemos explorar mais... Quero descobrir oque eles faziam aqui Vitor: gente, eu não sei não.. eu vou seguir oque o grupo decidir, e você "+localStorage.getItem("nome")+" oque você acha??");
      mudarbutao1("explorar mais");
      mudarbutao2("esperar dar a hora do lado de fora");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606909767730/DreamShaper_v7_Destroyed_Black_abandoned_Dark_macabre_scary_ab_0.jpg?ex=65864c8c&is=6573d78c&hm=215af6266670e731043546fef00a9bf9d2379b6bd642f749ab6985389c3c30de&=&format=webp&width=824&height=412");
      break;
      
    case 8:
      mudartexto("vocês seguem em direção a recepção e quando chegam nela conseguem ver o dia amanhecendo fraco lá do outro lado, parte do céu começando a esclarecer, e quando vocês chegam na porta, vocês percebem algo extremamente horripilante, tem uma espécie de monstro de 3 metros que está encharcado de sangue e que tem correntes amarradas em seu corpo porém que não prendem ele, vocês precisam fugir, vocês começam a correr e sentem o chão tremer com os passos daquela criatura correndo atrás de vocês e ela é rápida, mais rápida que vocês... Você a pessoa mais lenta do grupo e a criatura te alcança primeiro.. você escuta Kaiser, rayke e Vitor gritar seu nome pois a criatura está com sua enorme boca aberta perto de sua cabeça... Voce simplesmente em uma fração de segundo consegue apenas enxergar tudo ficando preto... Você morreu");
      mudarbutao1("tente novamente");
      mudarbutao2("tente novamente");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175482810929262673/ead0101f-7644-426b-84ce-6d5fc8c2863c.jpg?ex=657dd9ad&is=656b64ad&hm=44a5aef5b30cb3310ec7ab75&=&format=webp&width=478&height=478");
      break;
      
    case 9:
      mudartexto("Você continuam explorando pra frente e quando você olha pra trás a luz se apagou.. seguindo em frente, vocês encontra uma sala diferente.. o teto está totalmente destruído mostrando as nuvens e o céu começando a clarear mais,  voce olha no relógio são 04:30, falta pouco tempo pra vocês saírem daí, então tá tudo bem, você observa uma maneira de escalar até a parte de cima do hospital atravéz desse buraco e uma pilha de destroços Kaiser: aí gente, caso a gente precise temos uma outra rota de fuga caso algum bixo sedento com ele a correr atrás da gente Rayke: isso não tem graça Kaiser...");
      mudarbutao1("continuar");
      mudarbutao2("continuar");
      break;

    case 10:
      mudartexto("Kaiser rindo um pouco continua olhando o corredor e o grupo escuta. Kaiser: gente... Eu acho que vocês deveriam ver isso... Você desce do teto do hospital e vai em direção ao corredor e vê Kaiser no final dele na frente de uma porta aberta estático, sem fazer movimentos, voce percebe luz como a de uma lâmpada saindo da sala, e quando você olha dentro da porta... Percebe uma sala de cirurgia um tanto quanto estranha, correntes totalmente ensanguentadas e símbolos desenhados nas paredes\nFIM DO CAPÍTULO");
      mudarbutao1("FIM");
      mudarbutao2("FIM");
      mudarImg("https://cdn.discordapp.com/attachments/1172911334875213845/1175440175711654069/Leonardo_Vision_XL_dark_bandoned_operating_room_with_chains_ar_1.jpg?ex=656b3cf8&is=6558c7f8&hm=68def2c8a43d9be553169215f46c7c204fc0660f80c852aa5f411cbb678a38d4&");
      break;
    case 11:
      mudartexto(""+localStorage.getItem("nome")+": ola???, quem é você?? Nesse momento a luz atrás da silhueta pisca por um milésimo de segundo, e quando ela volta a silhueta não está mais ali, em seguida voce sente uma brisa passando por você, oque é estranho por que nessa sala não tem janelas, quando você começa a pensar sobre isso você escuta uma voz. Kaiser: eai "+localStorage.getItem("nome")+" encontrou alguma coisa?")
      mudarbutao1("falar oque viu");
      mudarbutao2("falar que nao viu nada");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606565855253/85_Sem_Titulo_20231208225659.png?ex=65864c8c&is=6573d78c&hm=166f43c7b45933010856b4be643fca2273daa3e8dec8c2ede3aa5d6382f71393&=&format=webp&quality=lossless&width=824&height=412");
      break;
    case 12:
      mudartexto(""+localStorage.getItem("nome")+": eu vi uma silhueta estranha ali, parecia um cara mas quando eu vi já tinha sumido Rayke: vai dizer que era um fantasma??? Kaiser:claro que não né rayke, vamos manter a cabeça no lugar pra podermos ficar aqui o nosso máximo Vitor: mas e vocês gente... Acharam algo?? Kaiser: pior que não Rayke: eu tbm não  Vitor: eu encontrei um jornal bem manchado, tá difícil de ler oque está de baixo da mancha mas se fizer bastante esforço eu acho que dá pra ver, aqui fala assim o hospital sanatório, pelas informações que nós foram fornecidas, teve seu fim após a falência de seu chefe oque acarretou ao abandono, mas será que foi isso mesmo ou tem algo por trás? Kaiser: bom, acho difícil ter sido só isso Rayke: mas nós nao viemos pra ficar dando uma de detetive Kaiser: oque você acha "+localStorage.getItem("nome")+", continuamos investigando ou só esperamos lá fora??")
      mudarbutao1("continuar investigando");
      mudarbutao2("esperar na recepção");
      break;
    case 13:
      mudartexto(""+localStorage.getItem("nome")+" não vi nada Kaiser: é... Eu também não achei nada, esse lugar deve estar bem vazio de documentos e provas ou sla oq depois que fecharam, e vocês dois acharam algo?? Rayke: não achei nada Vitor pior que eu achei, um jornal bem manchado, difícil de ler mais tem umas partes aqui que dá pra ver o hospital sanatório, pelas informações que nós foram fornecidas, teve seu fim após a falência de seu chefe oque acarretou ao abandono, mas será que foi isso mesmo ou tem algo por trás? Aí não dá pra ler por conta da mancha Kaiser: me dá isso aqui, hmmm, se fizer um esforço da pra ver aqui ó alguns rumores dizem que foi fechada por questões de aciden-, Apartir daí não dá pra ver mesmo Rayke: vocês não acham isso estranho?? Vitor: não sei não gente, vamos voltar pra recepção, agora são oque?? 4:30 da manhã, falta pouco tempo pra ganharmos então vamo voltar")
      mudarbutao1("continuar investigando");
      mudarbutao2("esperar na recepção");
      break;
      

  }
}
function butao1(){
 if(escolha == 1){
   escolha = 2;
 }else if(escolha == 2){
   escolha = 3;
 }else if(escolha == 3){
     escolha = 6;
   }else if(escolha == 6){
     escolha = 7;
   }else if(escolha == 4){
     escolha = 5;
   }else if(escolha == 7){
     escolha = 9;
   }else if(escolha == 9){
     escolha = 10;
   }else if(escolha == 8){
   window.location.href = "index.html";
   }else if(escolha == 10){
   window.location.href = "index3.html";
   }else if(escolha == 11){
     escolha = 12;
   }else if(escolha == 5){
     escolha = 2
   }else if(escolha == 0){
     escolha = 1;
   }




  atualizarConteudo();
}
function butao2(){
 if(escolha == 1){
   escolha = 4;
 }else if(escolha == 2){
   escolha = 3;
 }else if(escolha == 4){
     escolha = 5;
   }else if(escolha == 7){
     escolha = 8;
   }else if(escolha == 8){
    window.location.href = "index.html";
   }else if(escolha == 9){
     escolha = 10;
   }else if(escolha == 10){
   window.location.href = "index3.html";
   }else if(escolha == 6){
     escolha = 7;
   }else if(escolha == 3){
     escolha = 11;
   }else if(escolha == 11){
     escolha = 13;
   }else if(escolha == 12){
     escolha = 8;
   }else if(escolha == 13){
     escolha = 8;
   }else if(escolha == 5){
     escolha = 2;
   }else if(escolha == 0){
     escolha = 1;
   }
  
  atualizarConteudo();
}