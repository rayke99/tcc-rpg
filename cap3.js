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
      mudartexto("Rayke: AH JURA??? Kaiser: não grita animal, se o bicho ainda estiver por aqui ele pode escutar a gente Vitor: mas a gente não viu nada do bicho ainda então ele não deve estar pra aqui.. vamos só ficar de boa aqui esperando dar 6 da manhã pra nós ganharmos nosso dinheiro Kaiser: Eu não sei... Oque você acha "+localStorage.getItem("nome")+"
");
        mudarbutao1("ficar");
        mudarbutao2("ir embora");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175432120735379516/DreamShaper_v7_dark_abandoned_hospital_hallway_with_a_scary_si_3.jpg?ex=656b3578&is=6558c078&hm=4160524301c857e21ed0c1378095d3b30e94fc6f64cf83b86ee55111e28d1f25&=&width=936&height=468");
      break;
    
    case 2:
    mudartexto("Vocês começam a andar em silêncio em direção ao lugar de onde vieram o lugar está mais claro por conta que está amanhecendo, mas isso nao é tao bom... Pois quando vocês chegam no corredor que leva direto pra recepção é observado uma silhueta de alguma criatura de mais de 2 metros que vocês não conseguem identificar direito, mas de uma coisa vocês 4 sabem, se vocês não saírem daí agora vocês vão morrer Kaiser: Corr- Quando Kaiser ia terminar de falar a criatura solta um rugido ensurdecedor, vocês começam a correr e chegam em cima, no segundo andar chegando na bifurcação de novo, qual caminho você seguirá ");
      mudarbutao1("esquerda");
      mudarbutao2("direita");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 3:
    mudartexto("vocês vão na direita que é o lado mais claro porém vocês se encontram apenas num beco sem saída, voce. Vai ver aquela porta que estava aberta, e quando olha pra dentro é um depósito pequeno,  não tem saída, e você escuta a criatura chegando rugindo e correndo, nesse depósito você encontra uns materiais e bombas de água você decide pegar essas bombas e jogar na criatura pra tentar distrair ela e incrivelmente funciona , ela fica distraída por uns 15 segundos, tempo suficiente pra todos vocês saírem da sala e pegar o outro lado");
    mudarbutao1("voltar e ir para o lado esquerda");
    mudarbutao2("voltar e ir para o lado esquerda");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 4:
    mudartexto(" Vocês seguiram correndo em direção ao lado esquerdo mas não sabem oque fazer Rayke: COMO A GENTE VAI FUGIR?? A UNICA SAIDA É LA EMBAIXO Kaiser: NAO É NAO... TEM O TETO LEMBRA?? esse momento você lembra de ter subido no telhado, e viu uma pilha de destroços que poderia usar para amortecer a queda mas não totalmente... Vocês vão até lá");
    mudarbutao1("");
    mudarbutao2("");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175485479622291466/99d3a209-5b19-444c-a62b-3df360a7ae8f.jpg?ex=657ddc29&is=656b6729&hm=5304ca0bff2ebf337f940fa65a9a04bdbccc9a5ce7317b445d98c471cb3b0399&=&format=webp&width=478&height=478");
    break;

    case 5:
    mudartexto("");
    mudarbutao1("");
    mudarbutao2("");
    mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606565855253/85_Sem_Titulo_20231208225659.png?ex=65864c8c&is=6573d78c&hm=166f43c7b45933010856b4be643fca2273daa3e8dec8c2ede3aa5d6382f71393&=&format=webp&quality=lossless&width=824&height=412");
    break;

    case 6:
      mudartexto("");
      mudarbutao1("");
      mudarbutao2("");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606909767730/DreamShaper_v7_Destroyed_Black_abandoned_Dark_macabre_scary_ab_0.jpg?ex=65864c8c&is=6573d78c&hm=215af6266670e731043546fef00a9bf9d2379b6bd642f749ab6985389c3c30de&=&format=webp&width=824&height=412");
      break;
      
    case 7:
      mudartexto("");
      mudarbutao1("");
      mudarbutao2("");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606909767730/DreamShaper_v7_Destroyed_Black_abandoned_Dark_macabre_scary_ab_0.jpg?ex=65864c8c&is=6573d78c&hm=215af6266670e731043546fef00a9bf9d2379b6bd642f749ab6985389c3c30de&=&format=webp&width=824&height=412");
      break;
      
    case 8:
      mudartexto("");
      mudarbutao1("");
      mudarbutao2("");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1175482810929262673/ead0101f-7644-426b-84ce-6d5fc8c2863c.jpg?ex=657dd9ad&is=656b64ad&hm=44a5aef5b30cb3310ec7ab75&=&format=webp&width=478&height=478");
      break;
      
    case 9:
      mudartexto("");
      mudarbutao1("");
      mudarbutao2("");
      break;

    case 10:
      mudartexto("");
      mudarbutao1("");
      mudarbutao2("");
      mudarImg("https://cdn.discordapp.com/attachments/1172911334875213845/1175440175711654069/Leonardo_Vision_XL_dark_bandoned_operating_room_with_chains_ar_1.jpg?ex=656b3cf8&is=6558c7f8&hm=68def2c8a43d9be553169215f46c7c204fc0660f80c852aa5f411cbb678a38d4&");
      break;
    case 11:
      mudartexto("")
      mudarbutao1("");
      mudarbutao2("");
      mudarImg("https://media.discordapp.net/attachments/1172911334875213845/1182878606565855253/85_Sem_Titulo_20231208225659.png?ex=65864c8c&is=6573d78c&hm=166f43c7b45933010856b4be643fca2273daa3e8dec8c2ede3aa5d6382f71393&=&format=webp&quality=lossless&width=824&height=412");
      break;
    case 12:
      mudartexto("")
      mudarbutao1("");
      mudarbutao2("");
      break;
    case 13:
      mudartexto("")
      mudarbutao1("");
      mudarbutao2("");
      break;
    case 12:
      

  }
}
function butao1(){
 if(escolha == 0){
   escolha = 2;
 }else if(escolha == 0){
   escolha = 3;
 }else if(escolha == 0){
     escolha = 6;
   }else if(escolha == 0){
     escolha = 7;
   }else if(escolha == 0){
     escolha = 5;
   }else if(escolha == 0){
     escolha = 9;
   }else if(escolha == 0){
     escolha = 10;
   }else if(escolha == 0){
     escolha =1;
   }else if(escolha == 0){
     escolha = 11;
   }else if(escolha == 0){
     escolha = 12;
   }else if(escolha == 0){
     escolha = 1;
   }else if(escolha == 0){
     escolha = 1;
   }




  atualizarConteudo();
}
function butao2(){
 if(escolha == 0){
   escolha = 4;
 }else if(escolha == 0){
   escolha = 3;
 }else if(escolha == 0){
     escolha = 5;
   }else if(escolha == 0){
     escolha = 8;
   }else if(escolha == 0){
     escolha = 1;
   }else if(escolha == 0){
     escolha = 10;
   }else if(escolha == 0){
     escoha = 9;
   }else if(escolha == 0){
     escolha = 7;
   }else if(escolha == 0){
     escolha = 11;
   }else if(escolha == 0){
     escolha = 13;
   }else if(escolha == 0){
     escolha = 8;
   }else if(escolha == 0){
     escolha = 8;
   }else if(escolha == 0){
     escolha = 1;
   }
  atualizarConteudo();
}