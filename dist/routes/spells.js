"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/spells.ts
var spells_exports = {};
__export(spells_exports, {
  SpellsRoute: () => SpellsRoute
});
module.exports = __toCommonJS(spells_exports);

// src/jsons/spells.json
var spells_default = [
  {
    name: "Aben\xE7oar Alimentos",
    execution: "padr\xE3o",
    range: "curto",
    duration: "cena",
    description: "Voc\xEA purifica e aben\xE7oa uma por\xE7\xE3o de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado pr\xF3prio para consumo. Al\xE9m disso, se for consumido at\xE9 o final da dura\xE7\xE3o, o alimento oferece 5 PV tempor\xE1rios ou 1 PM tempor\xE1rio (al\xE9m de quaisquer b\xF4nus que j\xE1 oferecesse). B\xF4nus de alimenta\xE7\xE3o duram um dia e cada personagem s\xF3 pode receber um b\xF4nus de alimenta\xE7\xE3o por dia",
    enhancements: [
      {
        cost: "Truque",
        description: "o alimento \xE9 purificado (n\xE3o causa nenhum efeito nocivo se estava estragado ou envenenado), mas n\xE3o oferece b\xF4nus ao ser consumido."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+1 PM",
        description: "muda a dura\xE7\xE3o para permanente, o alvo para 1 frasco com \xE1gua e adiciona componente material (p\xF3 de prata no valor de T$ 5). Em vez do normal, cria um frasco de \xE1gua benta."
      }
    ]
  },
  {
    name: "Acalmar Animal",
    execution: "a\xE7\xE3o padr\xE3o",
    range: "curto",
    target: "1 animal",
    duration: "cena",
    description: "O animal fica prestativo em rela\xE7\xE3o a voc\xEA. Ele n\xE3o fica sob seu controle, mas percebe suas palavras e a\xE7\xF5es da maneira mais favor\xE1vel poss\xEDvel. Voc\xEA recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resist\xEAncia. Se voc\xEA ou seus aliados tomarem qualquer a\xE7\xE3o hostil contra o alvo, a magia \xE9 dissipada e ele retorna \xE0 atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo ap\xF3s o t\xE9rmino da magia.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 monstro ou esp\xEDrito com Intelig\xEAncia 1 ou 2."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para 1 monstro ou esp\xEDrito. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "A\xE7oite Flamejante",
    execution: "a\xE7\xE3o padr\xE3o",
    range: "Pessoal",
    target: "Voc\xEA",
    duration: "Sustentada",
    description: "Uma l\xEDngua de fogo puro, semelhante a um chicote, surge em sua m\xE3o. Voc\xEA pode usar uma a\xE7\xE3o padr\xE3o para a\xE7oitar uma criatura em alcance curto. Quando faz isso, voc\xEA pode escolher causar 2d6 pontos de dano de fogo ou, se o alvo for M\xE9dio ou menor, agarr\xE1-lo. Passar no teste de resist\xEAncia reduz o dano \xE0 metade ou evita o agarramento, conforme apropriado. Uma criatura agarrada sofre o dano do chicote automaticamente no in\xEDcio de cada um de seus turnos, e pode gastar uma a\xE7\xE3o padr\xE3o para fazer um teste de Atletismo (CD igual a da magia). Se passar, se solta.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 monstro ou esp\xEDrito com Intelig\xEAncia 1 ou 2."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para 1 monstro ou esp\xEDrito. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Adaga Mental",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Vontade parcial",
    description: "Voc\xEA manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano ps\xEDquico e fica atordoado por uma rodada. Se passar no teste de resist\xEAncia, sofre apenas metade do dano e evita a condi\xE7\xE3o. Uma criatura s\xF3 pode ficar atordoada por esta magia uma vez por cena.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "voc\xEA lan\xE7a a magia sem gesticular ou pronunciar palavras (o que permite lan\xE7ar esta magia de armadura) e a adaga se torna invis\xEDvel. Se o alvo falhar no teste de resist\xEAncia, n\xE3o percebe que voc\xEA lan\xE7ou uma magia contra ele."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para um dia. Al\xE9m do normal, voc\xEA \u201Cfinca\u201D a adaga na mente do alvo. Enquanto a magia durar, voc\xEA sabe a dire\xE7\xE3o e localiza\xE7\xE3o do alvo, desde que ele esteja no mesmo mundo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      }
    ]
  },
  {
    name: "Alarme",
    range: "curto",
    area: "esfera de 9m de raio",
    duration: "1 dia",
    description: "Voc\xEA cria uma barreira protetora invis\xEDvel que detecta qualquer criatura que tocar ou entrar na \xE1rea protegida. Ao lan\xE7ar a magia, voc\xEA pode escolher quais criaturas podem entrar na \xE1rea sem ativar seus efeitos. ''Alarme'' pode emitir um aviso telep\xE1tico ou sonoro, decidido quando a magia \xE9 lan\xE7ada. Um aviso telep\xE1tico alerta apenas voc\xEA, inclusive acordando-o se estiver dormindo, mas apenas se estiver a at\xE9 1km da \xE1rea protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para pessoal. A \xE1rea \xE9 emanada a partir de voc\xEA."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, voc\xEA tamb\xE9m percebe qualquer efeito de adivinha\xE7\xE3o que seja usado dentro da \xE1rea ou atravesse a \xE1rea. Voc\xEA pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localiza\xE7\xE3o (\u201Ctr\xEAs dias de viagem ao norte\u201D, por exemplo)."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para 1 dia ou at\xE9 ser descarregada e a resist\xEAncia para Vontade anula. Quando um intruso entra na \xE1rea, voc\xEA pode descarregar a magia como uma rea\xE7\xE3o. Se o intruso falhar na resist\xEAncia, ficar\xE1 paralisado por 1d4 rodadas. Al\xE9m disso, pelas pr\xF3ximas 24 horas voc\xEA e as criaturas escolhidas ganham +10 em testes de Sobreviv\xEAncia para rastrear o intruso."
      }
    ]
  },
  {
    name: "Amedrontar",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 animal ou humanoide",
    duration: "cena",
    resistence: "Vontade parcial",
    description: "O alvo \xE9 envolvido por energias sombrias e assustadoras. Se falhar na resist\xEAncia, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alvo para 1 criatura."
      }
    ]
  },
  {
    name: "\xC1rea Escorregadia",
    execution: "padr\xE3o",
    range: "curto",
    duration: "cena",
    resistence: "Reflexos",
    description: "Esta magia recobre uma superf\xEDcie com uma subst\xE2ncia gordurosa e escorregadia. Criaturas na \xE1rea devem passar na resist\xEAncia para n\xE3o cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela \xE1rea devem fazer testes de Acrobacia para equil\xEDbrio (CD 10).\n\n\n\n''\xC1rea Escorregadia'' pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resist\xEAncia para n\xE3o deixar o item cair cada vez que us\xE1-lo.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a \xE1rea em +1 quadrado de 1,5m."
      },
      {
        cost: "+2 PM",
        description: "muda a CD dos testes de Acrobacia para 15."
      },
      {
        cost: "+5 PM",
        description: "muda a CD dos testes de Acrobacia para 20."
      }
    ]
  },
  {
    name: "Arma Espiritual",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Voc\xEA invoca a arma preferida de sua divindade, que surge flutuando a seu lado. Uma vez por rodada, quando voc\xEA sofre um ataque corpo a corpo, pode usar uma rea\xE7\xE3o para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma \u2014 por exemplo, uma espada longa causa dano de corte \u2014 no oponente que fez o ataque. Esta magia se dissipa se voc\xEA morrer.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, a arma tamb\xE9m protege voc\xEA, oferecendo +1 na Defesa."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+2 PM",
        description: "muda o tipo do dano para ess\xEAncia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "invoca duas armas, permitindo que voc\xEA contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Arma M\xE1gica",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 arma",
    description: "A arma \xE9 considerada m\xE1gica e fornece +1 nos testes de ataque e rolagens de dano (isso conta como um b\xF4nus de encanto). Caso voc\xEA esteja empunhando a arma, pode usar seu atributo-chave em vez do atributo original nos testes de ataque (n\xE3o cumulativo com efeitos que somam este atributo).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus em +1 (b\xF4nus m\xE1ximo limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar)."
      },
      {
        cost: "+2 PM",
        description: "a arma causa +1d6 de dano de \xE1cido, eletricidade, fogo ou frio, escolhido quando a magia \xE9 lan\xE7ada. Este aprimoramento s\xF3 pode ser usado uma vez."
      },
      {
        cost: "+3 PM",
        description: "muda o b\xF4nus de dano do aprimoramento acima para +2d6."
      }
    ]
  },
  {
    name: "Armadura Arcana",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Esta magia cria uma pel\xEDcula protetora invis\xEDvel, mas tang\xEDvel, fornecendo +5 na Defesa. Esse b\xF4nus \xE9 cumulativo com outras magias, mas n\xE3o com b\xF4nus fornecido por armaduras.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o. Em vez do normal, voc\xEA cria um escudo m\xE1gico que fornece +5 na Defesa contra o pr\xF3ximo ataque que sofrer (cumulativo com o b\xF4nus fornecido pelo efeito b\xE1sico desta magia e armaduras)."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      }
    ]
  },
  {
    name: "Armamento da Natureza",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 arma",
    description: "Voc\xEA fortalece uma arma mundana primitiva (sem custo em T$, como bord\xE3o, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela \xE9 considerada m\xE1gica. Ao lan\xE7ar a, voc\xEA pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfura\xE7\xE3o).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "fornece +1 nos testes de ataque com a arma."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o de movimento."
      },
      {
        cost: "+3 PM",
        description: "aumenta o b\xF4nus nos testes de ataque em +1."
      },
      {
        cost: "+5 PM",
        description: "aumenta o dano da arma em mais um passo."
      }
    ]
  },
  {
    name: "Aviso",
    execution: "movimento",
    range: "longo",
    target: "1 criatura",
    duration: "instant\xE2nea",
    description: "Envia um aviso telep\xE1tico para uma criatura, mesmo que n\xE3o possa v\xEA-la nem tenha linha de efeito. Escolha um:\n\n\n\n''Alerta:'' o alvo recebe +5 em seu pr\xF3ximo teste de Iniciativa e de Percep\xE7\xE3o dentro da cena.\n\n\n\n''Mensagem:'' o alvo recebe uma mensagem sua de at\xE9 25 palavras. Voc\xEAs devem ter um idioma em comum para o alvo poder entend\xEA-lo.\n\n\n\n''Localiza\xE7\xE3o:'' o alvo sabe onde voc\xEA est\xE1 naquele momento. Se voc\xEA mudar de posi\xE7\xE3o, ele n\xE3o saber\xE1.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      },
      {
        cost: "+1 PM",
        description: "se escolher mensagem, o alvo pode enviar uma resposta de at\xE9 25 palavras para voc\xEA at\xE9 o fim de seu pr\xF3ximo turno."
      }
    ]
  },
  {
    name: "B\xEAn\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "criaturas escolhidas",
    duration: "cena",
    description: "Aben\xE7oa os alvos, que recebem +1 em testes de ataque e rolagens de dano. ''B\xEAn\xE7\xE3o'' anula ''Perdi\xE7\xE3o''.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 cad\xE1ver e a dura\xE7\xE3o para 1 semana. O cad\xE1ver n\xE3o se decomp\xF5e nem pode ser transformado em morto-vivo pela dura\xE7\xE3o da magia."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus em +1, limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar."
      }
    ]
  },
  {
    name: "Caminhos da Natureza",
    execution: "padr\xE3o",
    range: "curto",
    area: "criaturas escolhidas",
    duration: "1 dia",
    description: "Voc\xEA invoca esp\xEDritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno dif\xEDcil se estiverem em terrenos naturais.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Em vez do normal, voc\xEA sabe onde fica o norte, e recebe +5 em testes de Sobreviv\xEAncia para orientar-se."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, a CD para rastrear os alvos em terreno natural aumenta em +10."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus de deslocamento em +3m."
      }
    ]
  },
  {
    name: "Comando",
    execution: "padr\xE3o",
    target: "1 humanoide",
    resistence: "Vontade anula",
    description: "Voc\xEA d\xE1 uma ordem irresist\xEDvel, que o alvo deve ser capaz de ouvir (mas n\xE3o precisa entender). Se falhar na resist\xEAncia, ele deve obedecer ao comando em seu pr\xF3prio turno da melhor maneira poss\xEDvel. Escolha um dos efeitos.\n\n\n\n''Fuja'': o alvo gasta seu turno se afastando de voc\xEA (usando todas as suas a\xE7\xF5es).\n\n\n\n''Largue'': o alvo solta quaisquer itens que esteja segurando e n\xE3o pode peg\xE1-los novamente at\xE9 o in\xEDcio de seu pr\xF3ximo turno. Como esta \xE9 uma a\xE7\xE3o livre, ele ainda pode executar outras a\xE7\xF5es (exceto pegar aquilo que largou).\n\n\n\n''Pare'': o alvo fica pasmo (apenas uma vez por cena).\n\n\n\n''Senta'': com uma a\xE7\xE3o livre, o alvo senta no ch\xE3o (se estava pendurado ou voando, desce at\xE9 o ch\xE3o). Ele pode fazer outras a\xE7\xF5es, mas n\xE3o se levantar at\xE9 o in\xEDcio de seu pr\xF3ximo turno.\n\n\n\n''Venha'': o alvo gasta seu turno se aproximando de voc\xEA (usando todas as suas a\xE7\xF5es).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 criatura."
      },
      {
        cost: "+2 PM",
        description: "aumenta a quantidade de alvos em +1."
      }
    ]
  },
  {
    name: "Compreens\xE3o",
    execution: "padr\xE3o",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Essa magia lhe confere compreens\xE3o sobrenatural. Voc\xEA pode tocar um texto e entender as palavras mesmo que n\xE3o conhe\xE7a o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que n\xE3o tenham um idioma em comum. Se tocar uma criatura n\xE3o inteligente, como um animal, pode perceber seus sentimentos.\n\n\n\nVoc\xEA tamb\xE9m pode gastar uma a\xE7\xE3o de movimento para ouvir os pensamentos de uma criatura tocada (voc\xEA \u201Couve\u201D o que o alvo est\xE1 pensando), mas um alvo involunt\xE1rio tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Voc\xEA pode entender todas as criaturas afetadas, mas s\xF3 pode ouvir os pensamentos de uma por vez."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Em vez do normal, voc\xEA pode falar, entender e escrever qualquer idioma. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Concentra\xE7\xE3o de Combate",
    execution: "livre",
    target: "voc\xEA",
    duration: "1 rodada",
    description: "Voc\xEA amplia sua percep\xE7\xE3o, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, voc\xEA rola dois dados e usa o melhor resultado.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, ao atacar voc\xEA, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3\xB0 c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para padr\xE3o, o alcance para curto, o alvo para criaturas escolhidas e a dura\xE7\xE3o para cena. Requer 4\xB0 c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "muda a execu\xE7\xE3o para padr\xE3o e a dura\xE7\xE3o para 1 dia. Al\xE9m do normal, voc\xEA recebe um sexto sentido que o avisa de qualquer perigo ou amea\xE7a. Voc\xEA fica imune \xE0s condi\xE7\xF5es surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Conjurar Monstro",
    execution: "completa",
    range: "curto",
    effect: "1 criatura conjurada",
    duration: "sustentada",
    description: "Esta magia conjura um monstro Pequeno que ataca seus inimigos. Voc\xEA escolhe a apar\xEAncia do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfura\xE7\xE3o. No entanto, ele n\xE3o \xE9 uma criatura real, e sim um construto feito de energia. Se for destru\xEDdo, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para tr\xE1s. Voc\xEA s\xF3 pode ter um monstro conjurado por esta magia por vez.\n\n\n\nO monstro surge em um ponto escolhido por voc\xEA dentro do alcance e pode agir no come\xE7o do seu pr\xF3ximo turno, sempre na sua Iniciativa. O monstro tem deslocamento 9m e pode fazer uma a\xE7\xE3o de movimento por rodada. Voc\xEA pode usar uma a\xE7\xE3o padr\xE3o para dar uma das seguintes ordens a ele.\n\n\n\n''Mover'': o monstro se movimenta o dobro do deslocamento nessa rodada.\n\n\n\n''Atacar'': o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano.\n\n\n\n''Lan\xE7ar Magia'': o monstro pode servir como ponto de origem para uma magia lan\xE7ada por voc\xEA com execu\xE7\xE3o de uma a\xE7\xE3o padr\xE3o ou menor. Ele pode descarregar um ''Toque Chocante'' em um inimigo distante, ou mesmo \u201Ccuspir\u201D uma ''Bola de Fogo''! Voc\xEA gasta PM normalmente para lan\xE7ar a magia.\n\n\n\nOutros usos criativos para monstros conjurados ficam a crit\xE9rio do mestre. O monstro n\xE3o age sem receber uma ordem.\n\n\n\nPara efeitos de jogo, o monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, n\xE3o tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu b\xF4nus para teste de Reflexos. Ele \xE9 imune a efeitos que pedem um teste de Fortitude ou Vontade.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "o monstro ganha deslocamento de escalada ou nata\xE7\xE3o igual ao seu deslocamento terrestre."
      },
      {
        cost: "+1 PM",
        description: "muda o tipo de dano do ataque do monstro para \xE1cido, fogo, frio ou eletricidade."
      },
      {
        cost: "+2 PM",
        description: "aumenta o tamanho do monstro para M\xE9dio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m, e seu ataque causa 2d6+4 pontos de dano."
      },
      {
        cost: "+2 PM",
        description: "o monstro ganha resist\xEAncia 5 contra dois tipos de dano (por exemplo, corte e frio)."
      },
      {
        cost: "+4 PM",
        description: "o monstro ganha uma nova ordem: ''Arma de Sopro.'' O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz \xE0 metade)."
      },
      {
        cost: "+5 PM",
        description: "aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m, e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "o monstro ganha deslocamento de voo igual ao dobro do deslocamento."
      },
      {
        cost: "+9 PM",
        description: "o monstro ganha imunidade contra dois tipos de dano."
      },
      {
        cost: "+9 PM",
        description: "aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m, e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Consagrar",
    execution: "padr\xE3o",
    range: "longo",
    area: "esfera com 9m de raio",
    duration: "1 dia",
    resistence: "Reflexos anula",
    description: "Esta magia s\xF3 pode ser lan\xE7ada em uma \xE1rea com vegeta\xE7\xE3o. As plantas se enroscam nas criaturas da \xE1rea. Aquelas que falharem na resist\xEAncia ficam enredadas. Uma v\xEDtima pode se libertar com uma a\xE7\xE3o padr\xE3o e um teste de Acrobacia ou Atletismo. Al\xE9m disso, a \xE1rea \xE9 considerada terreno dif\xEDcil. No in\xEDcio de seus turnos, a vegeta\xE7\xE3o tenta enredar novamente qualquer criatura na \xE1rea, exigindo um novo teste de Reflexos.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, mortos-vivos na \xE1rea sofrem \u20132 em testes e Defesa."
      },
      {
        cost: "Truque",
        description: "muda a \xE1rea para alvo de 1 planta e a resist\xEAncia para nenhuma. Em vez do normal, voc\xEA pode fazer a planta se mover como se fosse animada. Ela n\xE3o pode causar dano ou atrapalhar a concentra\xE7\xE3o de um conjurador."
      },
      {
        cost: "+1 PM",
        description: "muda a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, as plantas na \xE1rea diminuem, como se tivessem sido podadas. Terreno dif\xEDcil muda para terreno normal e\xA0n\xE3o oferece camuflagem. Esse efeito anula o uso normal de ''Controlar Plantas''."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, criaturas que falhem na resist\xEAncia tamb\xE9m ficam im\xF3veis."
      }
    ]
  },
  {
    name: "Criar Elementos",
    execution: "padr\xE3o",
    range: "curto",
    effect: "elemento escolhido",
    duration: "instant\xE2nea",
    description: "Voc\xEA cria uma pequena por\xE7\xE3o de um elemento, a sua escolha. Os elementos criados s\xE3o reais, n\xE3o m\xE1gicos. Elementos f\xEDsicos devem surgir em uma superf\xEDcie. Em vez de um cubo, pode-se criar objetos simples (sem partes m\xF3veis) feitos de gelo, terra ou pedra.\n\n\n\n''\xC1gua'': enche um recipiente de tamanho Min\xFAsculo (como um odre) com \xE1gua pot\xE1vel ou cria um cubo de gelo de tamanho Min\xFAsculo.\n\n\n\n''Ar'': cria um vento fraco em um quadrado de 1,5m. Isso purifica a \xE1rea de qualquer g\xE1s ou fuma\xE7a, ou remove n\xE9voa por uma rodada.\n\n\n\n''Fogo'': cria uma chama que ilumina como uma tocha. Voc\xEA pode segur\xE1-la na palma de sua m\xE3o sem se queimar, ou faz\xEA-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.\n\n\n\n''Terra'': cria um cubo de tamanho Min\xFAsculo feito de terra, argila ou pedra.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a quantidade do elemento em um passo (uma categoria de tamanho para \xE1gua ou terra, +1 quadrado de 1,5m para ar e fogo)."
      },
      {
        cost: "+1 PM",
        description: "muda o efeito para alvo 1 criatura ou objeto e a resist\xEAncia para Reflexos reduz \xE0 metade. Se escolher \xE1gua ou terra, voc\xEA arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Min\xFAsculo, o dano aumenta em um passo. O cubo se desfaz em seguida."
      },
      {
        cost: "+2 PM",
        description: "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
      }
    ]
  },
  {
    name: "Criar Ilus\xE3o",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "ilus\xE3o que se estende a at\xE9 4 cubos de 1",
    duration: "cena",
    resistence: "Vontade desacredita",
    description: "Esta magia cria uma ilus\xE3o visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. N\xE3o \xE9 poss\xEDvel criar cheiros, texturas ou temperaturas, nem sons complexos, como uma m\xFAsica ou di\xE1logo. Criaturas e objetos atravessam uma ilus\xE3o sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia \xE9 dissipada se voc\xEA sair do alcance.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "tamb\xE9m pode criar ilus\xF5es de imagem e sons combinados."
      },
      {
        cost: "+1 PM",
        description: "tamb\xE9m pode criar sons complexos com volume m\xE1ximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma a\xE7\xE3o livre, voc\xEA pode alterar o volume do som ou faz\xEA-lo se aproximar ou se afastar dentro do alcance."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m pode criar sensa\xE7\xF5es t\xE1teis, como texturas; objetos ainda atravessam a ilus\xE3o, mas criaturas n\xE3o conseguem atravess\xE1-la sem passar em um teste de Vontade. A ilus\xE3o continua sem causar ou sofrer dano. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, voc\xEA cria um som muito alto, equivalente a uma multid\xE3o. Criaturas na \xE1rea lan\xE7am magias como se estivessem em uma condi\xE7\xE3o ruim e a CD de testes de Percep\xE7\xE3o para ouvir aumenta em +10. Requer 2\xBA c\xEDrculo"
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, voc\xEA pode gastar uma a\xE7\xE3o livre para modificar livremente a ilus\xE3o (mas n\xE3o pode acrescentar novos aprimoramentos ap\xF3s lan\xE7\xE1-la). Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Curar Ferimentos",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    description: "Voc\xEA canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada. ''Curar Ferimentos'' anula ''Infligir Ferimentos.''",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a cura em +1d8+1."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m remove uma condi\xE7\xE3o de fadiga do alvo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para curto."
      }
    ]
  },
  {
    name: "Despeda\xE7ar",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura ou objeto mundano Pequeno",
    duration: "instant\xE2nea",
    resistence: "Fortitude parcial ou Reflexos anula",
    description: "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano \xE0 metade e evita o atordoamento.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alvo para objeto mundano M\xE9dio. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para objeto mundano Grande. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o alvo para objeto mundano Enorme. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "muda o alvo para objeto mundano Colossal. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Detectar Amea\xE7as",
    execution: "padr\xE3o",
    range: "pessoal",
    duration: "cena",
    description: "Voc\xEA recebe uma intui\xE7\xE3o agu\xE7ada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na \xE1rea do efeito, voc\xEA faz um teste de Percep\xE7\xE3o (CD determinada pelo mestre de acordo com a situa\xE7\xE3o). Se passar, sabe a origem (criatura ou armadilha), dire\xE7\xE3o e dist\xE2ncia do perigo. Se falhar, sabe apenas que o perigo existe.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, voc\xEA n\xE3o fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resist\xEAncia contra armadilhas. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Detona\xE7\xE3o Congelante",
    execution: "padr\xE3o",
    range: "pessoal",
    duration: "instant\xE2nea",
    resistence: "Fortitude Parcial",
    description: "Voc\xEA emite uma onda de frio extremo que cobre a \xE1rea de gelo. Criaturas na \xE1rea sofrem 2d6 pontos de dano de frio e ficam enredadas e im\xF3veis por 1d4 rodadas. Passar no teste de resist\xEAncia reduz o dano pela metade e deixa a criatura enredada por uma rodada. Uma criatura voadora que fica im\xF3vel come\xE7a a cair no in\xEDcio do seu turno.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Ao inv\xE9s do normal, voc\xEA emite uma aura de frio constante em alcance curto. Uma criatura que entre na \xE1rea ou inicie seu turno dentro dela sofre 2d6 pontos de dano de frio e fica enredada e im\xF3vel por uma rodada. Passar no teste de resist\xEAncia reduz o dano pela metade, evita a condi\xE7\xE3o im\xF3vel e faz com que a criatura n\xE3o possa mais ficar im\xF3vel por esta magia nesta cena. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Disfarce Ilus\xF3rio",
    duration: "cena",
    resistence: "Vontade desacredita",
    description: "Voc\xEA muda a apar\xEAncia do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Engana\xE7\xE3o para disfarce. O alvo n\xE3o recebe novas habilidades (voc\xEA pode ficar parecido com outra ra\xE7a, mas n\xE3o ganhar\xE1 as habilidades dela), nem modifica o equipamento (uma espada longa disfar\xE7ada de bord\xE3o continua funcionando e causando dano como uma espada).",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para toque, o alvo para 1 criatura e a dura\xE7\xE3o para 1 semana. Em vez do normal, voc\xEA faz uma pequena altera\xE7\xE3o na apar\xEAncia do alvo, como deixar o nariz vermelho ou fazer brotar um ger\xE2nio no alto da cabe\xE7a. A mudan\xE7a \xE9 inofensiva, mas persistente \u2014 se a flor for arrancada, por exemplo, outra nascer\xE1 no local."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para curto e o alvo para 1 objeto. Voc\xEA pode, por exemplo, transformar peda\xE7os de ferro em moedas de ouro. Voc\xEA recebe +10 em testes de Engana\xE7\xE3o para falsifica\xE7\xE3o."
      },
      {
        cost: "+2 PM",
        description: "a ilus\xE3o tamb\xE9m inclui odores e sensa\xE7\xF5es. Isso muda o b\xF4nus em testes de Engana\xE7\xE3o para disfarce para +20."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma apar\xEAncia diferente. Criaturas involunt\xE1rias podem anular o efeito com um teste de Vontade. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Disparo G\xE9lido",
    execution: "padr\xE3o",
    range: "M\xE9dio",
    duration: "instant\xE2nea",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Voc\xEA dispara um dardo de neve e gelo contra o alvo, que causa 2d8+2 pontos de dano de frio.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a resist\xEAncia para Fortitude parcial. Se passar, a criatura reduz o dano \xE0 metade; se falhar, fica lenta at\xE9 o final da cena."
      }
    ]
  },
  {
    name: "Enfeiti\xE7ar",
    execution: "a\xE7\xE3o padr\xE3o",
    range: "curto",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Esta magia torna o alvo prestativo (veja Diplomacia na p\xE1gina [[Per\xEDcias T20|Per\xEDcias]] ). Ele n\xE3o fica sob seu controle, mas percebe suas palavras e a\xE7\xF5es da maneira mais favor\xE1vel poss\xEDvel. Voc\xEA recebe um b\xF4nus de +10 em testes de Diplomacia com a v\xEDtima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resist\xEAncia. Se voc\xEA ou seus aliados tomarem qualquer a\xE7\xE3o hostil contra o alvo, a magia \xE9 anulada e o alvo retorna \xE0 atitude que tinha antes (ou piorada, de acordo com o mestre).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "em vez do normal, voc\xEA sugere uma a\xE7\xE3o para o alvo e ele obedece. A sugest\xE3o deve ser feita de modo que pare\xE7a aceit\xE1vel, a crit\xE9rio do mestre. Pedir ao alvo que pule em um precip\xEDcio, por exemplo, anula a magia. J\xE1 sugerir a um guarda que descanse um pouco, de modo que voc\xEA e seus aliados passem por ele, \xE9 aceit\xE1vel. Quando o alvo executa a a\xE7\xE3o, a magia termina. Voc\xEA pode determinar uma condi\xE7\xE3o espec\xEDfica para a sugest\xE3o: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar."
      },
      {
        cost: "+5 PM",
        description: "afeta todos os alvos dentro do alcance."
      }
    ]
  },
  {
    name: "Escudo da F\xE9",
    range: "curto",
    target: "1 criatura",
    duration: "1 turno",
    description: "Um escudo m\xEDstico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e a dura\xE7\xE3o para cena."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e a dura\xE7\xE3o para cena. A magia cria uma conex\xE3o m\xEDstica entre voc\xEA e o alvo. Al\xE9m do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano \xE9 transferida a voc\xEA. Se a qualquer momento o alvo sair de alcance curto de voc\xEA, a magia \xE9 dissipada. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Escurid\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 objeto",
    duration: "cena",
    description: "O alvo emana sombras em uma \xE1rea com 6m de raio. Criaturas dentro da \xE1rea recebem camuflagem por escurid\xE3o. As sombras n\xE3o podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escurid\xE3o, que voltar\xE1 a funcionar caso o objeto seja revelado. Se lan\xE7ar a magia num objeto de uma criatura involunt\xE1ria, ela tem direito a um teste de Vontade para anul\xE1-la. ''Escurid\xE3o'' anula ''Luz''.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a \xE1rea da escurid\xE3o em +1,5m de raio."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para 1 criatura e a resist\xEAncia para Fortitude parcial. Voc\xEA lan\xE7a a magia nos olhos do alvo, que fica cego pela cena. Se passar na resist\xEAncia, fica cego por uma rodada. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Explos\xE3o de Chamas",
    range: "6m",
    area: "cone",
    duration: "instant\xE2nea",
    execution: "padr\xE3o",
    resistence: "Reflexos reduz \xE0 metade",
    description: "Um leque de chamas irrompe de suas m\xE3os, causando 2d6 pontos de dano de fogo \xE0s criaturas na \xE1rea.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para curto, a \xE1rea para alvo de 1 objeto e a resist\xEAncia para Reflexos anula. Voc\xEA gera uma pequena explos\xE3o que n\xE3o causa dano mas pode acender uma vela, tocha ou fogueira. Tamb\xE9m pode fazer um objeto inflam\xE1vel com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resist\xEAncia."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+2 PM",
        description: "Al\xE9m do normal, o solo continua borbulhando em \xE1cido venenoso at\xE9 o final da cena, tornando-se terreno dif\xEDcil. Qualquer criatura que entre na \xE1rea ou comece o turno dentro dela sofre 2d6 pontos de dano de \xE1cido (sem direito a teste de resist\xEAncia)."
      }
    ]
  },
  {
    name: "Hipnotismo",
    range: "curto",
    target: "criaturas escolhidas de ND 2 ou menor",
    duration: "1d4 rodadas",
    resistence: "Vontade anula",
    description: "Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condi\xE7\xF5es, na p\xE1gina [[Regras para Combate T20|Regras para Combate]] ). Esta magia s\xF3 afeta criaturas que possam perceber voc\xEA. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resist\xEAncia.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alvo para 1 criatura e a dura\xE7\xE3o para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura s\xF3 pode ser afetada por este truque uma vez por cena."
      },
      {
        cost: "+1 PM",
        description: "em vez do normal, se passarem na resist\xEAncia os alvos n\xE3o saber\xE3o que foram alvos de uma magia."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena."
      },
      {
        cost: "+2 PM",
        description: "afeta alvos de ND 5 ou menor. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "afeta alvos de ND 10 ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "afeta alvos de ND 15 ou menor. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "afeta alvos de qualquer ND. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Imagem Espelhada",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Tr\xEAs c\xF3pias ilus\xF3rias suas aparecem. As duplicatas ficam ao seu redor e imitam suas a\xE7\xF5es, tornando dif\xEDcil para um inimigo saber quem atacar. Voc\xEA recebe +6 na Defesa. Cada vez que um ataque contra voc\xEA erra, uma das imagens desaparece e o b\xF4nus na Defesa diminui em 2. Um oponente deve ver as c\xF3pias para ser confundido. Se voc\xEA estiver invis\xEDvel, ou o atacante fechar os olhos, voc\xEA n\xE3o recebe o b\xF4nus (mas o atacante ainda sofre penalidades normais por n\xE3o enxergar).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de c\xF3pias em +1 (e o b\xF4nus na Defesa em +2)."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, toda vez que uma c\xF3pia \xE9 destru\xEDda, emite um clar\xE3o de luz. A criatura que destruiu a c\xF3pia fica ofuscada por uma rodada. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Infligir Ferimentos",
    range: "toque",
    target: "1 criatura",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Voc\xEA canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). ''Infligir Ferimentos'' anula ''Curar Ferimentos''.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "como parte da execu\xE7\xE3o da magia, voc\xEA pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, se falhar na resist\xEAncia, o alvo fica fraco pela cena."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em 1d8+1."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ]
  },
  {
    name: "Leque Crom\xE1tico",
    execution: "padr\xE3o",
    range: "4",
    area: "cone",
    duration: "instant\xE2nea",
    resistence: "Vontade parcial",
    description: "Um cone de luzes brilhantes surge a partir das suas m\xE3os, deixando as criaturas na \xE1rea atordoadas por 1 rodada e ofuscadas pela cena. Caso passem na resist\xEAncia, n\xE3o ficam atordoadas. Esta magia afeta apenas criaturas de ND 2 ou menor e n\xE3o afeta criaturas cegas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "afeta alvos de ND 5 ou menor. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "afeta alvos de ND 10 ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "afeta alvos de ND 15 ou menor. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "afeta alvos de qualquer ND. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Luz",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 objeto",
    resistence: "Vontade anula",
    description: "O alvo emite luz (mas n\xE3o produz calor) em uma \xE1rea com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltar\xE1 a funcionar caso o objeto seja revelado. Se lan\xE7ar a magia num objeto de uma criatura involunt\xE1ria, ela tem direito a um teste de Vontade para anul\xE1-la. ''Luz'' anula ''Escurid\xE3o''.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a \xE1rea iluminada em +3m de raio."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona componente material (p\xF3 de rubi no valor de T$ 50). Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "N\xE9voa",
    execution: "padr\xE3o",
    range: "curto",
    effect: "nuvem com 6m de raio e 6m de altura",
    duration: "cena",
    description: "Uma n\xE9voa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a vis\xE3o \u2014 criaturas a at\xE9 1,5m t\xEAm camuflagem e criaturas a partir de 3m t\xEAm camuflagem total. Um vento forte dispersa a n\xE9voa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia n\xE3o funciona sob a \xE1gua.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "a magia tamb\xE9m funciona sob a \xE1gua, criando uma nuvem de tinta."
      },
      {
        cost: "+2 PM",
        description: "voc\xEA pode escolher criaturas no alcance ao lan\xE7ar a magia; elas enxergam atrav\xE9s do efeito. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, a nuvem tem um cheiro horr\xEDvel. No in\xEDcio de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, a nuvem tem um tom esverdeado e se torna c\xE1ustica. No in\xEDcio de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de \xE1cido."
      },
      {
        cost: "+3 PM",
        description: "aumenta o dano de \xE1cido em +2d4."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, a nuvem fica espessa, quase s\xF3lida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre \u20132 em testes de ataque e rolagens de dano."
      }
    ]
  },
  {
    name: "Orienta\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "1 rodada",
    description: "Em seu pr\xF3ximo teste de per\xEDcia, o alvo pode rolar dois dados e ficar com o melhor resultado.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de per\xEDcia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. N\xE3o se aplica a testes de ataque ou resist\xEAncia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para criaturas escolhidas. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Perdi\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    area: "criaturas escolhidas",
    duration: "1 dia",
    target: "criaturas escolhidas de ND 2 ou menor",
    resistence: "Vontade anula",
    effect: "1 criatura conjurada",
    description: "Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condi\xE7\xF5es, na p\xE1gina [[Regras para Combate T20|Regras para Combate]] ). Esta magia s\xF3 afeta criaturas que possam perceber voc\xEA. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resist\xEAncia.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 cad\xE1ver e a dura\xE7\xE3o para 1 semana. O cad\xE1ver n\xE3o se decomp\xF5e nem pode ser transformado em morto-vivo pela dura\xE7\xE3o da magia."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus em +1, limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar."
      },
      {
        cost: "Truque",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Em vez do normal, voc\xEA sabe onde fica o norte, e recebe +5 em testes de Sobreviv\xEAncia para orientar-se."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, a CD para rastrear os alvos em terreno natural aumenta em +10."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus de deslocamento em +3m."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 criatura."
      },
      {
        cost: "+2 PM",
        description: "aumenta a quantidade de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Voc\xEA pode entender todas as criaturas afetadas, mas s\xF3 pode ouvir os pensamentos de uma por vez."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Em vez do normal, voc\xEA pode falar, entender e escrever qualquer idioma. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, ao atacar voc\xEA, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3\xB0 c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para padr\xE3o, o alcance para curto, o alvo para criaturas escolhidas e a dura\xE7\xE3o para cena. Requer 4\xB0 c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "muda a execu\xE7\xE3o para padr\xE3o e a dura\xE7\xE3o para 1 dia. Al\xE9m do normal, voc\xEA recebe um sexto sentido que o avisa de qualquer perigo ou amea\xE7a. Voc\xEA fica imune \xE0s condi\xE7\xF5es surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "o monstro ganha deslocamento de escalada ou nata\xE7\xE3o igual ao seu deslocamento terrestre."
      },
      {
        cost: "+1 PM",
        description: "muda o tipo de dano do ataque do monstro para \xE1cido, fogo, frio ou eletricidade."
      },
      {
        cost: "+2 PM",
        description: "aumenta o tamanho do monstro para M\xE9dio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m, e seu ataque causa 2d6+4 pontos de dano."
      },
      {
        cost: "+2 PM",
        description: "o monstro ganha resist\xEAncia 5 contra dois tipos de dano (por exemplo, corte e frio)."
      },
      {
        cost: "+4 PM",
        description: "o monstro ganha uma nova ordem: ''Arma de Sopro.'' O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz \xE0 metade)."
      },
      {
        cost: "+5 PM",
        description: "aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m, e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "o monstro ganha deslocamento de voo igual ao dobro do deslocamento."
      },
      {
        cost: "+9 PM",
        description: "o monstro ganha imunidade contra dois tipos de dano."
      },
      {
        cost: "+9 PM",
        description: "aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m, e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, mortos-vivos na \xE1rea sofrem \u20132 em testes e Defesa."
      },
      {
        cost: "Truque",
        description: "muda a \xE1rea para alvo de 1 planta e a resist\xEAncia para nenhuma. Em vez do normal, voc\xEA pode fazer a planta se mover como se fosse animada. Ela n\xE3o pode causar dano ou atrapalhar a concentra\xE7\xE3o de um conjurador."
      },
      {
        cost: "+1 PM",
        description: "muda a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, as plantas na \xE1rea diminuem, como se tivessem sido podadas. Terreno dif\xEDcil muda para terreno normal e\xA0n\xE3o oferece camuflagem. Esse efeito anula o uso normal de ''Controlar Plantas''."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, criaturas que falhem na resist\xEAncia tamb\xE9m ficam im\xF3veis."
      },
      {
        cost: "+1 PM",
        description: "aumenta a quantidade do elemento em um passo (uma categoria de tamanho para \xE1gua ou terra, +1 quadrado de 1,5m para ar e fogo)."
      },
      {
        cost: "+1 PM",
        description: "muda o efeito para alvo 1 criatura ou objeto e a resist\xEAncia para Reflexos reduz \xE0 metade. Se escolher \xE1gua ou terra, voc\xEA arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Min\xFAsculo, o dano aumenta em um passo. O cubo se desfaz em seguida."
      },
      {
        cost: "+2 PM",
        description: "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
      },
      {
        cost: "+1 PM",
        description: "tamb\xE9m pode criar ilus\xF5es de imagem e sons combinados."
      },
      {
        cost: "+1 PM",
        description: "tamb\xE9m pode criar sons complexos com volume m\xE1ximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma a\xE7\xE3o livre, voc\xEA pode alterar o volume do som ou faz\xEA-lo se aproximar ou se afastar dentro do alcance."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m pode criar sensa\xE7\xF5es t\xE1teis, como texturas; objetos ainda atravessam a ilus\xE3o, mas criaturas n\xE3o conseguem atravess\xE1-la sem passar em um teste de Vontade. A ilus\xE3o continua sem causar ou sofrer dano. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, voc\xEA cria um som muito alto, equivalente a uma multid\xE3o. Criaturas na \xE1rea lan\xE7am magias como se estivessem em uma condi\xE7\xE3o ruim e a CD de testes de Percep\xE7\xE3o para ouvir aumenta em +10. Requer 2\xBA c\xEDrculo"
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, voc\xEA pode gastar uma a\xE7\xE3o livre para modificar livremente a ilus\xE3o (mas n\xE3o pode acrescentar novos aprimoramentos ap\xF3s lan\xE7\xE1-la). Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "aumenta a cura em +1d8+1."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m remove uma condi\xE7\xE3o de fadiga do alvo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para curto."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para objeto mundano M\xE9dio. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para objeto mundano Grande. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o alvo para objeto mundano Enorme. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "muda o alvo para objeto mundano Colossal. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, voc\xEA n\xE3o fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resist\xEAncia contra armadilhas. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Ao inv\xE9s do normal, voc\xEA emite uma aura de frio constante em alcance curto. Uma criatura que entre na \xE1rea ou inicie seu turno dentro dela sofre 2d6 pontos de dano de frio e fica enredada e im\xF3vel por uma rodada. Passar no teste de resist\xEAncia reduz o dano pela metade, evita a condi\xE7\xE3o im\xF3vel e faz com que a criatura n\xE3o possa mais ficar im\xF3vel por esta magia nesta cena. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "Truque",
        description: "muda o alcance para toque, o alvo para 1 criatura e a dura\xE7\xE3o para 1 semana. Em vez do normal, voc\xEA faz uma pequena altera\xE7\xE3o na apar\xEAncia do alvo, como deixar o nariz vermelho ou fazer brotar um ger\xE2nio no alto da cabe\xE7a. A mudan\xE7a \xE9 inofensiva, mas persistente \u2014 se a flor for arrancada, por exemplo, outra nascer\xE1 no local."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para curto e o alvo para 1 objeto. Voc\xEA pode, por exemplo, transformar peda\xE7os de ferro em moedas de ouro. Voc\xEA recebe +10 em testes de Engana\xE7\xE3o para falsifica\xE7\xE3o."
      },
      {
        cost: "+2 PM",
        description: "a ilus\xE3o tamb\xE9m inclui odores e sensa\xE7\xF5es. Isso muda o b\xF4nus em testes de Engana\xE7\xE3o para disfarce para +20."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma apar\xEAncia diferente. Criaturas involunt\xE1rias podem anular o efeito com um teste de Vontade. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "muda a resist\xEAncia para Fortitude parcial. Se passar, a criatura reduz o dano \xE0 metade; se falhar, fica lenta at\xE9 o final da cena."
      },
      {
        cost: "+2 PM",
        description: "em vez do normal, voc\xEA sugere uma a\xE7\xE3o para o alvo e ele obedece. A sugest\xE3o deve ser feita de modo que pare\xE7a aceit\xE1vel, a crit\xE9rio do mestre. Pedir ao alvo que pule em um precip\xEDcio, por exemplo, anula a magia. J\xE1 sugerir a um guarda que descanse um pouco, de modo que voc\xEA e seus aliados passem por ele, \xE9 aceit\xE1vel. Quando o alvo executa a a\xE7\xE3o, a magia termina. Voc\xEA pode determinar uma condi\xE7\xE3o espec\xEDfica para a sugest\xE3o: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar."
      },
      {
        cost: "+5 PM",
        description: "afeta todos os alvos dentro do alcance."
      },
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e a dura\xE7\xE3o para cena."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e a dura\xE7\xE3o para cena. A magia cria uma conex\xE3o m\xEDstica entre voc\xEA e o alvo. Al\xE9m do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano \xE9 transferida a voc\xEA. Se a qualquer momento o alvo sair de alcance curto de voc\xEA, a magia \xE9 dissipada. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "aumenta a \xE1rea da escurid\xE3o em +1,5m de raio."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para 1 criatura e a resist\xEAncia para Fortitude parcial. Voc\xEA lan\xE7a a magia nos olhos do alvo, que fica cego pela cena. Se passar na resist\xEAncia, fica cego por uma rodada. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "Truque",
        description: "muda o alcance para curto, a \xE1rea para alvo de 1 objeto e a resist\xEAncia para Reflexos anula. Voc\xEA gera uma pequena explos\xE3o que n\xE3o causa dano mas pode acender uma vela, tocha ou fogueira. Tamb\xE9m pode fazer um objeto inflam\xE1vel com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resist\xEAncia."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+2 PM",
        description: "Al\xE9m do normal, o solo continua borbulhando em \xE1cido venenoso at\xE9 o final da cena, tornando-se terreno dif\xEDcil. Qualquer criatura que entre na \xE1rea ou comece o turno dentro dela sofre 2d6 pontos de dano de \xE1cido (sem direito a teste de resist\xEAncia)."
      },
      {
        cost: "Truque",
        description: "muda o alvo para 1 criatura e a dura\xE7\xE3o para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura s\xF3 pode ser afetada por este truque uma vez por cena."
      },
      {
        cost: "+1 PM",
        description: "em vez do normal, se passarem na resist\xEAncia os alvos n\xE3o saber\xE3o que foram alvos de uma magia."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena."
      },
      {
        cost: "+2 PM",
        description: "afeta alvos de ND 5 ou menor. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "afeta alvos de ND 10 ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "afeta alvos de ND 15 ou menor. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "afeta alvos de qualquer ND. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de c\xF3pias em +1 (e o b\xF4nus na Defesa em +2)."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, toda vez que uma c\xF3pia \xE9 destru\xEDda, emite um clar\xE3o de luz. A criatura que destruiu a c\xF3pia fica ofuscada por uma rodada. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "como parte da execu\xE7\xE3o da magia, voc\xEA pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, se falhar na resist\xEAncia, o alvo fica fraco pela cena."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em 1d8+1."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        cost: "+2 PM",
        description: "afeta alvos de ND 5 ou menor. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "afeta alvos de ND 10 ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "afeta alvos de ND 15 ou menor. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "afeta alvos de qualquer ND. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "aumenta a \xE1rea iluminada em +3m de raio."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona componente material (p\xF3 de rubi no valor de T$ 50). Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "a magia tamb\xE9m funciona sob a \xE1gua, criando uma nuvem de tinta."
      },
      {
        cost: "+2 PM",
        description: "voc\xEA pode escolher criaturas no alcance ao lan\xE7ar a magia; elas enxergam atrav\xE9s do efeito. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, a nuvem tem um cheiro horr\xEDvel. No in\xEDcio de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, a nuvem tem um tom esverdeado e se torna c\xE1ustica. No in\xEDcio de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de \xE1cido."
      },
      {
        cost: "+3 PM",
        description: "aumenta o dano de \xE1cido em +2d4."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, a nuvem fica espessa, quase s\xF3lida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre \u20132 em testes de ataque e rolagens de dano."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de per\xEDcia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. N\xE3o se aplica a testes de ataque ou resist\xEAncia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para criaturas escolhidas. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta as penalidades em \u20131, limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar"
      }
    ]
  },
  {
    name: "Primor Atl\xE9tico",
    target: "1 criatura",
    duration: "cena",
    description: "Voc\xEA modifica os limites f\xEDsicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, o alvo recebe um b\xF4nus adicional de +20 em testes de Atletismo para saltar (para um b\xF4nus total de +30)."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as m\xE3os livres, mas pode usar uma \xFAnica m\xE3o se ficar parado no lugar. O alvo n\xE3o fica desprevenido enquanto escala."
      },
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o de movimento, o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para instant\xE2nea. Voc\xEA salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benef\xEDcios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque."
      },
      {
        cost: "+3 PM",
        description: "al\xE9m do normal, ao fazer testes de per\xEDcias baseadas em For\xE7a, Destreza ou Constitui\xE7\xE3o, o alvo pode rolar dois dados e escolher o melhor. N\xE3o afeta testes de ataque ou resist\xEAncia. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Profanar",
    execution: "padr\xE3o",
    range: "longo",
    area: "esfera com 9m de raio",
    duration: "1 dia",
    description: "Esta magia enche a \xE1rea com energia negativa. Efeitos que causam dano de trevas ou canalizam energia negativa t\xEAm o dano dobrado dentro da \xE1rea. Esta magia n\xE3o pode ser lan\xE7ada em uma \xE1rea contendo um s\xEDmbolo vis\xEDvel dedicado a uma divindade que n\xE3o a sua. ''Profanar'' anula ''Consagrar''.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, mortos-vivos na \xE1rea recebem +2 na Defesa e +2 em todos os testes."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus para mortos-vivos em +1."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para 1 hora, a dura\xE7\xE3o para permanente e adiciona componente material (incenso e \xF3leos no valor de T$ 1.000). Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Prote\xE7\xE3o Divina",
    execution: "padr\xE3o",
    target: "1 criatura",
    description: "Esta magia cria uma barreira m\xEDstica invis\xEDvel que fornece ao alvo +2 em testes de resist\xEAncia.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus concedido em +1."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o, o alcance para curto e a dura\xE7\xE3o para 1 rodada."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para \xE1rea de c\xEDrculo com 3m de raio. Todos os aliados dentro do c\xEDrculo recebem o b\xF4nus da magia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "tamb\xE9m torna o alvo imune a efeitos de encantamento. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Queda Suave",
    execution: "rea\xE7\xE3o",
    range: "curto",
    target: "1 criatura ou objeto com at\xE9 200kg",
    duration: "at\xE9 chegar ao solo ou cena",
    description: "O alvo cai lentamente. A velocidade da queda \xE9 reduzida para 18m por rodada \u2014 o suficiente para n\xE3o causar dano.\n\n\n\nComo lan\xE7ar esta magia \xE9 uma rea\xE7\xE3o, voc\xEA pode lan\xE7\xE1-la r\xE1pido o bastante para salvar a si ou um aliado de quedas inesperadas.\n\n\n\nLan\xE7ada sobre um proj\xE9til \u2014 como uma flecha ou uma rocha largada do alto de um penhasco \u2014, a magia faz com que ele cause metade do dano normal, devido \xE0 lentid\xE3o.\n\n\n\n''Queda Suave'' s\xF3 funciona em criaturas e objetos em queda livre ou similar; a magia n\xE3o vai frear um golpe de espada ou o mergulho rasante de um atacante voador.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alvo para objeto com at\xE9 5kg. Em vez do normal, voc\xEA pode gastar uma a\xE7\xE3o de movimento para levitar o alvo at\xE9 4,5m em qualquer dire\xE7\xE3o."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para at\xE9 10 criaturas ou objetos."
      }
    ]
  },
  {
    name: "Raio do Enfraquecimento",
    range: "curto",
    target: "1 criatura",
    duration: "cena",
    resistence: "Fortitude parcial",
    description: "Voc\xEA dispara um raio p\xFArpura que drena as for\xE7as do alvo. Se falhar na resist\xEAncia, o alvo fica fatigado. Se passar, fica vulner\xE1vel.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para toque e a resist\xEAncia para Fortitude anula. Em vez do normal, ao tocar o alvo, sua m\xE3o emana um brilho p\xFArpura. O alvo fica fatigado. Note que, como efeitos de magia n\xE3o acumulam, lan\xE7ar este truque duas vezes contra o mesmo alvo n\xE3o ir\xE1 deix\xE1-lo exausto."
      },
      {
        cost: "+2 PM",
        description: "em vez do normal, se falhar na resist\xEAncia o alvo fica exausto. Se passar, fica fatigado. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "em vez do normal, se falhar na resist\xEAncia o alvo fica inconsciente. Se passar, fica exausto. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Resist\xEAncia a Energia",
    execution: "padr\xE3o",
    range: "toque",
    duration: "cena",
    description: "Ao lan\xE7ar esta magia, escolha entre \xE1cido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resist\xEAncia 10 contra a energia escolhida, passando a ignorar os 10 primeiros pontos de dano de cada ataque feito com essa energia.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta a resist\xEAncia em +5."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Santu\xE1rio",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Qualquer criatura que tente fazer uma a\xE7\xE3o hostil contra o alvo deve fazer um teste de Vontade. Se falhar, n\xE3o consegue, perde a a\xE7\xE3o e n\xE3o pode tentar novamente at\xE9 o fim da cena. ''Santu\xE1rio'' n\xE3o protege o alvo de efeitos de \xE1rea. Al\xE9m disso, o pr\xF3prio alvo tamb\xE9m n\xE3o pode fazer a\xE7\xF5es hostis, ou a magia \xE9 dissipada \u2014 mas pode usar outras habilidades e magias de cura e suporte (como ''Curar Ferimentos'', ''B\xEAn\xE7\xE3o'' e assim por diante).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Voc\xEA n\xE3o pode ser percebido por criaturas do tipo escolhido, n\xE3o importando o sentido usado."
      },
      {
        cost: "+9 PM",
        description: "tamb\xE9m protege o alvo contra efeitos de \xE1rea. Uma criatura que tente atacar uma \xE1rea que inclua o alvo deve fazer o teste de Vontade; se falhar, n\xE3o consegue e perde a a\xE7\xE3o. Ela s\xF3 pode tentar novamente se o alvo sair da \xE1rea."
      }
    ]
  },
  {
    name: "Seta Infal\xEDvel de Talude",
    execution: "padr\xE3o",
    target: "at\xE9 2 criaturas",
    duration: "instant\xE2nea",
    description: "Favorita entre arcanistas iniciantes, esta magia lan\xE7a duas setas de energia que causando 1d4+1 pontos de dano de ess\xEAncia cada. Voc\xEA pode lan\xE7ar as setas em alvos diferentes ou concentr\xE1-las num mesmo alvo. Caso voc\xEA possua um b\xF4nus no dano de magias, como pelo poder Arcano de Batalha, ele \xE9 aplicado em apenas uma seta (o b\xF4nus vale para a magia, n\xE3o cada alvo).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda as setas para lan\xE7as de energia que surgem e caem do c\xE9u. Cada lan\xE7a causa 1d8+1 pontos de dano de ess\xEAncia. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda o n\xFAmero de setas/lan\xE7as para tr\xEAs."
      },
      {
        cost: "+4 PM",
        description: "muda o n\xFAmero de setas/lan\xE7as para cinco. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o n\xFAmero de setas/lan\xE7as para dez. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Sil\xEAncio",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "esfera com 6m de raio",
    duration: "sustentada",
    description: "Um sil\xEAncio sepulcral recai sobre a \xE1rea e nenhum som \xE9 produzido ali. Enquanto estiverem na \xE1rea, todas as criaturas ficam surdas. Al\xE9m disso, como lan\xE7ar magias exige palavras m\xE1gicas, normalmente nenhuma magia pode ser lan\xE7ada dentro da \xE1rea.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a \xE1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \xE1rea de sil\xEAncio com 3m de raio. Se lan\xE7ar a magia num objeto de uma criatura involunt\xE1ria, ela tem direito a um teste de Vontade para anul\xE1-la."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena. Em vez do normal, nenhum som pode deixar a \xE1rea, mas criaturas dentro da \xE1rea podem falar, ouvir e lan\xE7ar magias com palavras m\xE1gicas normalmente."
      }
    ]
  },
  {
    name: "Sono",
    range: "curto",
    target: "1 criatura de ND 2 ou menor",
    duration: "cena",
    resistence: "Vontade parcial",
    description: "Um sono m\xEDstico recai sobre o alvo. Se passar na resist\xEAncia, fica fatigado por uma rodada. Se falhar, fica inconsciente e ca\xEDdo.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alvo para \xE1rea de quadrado com 3m de lado. Todas as criaturas na \xE1rea dentro do limite de ND s\xE3o afetadas."
      },
      {
        cost: "+2 PM",
        description: "afeta alvos de ND 5 ou menor. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "afeta alvos de ND 10 ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+14 PM",
        description: "afeta alvos de qualquer ND. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Suporte Ambiental",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "1 dia",
    description: "Esta magia garante a sobreviv\xEAncia em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na \xE1gua, se respirar ar (ou vice versa) e n\xE3o sufoca em fuma\xE7a densa.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ]
  },
  {
    name: "Teia",
    execution: "padr\xE3o",
    range: "curto",
    area: "cubo com 6m de lado",
    duration: "cena",
    resistence: "Reflexos anula",
    description: "''Teia'' cria v\xE1rias camadas de fibras entrela\xE7adas e pegajosas na \xE1rea. Qualquer criatura na \xE1rea que falhar na resist\xEAncia fica enredada. Uma v\xEDtima pode se libertar com uma a\xE7\xE3o padr\xE3o e um teste de Acrobacia ou Atletismo. A \xE1rea ocupada por ''Teia'' \xE9 terreno dif\xEDcil. A ''Teia'' \xE9 inflam\xE1vel. Qualquer ataque que cause dano de fogo destr\xF3i as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas (veja Condi\xE7\xF5es, na p\xE1gina [[Combate T20|Combate]]).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, criaturas que falhem na resist\xEAncia tamb\xE9m ficam im\xF3veis."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, no in\xEDcio de seus turnos a magia afeta novamente qualquer criatura na \xE1rea, exigindo um novo teste de Reflexos. Requer 2\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta a \xE1rea em +1 cubo de 1,5m."
      }
    ]
  },
  {
    name: "Toque Chocante",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Arcos el\xE9tricos envolvem sua m\xE3o, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a crit\xE9rio do mestre), sofre uma penalidade de \u20135 no teste de resist\xEAncia.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano em 1d8+1."
      },
      {
        cost: "+2 PM",
        description: "como parte da execu\xE7\xE3o da magia, voc\xEA pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para pessoal e o alvo para \xE1rea de explos\xE3o com 6m de raio. Voc\xEA dispara raios pelas pontas dos dedos que afetam todas as criaturas na \xE1rea."
      }
    ]
  },
  {
    name: "Tranca Arcana",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 objeto Grande ou menor",
    duration: "permanente",
    description: "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um ba\xFA, caixa etc.), aumentando a CD de testes de For\xE7a ou Ladinagem para abri-lo em +10. Voc\xEA pode abrir livremente sua pr\xF3pria tranca sem problemas.\n\n\n\n''Componente material:'' chave de bronze no valor de T$ 25.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho M\xE9dio ou menor, como uma porta ou ba\xFA. N\xE3o afeta objetos trancados."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para curto e a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, a magia abre portas, ba\xFAs e janelas trancadas, presas, barradas ou protegidas por outra ''Tranca Arcana'' (neste caso, o efeito \xE9 dissipado). Ela tamb\xE9m afrouxa grilh\xF5es e solta correntes."
      },
      {
        cost: "+5 PM",
        description: "aumenta a CD para abrir o alvo em +5."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para 1 objeto de qualquer tamanho, podendo afetar at\xE9 mesmo os port\xF5es de um castelo. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Tranquilidade",
    execution: "a\xE7\xE3o padr\xE3o",
    range: "curto",
    target: "1 animal ou humanoide",
    resistence: "Vontade parcial",
    description: "Voc\xEA emana ondas de serenidade. Se falhar na resist\xEAncia, o alvo tem sua atitude mudada para indiferente (veja Diplomacia na p\xE1gina\xA0[[Per\xEDcias T20|Per\xEDcias]] ) e n\xE3o pode atacar ou realizar qualquer tipo de a\xE7\xE3o agressiva. Se passar, recebe \u20132 em testes de ataque. Qualquer a\xE7\xE3o hostil contra o alvo anula a magia, e ele retorna \xE0 atitude que tinha antes (ou piorada, de acordo com o mestre).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 criatura."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "aumenta a penalidade em \u20131."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para m\xE9dio e o alvo para criaturas escolhidas. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Transmutar Objetos",
    execution: "padr\xE3o",
    range: "toque",
    target: "mat\xE9ria",
    duration: "cena",
    description: "A magia transforma mat\xE9ria bruta para moldar um novo objeto. Voc\xEA pode usar mat\xE9ria-prima mundana para criar um objeto de tamanho Pequeno ou menor e pre\xE7o m\xE1ximo de T$ 25, como um balde ou uma espada. O objeto reverte \xE0 mat\xE9ria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia n\xE3o pode ser usada para criar objetos consum\xEDveis, como alimentos, itens alqu\xEDmicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. ''Transmutar Objetos'' anula ''Despeda\xE7ar''.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alvo para 1 objeto mundano e a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, voc\xEA pode alterar as propriedades f\xEDsicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo pe\xE7as de roupa), aquecer, esfriar e/ou temperar (mas n\xE3o produzir) at\xE9 0,5kg de material inanimado (incluindo comida), ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cer\xE2mica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto s\xF3 pode ser afetado por este truque uma vez por dia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o limite de tamanho do objeto em uma categoria."
      },
      {
        cost: "+1 PM",
        description: "aumenta o pre\xE7o m\xE1ximo do objeto criado em + T$ 25."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para toque, o alvo para 1 construto e a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, cura 2d8 PV do alvo. Voc\xEA pode gastar 2 PM adicionais para aumentar a cura em +1d8."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para 1 objeto mundano e a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, voc\xEA cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento est\xE1 sujeito aos limites de tamanho e pre\xE7o do objeto conforme a magia original e n\xE3o funciona se o objeto tiver sido completamente destru\xEDdo (queimado at\xE9 virar cinzas ou desintegrado, por exemplo). Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "como o aprimoramento anterior, mas passa a afetar itens m\xE1gicos"
      }
    ]
  },
  {
    name: "Vis\xE3o M\xEDstica",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Seus olhos brilham com uma luz azul e passam a enxergar auras m\xE1gicas. Este efeito \xE9 similar ao uso de Misticismo para detectar magia, mas voc\xEA detecta todas as auras m\xE1gicas em alcance m\xE9dio e recebe todas as informa\xE7\xF5es sobre elas sem gastar a\xE7\xF5es. Al\xE9m disso, voc\xEA pode gastar uma a\xE7\xE3o de movimento para descobrir se uma criatura que possa perceber em alcance m\xE9dio \xE9 capaz de lan\xE7ar magias e qual a aura gerada pelas magias de c\xEDrculo mais alto que ela pode lan\xE7ar.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "recebe vis\xE3o no escuro."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m pode enxergar objetos e criaturas invis\xEDveis. Eles aparecem como formas transl\xFAcidas."
      }
    ]
  },
  {
    name: "Vitalidade Fantasma",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "instant\xE2nea",
    description: "Voc\xEA suga energia vital da terra, recebendo 2d8 pontos de vida tempor\xE1rios. Os PV tempor\xE1rios desaparecem ao final da cena.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta os PV tempor\xE1rios recebidos em +1d8."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para \xE1rea: esfera com 6m de raio centrada em voc\xEA e a resist\xEAncia para Fortitude reduz \xE0 metade. Em vez do normal, voc\xEA suga energia das criaturas vivas na \xE1rea, causando 1d8 pontos de dano de trevas e recebendo PV tempor\xE1rios iguais ao dano total causado. Os PV tempor\xE1rios desaparecem ao final da cena. Requer 2\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Aliado Animal",
    execution: "padr\xE3o",
    target: "1 animal prestativo",
    duration: "1 dia",
    description: "Voc\xEA cria um v\xEDnculo mental com um animal prestativo em rela\xE7\xE3o a voc\xEA. O ''Aliado Animal'' obedece a voc\xEA ao melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um aliado veterano, de um tipo a sua escolha entre ajudante, combatente, fort\xE3o, guardi\xE3o, montaria ou perseguidor.",
    enhancements: []
  },
  {
    name: "Alterar Tamanho",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 objeto",
    duration: "1 dia",
    description: "Esta magia aumenta ou diminui o tamanho de um item mundano em at\xE9 tr\xEAs categorias (um objeto Enorme vira Pequeno, por exemplo). Voc\xEA tamb\xE9m pode mudar a consist\xEAncia do item, deixando-o r\xEDgido como pedra ou flex\xEDvel como seda (isso n\xE3o altera sua RD ou PV, apenas suas propriedades f\xEDsicas).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento aumentam de tamanho em uma categoria. O alvo tamb\xE9m recebe For\xE7a +4. Um alvo involunt\xE1rio pode fazer um teste de Fortitude para negar o efeito."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento diminuem de tamanho em uma categoria. O alvo tamb\xE9m recebe Destreza +4. Um alvo involunt\xE1rio pode fazer um teste de Fortitude para negar o efeito. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Amarras Et\xE9reas",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura",
    description: "Tr\xEAs la\xE7os de energia surgem do ch\xE3o e se enroscam no alvo, deixando-o agarrado. A v\xEDtima pode tentar se livrar, gastando uma a\xE7\xE3o padr\xE3o para fazer um teste de Atletismo (CD igual \xE0 da magia). Se passar, destr\xF3i um la\xE7o, mais um la\xE7o adicional para cada 2 pontos pelos quais superou a CD. Os la\xE7os tamb\xE9m podem ser atacados e destru\xEDdos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano m\xE1gico. Se todos os la\xE7os forem destru\xEDdos, a magia \xE9 dissipada. Por serem feitos de energia, os la\xE7os afetam criaturas incorp\xF3reas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de cordas em um alvo a sua escolha em +1."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cada la\xE7o \xE9 destru\xEDdo automaticamente com um \xFAnico ataque bem-sucedido; por\xE9m, cada la\xE7o destru\xEDdo libera um choque de energia que causa 1d6+1 pontos de dano de ess\xEAncia na criatura amarrada. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Apar\xEAncia Perfeita",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Esta magia lhe concede um rosto idealizado, porte f\xEDsico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confi\xE1vel. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um b\xF4nus de +4, caso seja 20 ou maior) e voc\xEA recebe +5 nos testes de Diplomacia e Engana\xE7\xE3o. Quando a magia acaba, quaisquer observadores percebem a mudan\xE7a e tendem a suspeitar de voc\xEA. Da mesma maneira, pessoas que o viram sob o efeito da magia sentir\xE3o que \u201Calgo est\xE1 errado\u201D ao v\xEA-lo em condi\xE7\xF5es normais. Quando a cena acabar, voc\xEA pode gastar os PM da magia novamente como uma a\xE7\xE3o livre para mant\xEA-la ativa. Este efeito n\xE3o fornece PV ou PM adicionais.",
    enhancements: []
  },
  {
    name: "Aug\xFArio",
    execution: "completa",
    range: "pessoal",
    target: "voc\xEA",
    duration: "instant\xE2nea",
    description: "Esta magia diz se uma a\xE7\xE3o que voc\xEA tomar\xE1 em breve \u2014 no m\xE1ximo uma hora no futuro \u2014 trar\xE1 resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e voc\xEA recebe uma das seguintes respostas: \u201Cfelicidade\u201D (a a\xE7\xE3o trar\xE1 bons resultados); \u201Cmis\xE9ria\u201D (a a\xE7\xE3o trar\xE1 maus resultados); \u201Cfelicidade e mis\xE9ria\u201D (para ambos) ou \u201Cnada\u201D (para a\xE7\xF5es que n\xE3o trar\xE3o resultados bons ou ruins).\n\n\n\nCom um resultado 1, a magia falha e oferece o resultado \u201Cnada\u201D. N\xE3o h\xE1 como saber se esse resultado foi dado porque a magia falhou ou n\xE3o. Lan\xE7ar esta magia m\xFAltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.\n\n\n\nPor exemplo, se o grupo est\xE1 prestes a entrar em uma c\xE2mara, o aug\xFArio dir\xE1 \u201Cfelicidade\u201D se a c\xE2mara cont\xE9m um tesouro desprotegido, \u201Cmis\xE9ria\u201D se cont\xE9m um monstro, \u201Cfelicidade e mis\xE9ria\u201D se houver um tesouro e um monstro ou \u201Cnada\u201D se a c\xE2mara estiver vazia.",
    enhancements: [
      {
        cost: "+7 PM",
        description: "o mestre rola 1d12; a magia s\xF3 falha em um resultado 1."
      },
      {
        cost: "+12 PM",
        description: "o mestre rola 1d20; a magia s\xF3 falha em um resultado 1."
      }
    ]
  },
  {
    name: "Bola de Fogo",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "esfera de 6m de raio",
    duration: "instant\xE2nea",
    resistence: "Reflexos reduz \xE0 metade",
    description: "Voc\xEA dispara uma pequena pedra flamejante que explode com o impacto, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na \xE1rea.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+2 PM",
        description: "muda a \xE1rea para efeito de esfera flamejante com tamanho M\xE9dio e a dura\xE7\xE3o para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de di\xE2metro que causa 3d6 pontos de dano a qualquer criatura no mesmo espa\xE7o. Voc\xEA pode gastar uma a\xE7\xE3o de movimento para fazer a esfera voar 9m em qualquer dire\xE7\xE3o. Ela \xE9 imune a dano, mas pode ser apagada com \xE1gua. Uma criatura s\xF3 pode sofrer dano da esfera uma vez por rodada."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para um dia ou at\xE9 ser descarregada. Em vez do normal, a pedra flamejante aparece em suas m\xE3os e pode ser detonada como uma rea\xE7\xE3o, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto."
      }
    ]
  },
  {
    name: "Campo de For\xE7a",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Esta magia cria uma pel\xEDcula protetora sobre voc\xEA. Voc\xEA recebe 30 PV tempor\xE1rios, mas apenas contra dano de corte, impacto ou perfura\xE7\xE3o.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o e a dura\xE7\xE3o para instant\xE2nea. Em vez do normal, voc\xEA recebe resist\xEAncia 30 contra o pr\xF3ximo dano que sofrer at\xE9 o fim do turno atual."
      },
      {
        cost: "+1 PM",
        description: "aumenta os PV tempor\xE1rios em +5 ou a resist\xEAncia a dano em +10."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para 1 criatura ou objeto Enorme ou menor. Em vez do normal, cria uma esfera im\xF3vel e tremeluzente com o tamanho do alvo e centrada nele. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na \xE1rea podem fazer um teste de Reflexos para evitar serem aprisionadas. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "como o aprimoramento acima, mas tamb\xE9m muda a dura\xE7\xE3o para sustentada. Tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, voc\xEA pode gastar uma a\xE7\xE3o livre para flutuar a esfera e seu conte\xFAdo para qualquer local dentro de alcance longo. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Camuflagem Ilus\xF3ria",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    description: "O alvo fica com sua imagem nublada, como se vista atrav\xE9s de um l\xEDquido, recebendo os efeitos de camuflagem.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "a imagem do alvo fica ainda mais distorcida, oferecendo camuflagem total."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "C\xEDrculo da Justi\xE7a",
    execution: "completa",
    range: "curto",
    area: "cubo com 9m de lado",
    duration: "1 dia",
    resistence: "Vontade parcial",
    description: "Tamb\xE9m conhecida como ''L\xE1grimas do Deus da Trapa\xE7a,'' esta magia \xE9 usada em tribunais e para proteger \xE1reas sens\xEDveis. Criaturas na \xE1rea sofrem \u201310 em testes de Acrobacia, Engana\xE7\xE3o, Furtividade e Ladinagem e n\xE3o podem mentir deliberadamente \u2014 mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omiss\xF5es, por exemplo). Uma criatura que passe na resist\xEAncia tem as penalidades reduzidas para \u20135 e pode mentir.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para pessoal, o alvo para voc\xEA, a dura\xE7\xE3o para cena e a resist\xEAncia para nenhuma. Em vez do normal, qualquer criatura ou objeto invis\xEDvel em alcance curto se torna vis\xEDvel. Isso n\xE3o anula o efeito m\xE1gico; se sair do seu alcance, a criatura ou objeto voltam a ficar invis\xEDveis."
      },
      {
        cost: "+3 PM",
        description: "muda a penalidade nas per\xEDcias para \u201310 (se passar na resist\xEAncia) e \u201320 (se falhar). Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona componente material (balan\xE7a de prata no valor de T$ 5.000)."
      }
    ]
  },
  {
    name: "Condi\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "at\xE9 5 criaturas",
    duration: "cena",
    description: "Pela dura\xE7\xE3o da magia, voc\xEA sabe a posi\xE7\xE3o e condi\xE7\xE3o (PV atuais, se est\xE3o sob efeito de magia...) das criaturas escolhidas. Depois de lan\xE7ada, a dist\xE2ncia entre voc\xEA e os alvos n\xE3o importa \u2014 a magia s\xF3 deixa de detectar um alvo se ele morrer ou viajar para outro plano.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+1 PM",
        description: "aumenta a dura\xE7\xE3o para 1 dia."
      }
    ]
  },
  {
    name: "Conjurar Mortos-Vivos",
    execution: "completa",
    range: "curto",
    effect: "6 mortos",
    duration: "sustentada",
    description: "Seis esqueletos de tamanho M\xE9dio feitos de energia negativa emergem do ch\xE3o em espa\xE7os desocupados escolhidos por voc\xEA dentro do alcance. Voc\xEA pode usar uma a\xE7\xE3o de movimento para fazer os mortos-vivos andarem (eles t\xEAm deslocamento 9m) ou uma a\xE7\xE3o padr\xE3o para faz\xEA-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos t\xEAm For 14, Des 14 e todos os outros atributos nulos; eles t\xEAm 1 PV, n\xE3o t\xEAm valor de Defesa ou testes de resist\xEAncia, falham automaticamente em qualquer teste oposto e s\xE3o imunes a atordoamento, dano n\xE3o letal, doen\xE7a, encantamento, fadiga, frio, ilus\xE3o, paralisia, sono e veneno. Eles desaparecem quando s\xE3o reduzidos a 0 PV ou no fim da cena. Os mortos-vivos n\xE3o agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a crit\xE9rio do mestre.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de mortos-vivos conjurados em +1."
      },
      {
        cost: "+3 PM",
        description: "em vez de esqueletos, conjura carni\xE7ais (veja abaixo). Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "em vez de esqueletos, conjura sombras (veja abaixo). Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Controlar Fogo",
    execution: "padr\xE3o",
    range: "curto",
    target: "veja texto",
    duration: "cena",
    description: "Voc\xEA pode criar, moldar, mover ou extinguir chamas e emana\xE7\xF5es de calor. Ao lan\xE7ar a magia, escolha um dos efeitos.\n\n\n\n''Chamejar:'' o alvo \xE9 armas escolhidas. Elas causam +1d6 de dano de fogo. Tamb\xE9m afeta armas naturais e ataques desarmados.\n\n\n\n''Esquentar:'' o alvo \xE9 1 objeto, que come\xE7a a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A crit\xE9rio do mestre, o objeto ou a criatura vestindo-o tamb\xE9m podem pegar fogo. Uma criatura pode gastar uma a\xE7\xE3o completa para resfriar o objeto (jogando areia ou se jogando numa fonte de \xE1gua pr\xF3xima, por exemplo) e cancelar o efeito da magia.\n\n\n\n''Extinguir'': o alvo \xE9 1 chama de tamanho Grande ou menor, que \xE9 apagada. Isso cria uma nuvem de fuma\xE7a que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fuma\xE7a, criaturas t\xEAm camuflagem.\n\n\n\n''Modelar'': o alvo \xE9 1 chama de tamanho Grande ou menor. A cada rodada, voc\xEA pode gastar uma a\xE7\xE3o livre para moviment\xE1-la 9m em qualquer dire\xE7\xE3o. Se atravessar o espa\xE7o ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura s\xF3 pode receber dano dessa maneira uma vez por rodada.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      }
    ]
  },
  {
    name: "Controlar Madeira",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 objeto de madeira Grande ou menor",
    duration: "cena",
    description: "Voc\xEA molda, retorce, altera ou repele madeira. Ao lan\xE7ar a magia, escolha.\n\n\n\n''Fortalecer'': deixa o alvo mais resistente. Armas t\xEAm seu dano aumentado em um passo. Escudos t\xEAm seu b\xF4nus de Defesa aumentado em +2. Al\xE9m disso, esses e outros itens de madeira recebem +5 na RD e dobram seus PV.\n\n\n\n''Modelar'': muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas n\xE3o pode criar mecanismos complexos (como uma besta) ou itens consum\xEDveis.\n\n\n\n''Repelir'': o alvo \xE9 repelido por voc\xEA. Se for uma arma, ataques feitos com ela contra voc\xEA falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando voc\xEA se aproximar, mesmo que esteja trancado. Uma carro\xE7a ou outro objeto que v\xE1 atingi-lo, como um tronco caindo ou barril, vai desviar ou simplesmente parar adjacente a voc\xEA, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\n\n\n\n''Retorcer'': torna o alvo imprest\xE1vel. Uma porta retorcida emperra (exigindo um teste de For\xE7a contra CD 25 para ser aberta). Armas e itens retorcidos imp\xF5em uma penalidade de \u20135 em testes de per\xEDcia. Escudos retorcidos deixam de oferecer qualquer b\xF4nus (mas ainda imp\xF5em penalidades). Um barco retorcido come\xE7a a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para 1 dia. Voc\xEA e seu equipamento se transformam em uma \xE1rvore de tamanho Grande. Nessa forma, voc\xEA n\xE3o pode falar ou fazer a\xE7\xF5es f\xEDsicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia \xE9 dissipada. Um teste de Sobreviv\xEAncia (CD 30) revela que voc\xEA n\xE3o \xE9 uma \xE1rvore verdadeira."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para \xE1rea de quadrado com 9m de lado e a dura\xE7\xE3o para cena. Em vez do normal, qualquer vegeta\xE7\xE3o na \xE1rea fica r\xEDgida e afiada. A \xE1rea \xE9 considerada terreno dif\xEDcil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem."
      },
      {
        cost: "+7 PM",
        description: "muda o alvo para objeto de madeira Enorme ou menor. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+12 PM",
        description: "muda o alvo para objeto de madeira Colossal ou menor. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Cr\xE2nio Voador de Vladislav",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Esta magia cria um cr\xE2nio humano envolto em energia negativa, que causa 4d8+4 pontos de dano de trevas quando atinge o alvo e se desfaz emitindo um som horrendo, podendo deixar abalados todos os inimigos num raio de 3m. Passar no teste de resist\xEAncia diminui o dano pela metade e evita a condi\xE7\xE3o abalado. Alvos que j\xE1 estiverem abalados e falharem no teste ficam apavorados por 1d4 rodadas.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano em +1d8+1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      }
    ]
  },
  {
    name: "Desespero Esmagador",
    execution: "padr\xE3o",
    area: "cone",
    duration: "cena",
    description: "Humanoides na \xE1rea s\xE3o acometidos de grande tristeza, adquirindo as condi\xE7\xF5es fraco e frustrado. Se passarem na resist\xEAncia, adquirem esta condi\xE7\xE3o por uma rodada.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "em vez do normal, as condi\xE7\xF5es adquiridas s\xE3o debilitado e esmorecido."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, afeta qualquer tipo de criatura."
      },
      {
        cost: "+3 PM",
        description: "al\xE9m do normal, criaturas que falhem na resist\xEAncia ficam aos prantos (em termos de regras, adquirem a condi\xE7\xE3o pasmo) por 1 rodada. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Dissipar Magia",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    description: "Voc\xEA dissipa outras magias que estejam ativas, como se sua dura\xE7\xE3o tivesse acabado. Note que efeitos de magias instant\xE2neas n\xE3o podem ser dissipados (n\xE3o se pode dissipar uma ''Bola de Fogo'' ou ''Rel\xE2mpago'' depois que j\xE1 causaram dano...). Se lan\xE7ar essa magia em uma criatura ou \xE1rea, fa\xE7a um teste de Misticismo; voc\xEA anula as magias com CD igual ou menor que o resultado do teste. Se lan\xE7ada contra um item m\xE1gico, o transforma em um item mundano por 1d6 rodadas (sem teste de resist\xEAncia)",
    enhancements: [
      {
        cost: "+12 PM",
        description: "muda a \xE1rea para esfera com 9m de raio. Em vez do normal, cria um efeito de disjun\xE7\xE3o. Todas as magias na \xE1rea s\xE3o automaticamente dissipadas e todos os itens m\xE1gicos na \xE1rea, exceto aqueles que voc\xEA estiver carregando, viram itens mundanos (com direito a um teste de resist\xEAncia para evitar esse efeito). Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Enxame de Pestes",
    execution: "completa",
    range: "m\xE9dio",
    effect: "1 enxame M\xE9dio",
    duration: "sustentada",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Voc\xEA conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, mosquitos, ratos, morcegos ou serpentes, que surge em um ponto a sua escolha. O enxame pode passar pelo espa\xE7o de outras criaturas e n\xE3o impede que outras criaturas entrem no espa\xE7o dele. No final de cada um de seus turnos, o enxame causa 2d12 pontos de dano de veneno a qualquer criatura em seu espa\xE7o (Fortitude reduz \xE0 metade). Voc\xEA pode gastar uma a\xE7\xE3o de movimento para mover o enxame com deslocamento de 12m",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d12."
      },
      {
        cost: "+3 PM",
        description: "muda a resist\xEAncia para Reflexos reduz \xE0 metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfura\xE7\xE3o). O resto da magia segue normal."
      },
      {
        cost: "+5 PM",
        description: "aumenta o n\xFAmero de enxames em +1. Eles n\xE3o podem ocupar o mesmo espa\xE7o. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a resist\xEAncia para Reflexos reduz \xE0 metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre \xE1cido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Esculpir Sons",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura ou objeto",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Esta magia altera os sons emitidos pelo alvo. Ela n\xE3o \xE9 capaz de criar sons, mas pode omiti-los (como fazer uma carro\xE7a ficar silenciosa) ou transform\xE1-los (como fazer uma pessoa ficar com voz de passarinho). Voc\xEA n\xE3o pode criar sons que n\xE3o conhece (n\xE3o pode fazer uma criatura falar num idioma que n\xE3o conhe\xE7a). Uma vez que escolha a altera\xE7\xE3o, ela n\xE3o pode ser mudada. Um conjurador que tenha a voz modificada drasticamente n\xE3o poder\xE1 lan\xE7ar magias",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1. Todas as criaturas e objetos devem ser afetados da mesma forma."
      }
    ]
  },
  {
    name: "F\xEDsico Divino",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "cena",
    description: "O alvo se torna uma vers\xE3o mais poderosa de si mesmo. O alvo recebe +4 em For\xE7a, Destreza ou Constitui\xE7\xE3o, a sua escolha. Esse aumento n\xE3o oferece PV ou PM adicionais.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "em vez do normal, o alvo recebe +4 nos tr\xEAs atributos f\xEDsicos. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        cost: "+7 PM",
        description: "aumenta o b\xF4nus em +2. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Flecha \xC1cida",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura ou objeto",
    duration: "instant\xE2nea",
    resistence: "Reflexos parcial",
    description: "Voc\xEA dispara um proj\xE9til que causa 4d6 pontos de dano de \xE1cido. Se falhar no teste de resist\xEAncia, o alvo tamb\xE9m fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de \xE1cido no in\xEDcio de seus turnos. Se lan\xE7ada contra um objeto livre (que n\xE3o esteja em posse de uma criatura) a magia causa dano dobrado e ignora a RD do objeto.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, se o alvo coberto pelo muco \xE1cido estiver usando armadura ou escudo, o item \xE9 corro\xEDdo. Isso reduz o b\xF4nus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu b\xF4nus (veja a per\xEDcia Of\xEDcio, na p\xE1gina [[Per\xEDcias T20|Per\xEDcias]])."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano inicial e o dano por rodada em +1d6."
      }
    ]
  },
  {
    name: "Invisibilidade",
    execution: "livre",
    range: "pessoal",
    target: "voc\xEA",
    duration: "1 rodada",
    description: "O alvo fica invis\xEDvel, incluindo seu equipamento. Ele recebe camuflagem total e +20 em testes de Furtividade. Como o normal, criaturas que n\xE3o possam v\xEA-lo ficam desprevenidas contra seus ataques.\n\n\n\nA magia termina se o alvo faz um ataque ou usa uma habilidade hostil. A\xE7\xF5es contra objetos livres n\xE3o dissipam a ''Invisibilidade'' (voc\xEA pode tocar ou apanhar objetos que n\xE3o estejam sendo segurados por outras criaturas). Causar dano indiretamente \u2014 por exemplo, acendendo o pavio de um barril de p\xF3lvora que vai detonar mais tarde \u2014 n\xE3o \xE9 considerado um ataque.\n\n\n\nObjetos soltos pelo alvo voltam a ser vis\xEDveis e objetos apanhados por ele ficam invis\xEDveis. Uma luz transportada pelo alvo nunca fica invis\xEDvel (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda al\xE9m de seu alcance corpo a corpo natural se torna vis\xEDvel.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e o alvo para 1 criatura ou 1 objeto."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para cena. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a at\xE9 3m dele se tornam invis\xEDveis, como no efeito normal da magia (ainda ficam vis\xEDveis caso fa\xE7am uma a\xE7\xE3o hostil). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica vis\xEDvel. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Liga\xE7\xE3o Telep\xE1tica",
    execution: "padr\xE3o",
    range: "toque",
    target: "2 criaturas volunt\xE1rias",
    duration: "1 dia",
    description: "Voc\xEA cria um elo mental entre duas criaturas com Intelig\xEAncia 3 ou maior (voc\xEA pode ser uma delas). As criaturas podem se comunicar independente de idioma ou dist\xE2ncia, mas n\xE3o em mundos diferentes.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura. Em vez do normal, voc\xEA cria um elo mental que permite que voc\xEA veja e ou\xE7a atrav\xE9s dos sentidos da criatura, se gastar uma a\xE7\xE3o de movimento. Uma criatura involunt\xE1ria pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Localiza\xE7\xE3o",
    range: "pessoal",
    description: "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Voc\xEA pode pensar em termos gerais (\u201Cum elfo\u201D, \u201Calgo de metal\u201D) ou espec\xEDficos (\u201CGwen, a elfa\u201D, \u201Cuma espada longa\u201D). A magia indica a dire\xE7\xE3o e dist\xE2ncia da criatura ou objeto mais pr\xF3ximo desse tipo, caso esteja ao alcance. Voc\xEA pode movimentar-se para continuar procurando. Procurar algo muito espec\xEDfico (\u201Ca espada longa encantada do Bar\xE3o Rulyn\u201D) exige que voc\xEA tenha em mente uma imagem precisa do objeto; caso a imagem n\xE3o seja muito pr\xF3xima da verdade, a magia falha, mas voc\xEA gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda a \xE1rea para alvo voc\xEA. Em vez do normal, voc\xEA sabe onde fica o norte e recebe +5 em testes de Sobreviv\xEAncia para se orientar."
      },
      {
        cost: "+5 PM",
        description: "aumenta a \xE1rea em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      }
    ]
  },
  {
    name: "Mapear",
    range: "toque",
    target: "superf\xEDcie ou objeto plano",
    duration: "cena",
    description: "Uma fagulha percorre a superf\xEDcie afetada, queimando-a enquanto esbo\xE7a um mapa da regi\xE3o onde o conjurador est\xE1. Se voc\xEA conhece o lugar, o mapa ser\xE1 completo. Caso contr\xE1rio, apresentar\xE1 apenas um esbo\xE7o geral, al\xE9m de um ponto de refer\xEAncia (para possibilitar localiza\xE7\xE3o) e um lugar de interesse, ambos definidos pelo mestre. A regi\xE3o representada no mapa tem tamanho m\xE1ximo de um quadrado de 10km de lado. Caso voc\xEA esteja dentro de uma constru\xE7\xE3o, o mapa mostrar\xE1 o andar no qual voc\xEA se encontra.",
    enhancements: []
  },
  {
    name: "Marca da Obedi\xEAncia",
    execution: "padr\xE3o",
    range: "toque",
    resistence: "Vontade anula",
    description: "Voc\xEA toca uma criatura, gravando uma marca m\xEDstica no corpo dela enquanto profere uma ordem, como \u201Cn\xE3o ataque a mim ou meus aliados\u201D, \u201Csiga-me\u201D ou \u201Cn\xE3o saia desta sala\u201D. A criatura deve seguir essa ordem, gastando todas as a\xE7\xF5es de seu turno para isso. A ordem n\xE3o pode ser gen\xE9rica demais (como \u201Cajude-me\u201D, por exemplo), nem for\xE7ar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia \xE9 dissipada.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Se n\xE3o estiver em combate, a criatura s\xF3 pode fazer o teste de Vontade a cada hora. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano mental. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Mente Divina",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "cena",
    description: "Voc\xEA traz inspira\xE7\xE3o divina \xE0 mente do alvo. Escolha entre Intelig\xEAncia, Sabedoria ou Carisma. O alvo recebe +4 no atributo escolhido. Esse aumento n\xE3o oferece PV ou PM adicionais.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "em vez do normal, o alvo recebe +4 nos tr\xEAs atributos mentais. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        cost: "+7 PM",
        description: "aumenta o b\xF4nus em +2. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Metamorfose",
    range: "pessoal",
    target: "voc\xEA",
    description: "Voc\xEA muda sua apar\xEAncia e forma \u2014 incluindo seu equipamento \u2014 para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, voc\xEA recebe +20 em testes de Engana\xE7\xE3o para disfarce. Caracter\xEDsticas n\xE3o mencionadas n\xE3o mudam.\n\n\n\nSe mudar para uma forma humanoide, pode mudar o tipo de dano f\xEDsico de suas armas (se usa uma ma\xE7a e transform\xE1-la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.\n\n\n\nSe mudar para outras formas, voc\xEA pode escolher uma Forma Selvagem do druida (veja a p\xE1gina [[Druida T20|Druida]]). Nesse caso voc\xEA n\xE3o pode atacar com suas armas, falar ou lan\xE7ar magias at\xE9 voltar ao normal, mas recebe uma ou mais armas naturais e os b\xF4nus da forma selvagem escolhida.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "a forma escolhida recebe uma habilidade de sentidos entre faro, vis\xE3o na penumbra e vis\xE3o no escuro."
      },
      {
        cost: "+3 PM",
        description: "a forma escolhida recebe percep\xE7\xE3o \xE0s cegas. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para toque, o alvo para 1 criatura e adiciona resist\xEAncia (Vontade anula)."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para m\xE9dio, o alvo para 1 criatura e a resist\xEAncia para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura n\xE3o pode atacar, falar e lan\xE7ar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras caracter\xEDsticas n\xE3o mudam. No in\xEDcio de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna \xE0 sua forma normal e a magia termina. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "se mudar para formas n\xE3o humanoides, pode escolher uma Forma Selvagem Superior. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+12 PM",
        description: "al\xE9m do normal, no in\xEDcio de seus turnos o alvo pode mudar de forma novamente, como uma a\xE7\xE3o livre, fazendo novas escolhas. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Miasma Mef\xEDtico",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "nuvem com 6m de raio",
    duration: "instant\xE2nea",
    description: "A \xE1rea \xE9 coberta por emana\xE7\xF5es letais. Criaturas na \xE1rea sofrem 5d6 pontos de dano de veneno e ficam enjoadas por 1 rodada. Se passarem na resist\xEAncia, sofrem metade do dano e n\xE3o ficam enjoadas.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda o alcance para toque, a \xE1rea para alvo (1 criatura com 0 PV ou menos), a dura\xE7\xE3o para instant\xE2nea e a resist\xEAncia para Fortitude anula. Em vez do normal, voc\xEA canaliza o ''Miasma'' contra uma v\xEDtima. Se falhar na resist\xEAncia, ela morre e voc\xEA recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+3 PM",
        description: "muda o tipo do dano para trevas."
      }
    ]
  },
  {
    name: "Montaria Arcana",
    execution: "padr\xE3o",
    range: "curto",
    effect: "criatura conjurada",
    duration: "1 dia",
    description: "Esta magia convoca um cavalo de batalha que serve como um aliado montaria veterano. Sua apar\xEAncia \xE9 de um animal negro com crina e cauda cinzentas e cascos feitos de fuma\xE7a, mas voc\xEA pode mud\xE1-la se quiser. Al\xE9m dos benef\xEDcios normais, a ''Montaria Arcana'' pode atravessar terreno dif\xEDcil sem redu\xE7\xE3o em seu deslocamento.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM."
      },
      {
        cost: "+3 PM",
        description: "aumenta o tamanho da montaria em uma categoria. Isso tamb\xE9m aumenta o n\xFAmero de criaturas que ela pode carregar \u2014 duas para uma criatura Enorme, seis para Colossal. Uma \xFAnica criatura controla a montaria; as outras apenas s\xE3o deslocadas."
      },
      {
        cost: "+3 PM",
        description: "muda a criatura para um aliado montaria mestre. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Ora\xE7\xE3o",
    execution: "padr\xE3o",
    duration: "sustentada",
    description: "Todos os seus aliados no alcance recebem +2 em testes de per\xEDcia e rolagens de dano, e todos os seus inimigos no alcance sofrem \u20132 em testes de per\xEDcia e rolagens de dano. Esses b\xF4nus e penalidades s\xE3o cumulativos com outras magias.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus em +1, limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para m\xE9dio. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Purifica\xE7\xE3o",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    description: "Seu toque purifica a criatura tocada. Esta magia remove uma das seguintes condi\xE7\xF5es: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "tamb\xE9m cura todo o dano causado por venenos."
      },
      {
        cost: "+2 PM",
        description: "em vez de uma, remove todas as condi\xE7\xF5es listadas."
      },
      {
        cost: "+3 PM",
        description: "tamb\xE9m permite que o alvo solte qualquer item amaldi\xE7oado que esteja segurando (mas n\xE3o remove a maldi\xE7\xE3o do item em si)."
      }
    ]
  },
  {
    name: "Raio Solar",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "linha",
    duration: "instant\xE2nea",
    resistence: "Reflexos",
    description: "Voc\xEA canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na \xE1rea sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resist\xEAncia, sofrem metade do dano e n\xE3o ficam ofuscadas.",
    enhancements: [
      {
        cost: "Truque",
        description: "muda a dura\xE7\xE3o para cena e a resist\xEAncia para nenhuma. Em vez do normal, cria um facho de luz, que ilumina a \xE1rea da magia. Uma vez por rodada, voc\xEA pode mudar a dire\xE7\xE3o do facho como uma a\xE7\xE3o livre."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, criaturas vivas a sua escolha na \xE1rea curam 4d8 pontos de vida; o restante sofre o dano normalmente."
      },
      {
        cost: "+3 PM",
        description: "criaturas que falhem na resist\xEAncia ficam cegas por 1d4 rodadas."
      }
    ]
  },
  {
    name: "Ref\xFAgio",
    execution: "completa",
    effect: "domo com 6m de raio",
    duration: "1 dia",
    range: "curto",
    area: "linha",
    resistence: "Reflexos reduz \xE0 metade",
    target: "1 criatura",
    description: "Voc\xEA entoa c\xE2nticos mal\xE9ficos que amaldi\xE7oam uma v\xEDtima, criando efeitos variados. Ao lan\xE7ar a magia, escolha entre os seguintes.\n\n\n\n''Debilidade'': o alvo fica esmorecido e n\xE3o pode se comunicar ou lan\xE7ar magias. Ainda reconhece seus aliados e pode segui-los e ajud\xE1-los, mas sempre de maneira simpl\xF3ria.\n\n\n\n''Doen\xE7a'': muda a dura\xE7\xE3o para instant\xE2nea. O alvo contrai uma doen\xE7a a sua escolha, que o afeta imediatamente (sem per\xEDodo de incuba\xE7\xE3o).\n\n\n\n''Fraqueza'': o alvo fica debilitado e lento.\n\n\n\n''Isolamento'': o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a vis\xE3o, fica cego. Se perder a audi\xE7\xE3o, fica surdo. Se perder o olfato ou paladar, n\xE3o pode usar a habilidade faro. Se perder o tato, fica ca\xEDdo e n\xE3o pode se levantar.\n\n\n\nVoc\xEA tamb\xE9m pode inventar sua pr\xF3pria maldi\xE7\xE3o, usando esses exemplos como sugest\xF5es, mas o mestre tem a palavra final sobre o efeito.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "em vez do normal, cria uma cabana que comporta at\xE9 10 criaturas confortavelmente. Descansar nesse espa\xE7o concede recupera\xE7\xE3o de PV e PM igual ao dobro do n\xEDvel. Para todos os efeitos \xE9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\xEDlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\xEAm 15 PV, RD 5 e s\xE3o protegidas por um efeito id\xEAntico \xE0 magia ''Tranca Arcana''. As paredes t\xEAm 200 PV e RD 5."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cria uma cabana que comporta at\xE9 10 criaturas M\xE9dias. Descansar nesse espa\xE7o concede recupera\xE7\xE3o confort\xE1vel (recupera PV e PM igual ao dobro do n\xEDvel). Para todos os efeitos \xE9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\xEDlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\xEAm 15 PV, RD 5 e s\xE3o protegidas por um efeito id\xEAntico \xE0 magia ''Tranca Arcana''. As paredes t\xEAm 200 PV e RD 5."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cria um espa\xE7o extradimensional, similar a uma caverna vazia e escura, que comporta at\xE9 10 criaturas M\xE9dias. A entrada para o espa\xE7o precisa estar desenhada em um objeto fixo como uma grande pedra ou \xE1rvore. Qualquer criatura que atravesse a entrada consegue entrar no espa\xE7o. Nenhum efeito a partir do mundo real afeta o espa\xE7o e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espa\xE7o extradimensional surge no mundo real na \xE1rea vazia mais pr\xF3xima da entrada quando a dura\xE7\xE3o da magia acaba. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "em vez do normal, cria uma mans\xE3o extradimensional que comporta at\xE9 100 criaturas M\xE9dias, com quartos luxuosos, comida e bebida e dez servos fantasmag\xF3ricos (como na magia ''Servos Invis\xEDveis''). Descansar na mans\xE3o concede recupera\xE7\xE3o luxuosa (recupera PV e PM igual ao triplo do n\xEDvel). A mans\xE3o tem uma \xFAnica entrada, uma porta feita de luz. Voc\xEA pode deix\xE1-la vis\xEDvel ou invis\xEDvel como uma a\xE7\xE3o livre e apenas criaturas escolhidas por voc\xEA podem passar. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de efeitos que voc\xEA pode escolher em +1. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a dura\xE7\xE3o para permanente e resist\xEAncia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\xE7\xE3o, mas por 1 rodada. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \xE9 lido. O objeto tamb\xE9m sofre o dano (possivelmente sendo destru\xEDdo)."
      },
      {
        cost: "+1 PM",
        description: "este aprimoramento exige que voc\xEA lance uma magia de at\xE9 2\xBA c\xEDrculo como parte da execu\xE7\xE3o da ''Runa de Prote\xE7\xE3o''. Quando a runa \xE9 ativada, em vez do efeito normal, lan\xE7a essa magia sobre a criatura que o ativou (se for uma magia de \xE1rea, a \xE1rea \xE9 centrada na criatura)."
      },
      {
        cost: "+3 PM",
        description: "como o aprimoramento acima, mas al\xE9m de lan\xE7ar a magia, a runa ''tamb\xE9m'' causa o dano do efeito normal. Voc\xEA define a ordem que os efeitos acontecem."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para m\xE9dio."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para voc\xEA e uma criatura volunt\xE1ria. Voc\xEA pode escolher este aprimoramento mais vezes para aumentar o n\xFAmero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o. Em vez do normal, voc\xEA salta para um espa\xE7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para longo."
      },
      {
        cost: "+1 PM",
        description: "muda a \xE1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \xE1rea de sil\xEAncio com 3m de raio. Se lan\xE7ar a magia num objeto de uma criatura involunt\xE1ria, ela tem direito a um teste de Vontade para anul\xE1-la."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena. Em vez do normal, nenhum som pode deixar a \xE1rea, mas criaturas dentro da \xE1rea podem falar, ouvir e lan\xE7ar magias com palavras m\xE1gicas normalmente."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA, a dura\xE7\xE3o para cena e a resist\xEAncia para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura M\xE9dia pode atacar advers\xE1rios a at\xE9 4,5m, por exemplo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+4 PM",
        description: "aumenta a dist\xE2ncia do efeito de empurrar em +3m."
      },
      {
        cost: "+5 PM",
        description: "muda o tipo do dano para ess\xEAncia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano de frio em +2d6."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, criaturas que falhem no teste de Fortitude ficam ca\xEDdas."
      },
      {
        cost: "+3 PM",
        description: "aumenta o tamanho m\xE1ximo das criaturas afetadas em uma categoria. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura."
      },
      {
        cost: "+1 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, uma vez por rodada, como uma a\xE7\xE3o padr\xE3o, voc\xEA pode fazer um rel\xE2mpago cair sobre um alvo na \xE1rea, causando 3d8 pontos de dano de eletricidade (Reflexos reduz \xE0 metade)."
      },
      {
        cost: "+1 PM",
        description: "se escolheu causar granizo, muda o dano para 1d6."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1 dado do mesmo tipo."
      },
      {
        cost: "+3 PM",
        description: "se escolheu causar chuva, ela revela criaturas e objetos invis\xEDveis na \xE1rea."
      },
      {
        cost: "+7 PM",
        description: "se escolheu causar neve, criaturas na \xE1rea sofrem 2d6 pontos de dano de frio no in\xEDcio de seus turnos."
      },
      {
        cost: "+1 PM",
        description: "como parte da execu\xE7\xE3o da magia,\xA0voc\xEA pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais \xE0 metade do dano da magia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6"
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para cena. Em vez do normal, a cada rodada voc\xEA pode gastar uma a\xE7\xE3o padr\xE3o para tocar 1 criatura e causar 3d6 pontos de dano. Voc\xEA recupera pontos de vida iguais \xE0 metade do dano causado. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alvo para criaturas no alcance. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Voc\xEA acelera sua mente, al\xE9m do seu corpo. A a\xE7\xE3o adicional pode ser usada para lan\xE7ar magias e ativar engenhocas. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "o objeto tamb\xE9m oferece o mesmo b\xF4nus em testes de resist\xEAncia. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "aumenta o b\xF4nus em +1."
      },
      {
        cost: "+7 PM",
        description: "o objeto tamb\xE9m oferece resist\xEAncia a dano 5. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "voc\xEA concede um pouco de vida a um cad\xE1ver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo \xE9 limitado ao que ele tinha enquanto vivo e suas respostas s\xE3o curtas e enigm\xE1ticas. Um corpo s\xF3 pode ser alvo desta magia uma vez. Ela tamb\xE9m n\xE3o funciona em um corpo cuja cabe\xE7a tenha sido destru\xEDda."
      },
      {
        cost: "+1 PM",
        description: "voc\xEA pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas t\xEAm percep\xE7\xE3o limitada de seus arredores e normalmente fornecem respostas simpl\xF3rias."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para m\xE9dio, a \xE1rea para c\xEDrculo de 3m de raio e o alvo para criaturas escolhidas."
      },
      {
        cost: "+2 PM",
        description: "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espa\xE7o dentro do alcance. O ponto precisa ser fixo, mas n\xE3o precisa de nenhum apoio ou superf\xEDcie (pode simplesmente flutuar no ar). O alvo n\xE3o pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resist\xEAncia a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do [[Paladino T20|Paladino]])."
      },
      {
        cost: "+4 PM",
        description: "como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resist\xEAncia a dano 40."
      },
      {
        cost: "+4 PM",
        description: "muda o alvo para \xE1rea de cubo de 9m, a dura\xE7\xE3o para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da \xE1rea."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+4 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 4\xBA."
      },
      {
        cost: "+9 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 5\xBA."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano de fogo em +1d6."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano de eletricidade em +1d6."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de dados de aux\xEDlio em +2."
      },
      {
        cost: "+4 PM",
        description: "muda o tipo dos dados de aux\xEDlio para d6."
      },
      {
        cost: "+8 PM",
        description: "muda o tipo dos dados de aux\xEDlio para d8."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de dados de aux\xEDlio em +1."
      },
      {
        cost: "+8 PM",
        description: "Muda os dados de aux\xEDlio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade \u201Csuga\u201D 2 PM de voc\xEA. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d8."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de cubos de 1,5m em +2."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para 1 dia. Voc\xEA e seu equipamento fundem-se a uma superf\xEDcie ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomod\xE1-lo. Voc\xEA pode voltar ao espa\xE7o adjacente como uma a\xE7\xE3o livre, dissipando a magia. Enquanto mesclado, voc\xEA n\xE3o pode falar ou fazer a\xE7\xF5es f\xEDsicas, mas consegue perceber seus arredores normalmente. Pequenos danos n\xE3o o afetam, mas se o objeto (ou o trecho onde voc\xEA est\xE1 imerso) for destru\xEDdo, a magia \xE9 dissipada, voc\xEA volta a um espa\xE7o livre adjacente e sofre 10d6 pontos de dano de impacto."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, at\xE9 1 hora depois que lan\xE7ou a magia, voc\xEA pode gastar uma a\xE7\xE3o de movimento para enviar o objeto de volta para o local em que ele estava antes."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para um ba\xFA M\xE9dio, a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM. Em vez do normal, voc\xEA esconde o ba\xFA alvo no Et\xE9reo, com at\xE9 250kg de equipamento. A magia faz com que qualquer objeto caiba no ba\xFA, independentemente do seu tamanho. Uma vez escondido, voc\xEA pode convocar o ba\xFA para um espa\xE7o livre adjacente, ou de volta para o Et\xE9reo, como uma a\xE7\xE3o padr\xE3o. ''Componente material:'' ba\xFA constru\xEDdo com mat\xE9ria-prima da melhor qualidade (T$ 1.000). Voc\xEA deve ter em m\xE3os uma miniatura do ba\xFA, no valor de T$ 100, para invocar o ba\xFA verdadeiro."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o peso limite do alvo em um fator de 10, at\xE9 500 kg. Um objeto muito grande ou pesado para aparecer em suas m\xE3os \xE9 teletransportado para um espa\xE7o adjacente a sua escolha."
      },
      {
        cost: "+4 PM",
        description: "muda o alvo para 1 escultura mundana inanimada. Al\xE9m do normal, o alvo tem as mesmas caracter\xEDsticas de um construto."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM."
      },
      {
        cost: "+4 PM",
        description: "muda o alvo para \xE1rea de cubo de 9m. Qualquer criatura ou objeto na \xE1rea recebe o efeito da magia enquanto estiver dentro dela."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 semana."
      },
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus nas resist\xEAncias em +1."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto, a \xE1rea para alvo 1 criatura e a dura\xE7\xE3o para cena. O alvo fica imune a efeitos de necromancia e trevas."
      },
      {
        cost: "+4 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 4\xBA. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma a\xE7\xE3o padr\xE3o e fazer um teste de Acrobacia ou Atletismo para escapar. Se voc\xEA mover o enxame, a criatura fica livre."
      },
      {
        cost: "+2 PM",
        description: "muda o tipo de dano para trevas."
      },
      {
        cost: "+3 PM",
        description: "o enxame vira Enorme (quadrado de 6m de lado)."
      },
      {
        cost: "+3 PM",
        description: "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao inv\xE9s de um quadrado."
      },
      {
        cost: "+4 PM",
        description: "o enxame inclui parasitas inchados que explodem e criam novos enxames. No in\xEDcio de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um j\xE1 existente \xE0 sua escolha. Voc\xEA pode mover todos os enxames com uma \xFAnica a\xE7\xE3o de movimento, mas eles n\xE3o podem ocupar o mesmo espa\xE7o. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "aumenta o dano de frio em +2d6 e o dano de corte em +2d6."
      },
      {
        cost: "+4 PM",
        description: "muda a \xE1rea para cilindro com 6m de raio e 6m de altura e a dura\xE7\xE3o para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na \xE1rea (sem teste de resist\xEAncia). A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno dif\xEDcil e obriga criaturas na \xE1rea a fazer testes de Acrobacia para equil\xEDbrio (veja a p\xE1gina [[Per\xEDcias T20|Per\xEDcias]]). Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+9 PM",
        description: "muda alvo para criaturas escolhidas. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o efeito para afetar magias de at\xE9 3\xBA c\xEDrculo. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o efeito para afetar magias de at\xE9 4\xBA c\xEDrculo. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\xE3o."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para cena ou at\xE9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\xE7\xE3o livre, voc\xEA pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\xBA C\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, pode alterar a apar\xEAncia de criaturas escolhidas na \xE1rea, como se usando ''Disfarce Ilus\xF3rio''."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, a dura\xE7\xE3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\xEA inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\xE7\xE3o que ativar\xE1 a marca. Normalmente, ser\xE1 cometer um crime (roubar, matar...) ou outra coisa contr\xE1ria \xE0s Obriga\xE7\xF5es & Restri\xE7\xF5es de sua divindade. Sempre que a marca \xE9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \xE9 um estigma por si s\xF3, j\xE1 que esta magia normalmente \xE9 lan\xE7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\xF3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\xE7\xE3o''."
      },
      {
        cost: "+4 PM",
        description: "aumenta a dura\xE7\xE3o para 1 ano ou at\xE9 ser descarregada."
      },
      {
        cost: "+2 PM",
        description: "aumenta o comprimento em +15m e altura em +3m, at\xE9 60m de comprimento e 9m de altura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para sustentada e adiciona uma nova escolha, ''Ess\xEAncia:'' A muralha \xE9 invis\xEDvel e indestrut\xEDvel \u2014 imune a qualquer forma de dano e n\xE3o afetada por nenhuma magia. Ela n\xE3o pode ser atravessada nem mesmo por criaturas incorp\xF3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\xE1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\xE3o, n\xE3o vencem a muralha, mas magias lan\xE7adas diretamente sobre uma criatura ou \xE1rea, como Sono, podem ser lan\xE7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+4 PM",
        description: "sua pele ganha aspecto e dureza do a\xE7o. Voc\xEA recebe resist\xEAncia a dano 10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para toque, o alvo para 1 criatura, a dura\xE7\xE3o para 1d4 rodadas e adiciona Resist\xEAncia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\xE1tua inerte e sem consci\xEAncia. A est\xE1tua possui os mesmos PV da criatura e resist\xEAncia a dano 8; se for quebrada, a criatura morrer\xE1. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "como acima, mas com dura\xE7\xE3o permanente. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em 1d8+4."
      },
      {
        cost: "+2 PM",
        description: "aumenta a resist\xEAncia a dano em +2."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\xE3o seguir a mesma divindade que voc\xEA."
      },
      {
        cost: "+4 PM",
        description: "muda o b\xF4nus para +10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\xBA C\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa a sua escolha que exija at\xE9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        cost: "+9 PM",
        description: "muda a dura\xE7\xE3o para 1 semana ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa que exija at\xE9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      },
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\xE7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\xE3o ou guardi\xE3o. O resto segue normal."
      },
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        cost: "+7 PM",
        description: "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\xFAmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\xE3o ou m\xE9dico. O restante da magia segue normal. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta a quantidade de cura em 1d8+2."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, se um aliado estiver com PV negativos, seus PV s\xE3o levados a 0 e ent\xE3o a cura \xE9 aplicada."
      },
      {
        cost: "+4 PM",
        description: "remove todas as condi\xE7\xF5es listadas, em vez de apenas uma."
      },
      {
        cost: "+3 PM",
        description: "aumenta o limite de peso em 100kg."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +5."
      },
      {
        cost: "+2 PM",
        description: "em vez do normal, a magia teletransporta os alvos para seu santu\xE1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\xE2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\xE1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\xEA s\xF3 pode ter um santu\xE1rio por vez."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o completa, a dura\xE7\xE3o para cena e adiciona sacrif\xEDcio de 1 PM. Em vez do normal, voc\xEA cria um c\xEDrculo de 1,5m de di\xE2metro no ch\xE3o, que transporta qualquer criatura que pisar nele. O destino \xE9 escolhido quando a magia \xE9 lan\xE7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\xEA. O c\xEDrculo \xE9 t\xEAnue e praticamente invis\xEDvel. Voc\xEA pode marc\xE1-lo de alguma forma (por exemplo, lan\xE7ando-o sobre uma plataforma elevada). Se n\xE3o fizer isso, algu\xE9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\xEA ter\xE1 uma armadilha bastante eficaz! Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o raio da \xE1rea em +3m."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano dos tent\xE1culos em +2d6."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\xE1rios em +10."
      },
      {
        cost: "+2 PM",
        description: "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\xE1lico e sem express\xF5es. Voc\xEA recebe resist\xEAncia a dano 15/adamante e imunidade a atordoamento, dano n\xE3o letal, doen\xE7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\xE3o precisa respirar."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, o alvo para at\xE9 cinco criaturas e a dura\xE7\xE3o para instant\xE2nea. Os alvos entram em uma planta (de tamanho M\xE9dio ou maior) e saem em outra planta do mesmo tamanho a at\xE9 100km de dist\xE2ncia, especificada em dire\xE7\xE3o e dist\xE2ncia aproximadas (como \u201C50km ao norte\u201D)."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 10 criaturas. Requer 4\xB0 c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para cone de 4,5m e o alvo para criaturas na \xE1rea."
      },
      {
        cost: "+2 PM",
        description: "aumenta a regenera\xE7\xE3o de PV em 1d8+1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        cost: "+2 PM",
        description: "aumenta a \xE1rea em +6m de raio."
      },
      {
        cost: "+5 PM",
        description: "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \xE1rea. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        cost: "+5 PM",
        description: "voc\xEA convoca um elemental de cada tipo. Voc\xEA pode ordenar que cada elemental auxilie voc\xEA ou seus aliados. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "como normal, mas voc\xEA pode escolher um tipo de criaturas sem limita\xE7\xE3o (todos os animais, todos os monstros etc.)."
      },
      {
        cost: "+8 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \xE9 desviado pelo efeito e n\xE3o o atinge. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "aumenta o dano total em +2d12 e o dano m\xEDnimo em +1d12."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para toque e o alvo para at\xE9 5 criaturas volunt\xE1rias que estejam de m\xE3os dadas. Depois que a magia \xE9 lan\xE7ada, as criaturas podem soltar as m\xE3os. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode caminhar sobre a \xE1gua ou outros l\xEDquidos com seu deslocamento normal. Entretanto, isso n\xE3o protege contra qualquer efeito que o l\xEDquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\xEDcia mesmo sem treinamento."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 5 criaturas."
      },
      {
        cost: "+5 PM",
        description: "pode dissipar ''Aprisionamento''."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, o alvo tamb\xE9m pode morrer por perda de PV ou se voc\xEA morrer (um teste de Fortitude anula a morte)."
      },
      {
        cost: "+3 PM",
        description: "aumenta o b\xF4nus dos testes em +5, e o dano de impacto em +1d6+6."
      },
      {
        cost: "+5 PM",
        description: "o muro \xE9 feito de uma massa de esqueletos animados. Quando voc\xEA lan\xE7a a magia e no in\xEDcio de cada um de seus turnos, todos os inimigos adjacentes \xE0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\xE3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\xE7\xE3o padr\xE3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      },
      {
        cost: "+3 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o, o alcance para curto, o alvo para 1 criatura e a dura\xE7\xE3o para instant\xE2nea. Esta magia s\xF3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\xE1rias t\xEAm direito a um teste de Vontade para negar o efeito."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para \xE1rea de explos\xE3o de 6m de raio. Em vez de um raio, voc\xEA dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \xE1rea."
      }
    ]
  },
  {
    name: "Rel\xE2mpago",
    execution: "completa",
    range: "m\xE9dio",
    effect: "1 enxame M\xE9dio",
    duration: "sustentada",
    resistence: "Fortitude reduz \xE0 metade",
    target: "1 criatura ou objeto",
    area: "c\xEDrculo com 90m de raio",
    description: "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Voc\xEA pode pensar em termos gerais (\u201Cum elfo\u201D, \u201Calgo de metal\u201D) ou espec\xEDficos (\u201CGwen, a elfa\u201D, \u201Cuma espada longa\u201D). A magia indica a dire\xE7\xE3o e dist\xE2ncia da criatura ou objeto mais pr\xF3ximo desse tipo, caso esteja ao alcance. Voc\xEA pode movimentar-se para continuar procurando. Procurar algo muito espec\xEDfico (\u201Ca espada longa encantada do Bar\xE3o Rulyn\u201D) exige que voc\xEA tenha em mente uma imagem precisa do objeto; caso a imagem n\xE3o seja muito pr\xF3xima da verdade, a magia falha, mas voc\xEA gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    enhancements: [
      {
        cost: "+12 PM",
        description: "muda a \xE1rea para esfera com 9m de raio. Em vez do normal, cria um efeito de disjun\xE7\xE3o. Todas as magias na \xE1rea s\xE3o automaticamente dissipadas e todos os itens m\xE1gicos na \xE1rea, exceto aqueles que voc\xEA estiver carregando, viram itens mundanos (com direito a um teste de resist\xEAncia para evitar esse efeito). Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d12."
      },
      {
        cost: "+3 PM",
        description: "muda a resist\xEAncia para Reflexos reduz \xE0 metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfura\xE7\xE3o). O resto da magia segue normal."
      },
      {
        cost: "+5 PM",
        description: "aumenta o n\xFAmero de enxames em +1. Eles n\xE3o podem ocupar o mesmo espa\xE7o. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a resist\xEAncia para Reflexos reduz \xE0 metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre \xE1cido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1. Todas as criaturas e objetos devem ser afetados da mesma forma."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, o alvo recebe +4 nos tr\xEAs atributos f\xEDsicos. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        cost: "+7 PM",
        description: "aumenta o b\xF4nus em +2. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, se o alvo coberto pelo muco \xE1cido estiver usando armadura ou escudo, o item \xE9 corro\xEDdo. Isso reduz o b\xF4nus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu b\xF4nus (veja a per\xEDcia Of\xEDcio, na p\xE1gina [[Per\xEDcias T20|Per\xEDcias]])."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano inicial e o dano por rodada em +1d6."
      },
      {
        cost: "+1 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o padr\xE3o, o alcance para toque e o alvo para 1 criatura ou 1 objeto."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para cena. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a at\xE9 3m dele se tornam invis\xEDveis, como no efeito normal da magia (ainda ficam vis\xEDveis caso fa\xE7am uma a\xE7\xE3o hostil). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica vis\xEDvel. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura. Em vez do normal, voc\xEA cria um elo mental que permite que voc\xEA veja e ou\xE7a atrav\xE9s dos sentidos da criatura, se gastar uma a\xE7\xE3o de movimento. Uma criatura involunt\xE1ria pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "Truque",
        description: "muda a \xE1rea para alvo voc\xEA. Em vez do normal, voc\xEA sabe onde fica o norte e recebe +5 em testes de Sobreviv\xEAncia para se orientar."
      },
      {
        cost: "+5 PM",
        description: "aumenta a \xE1rea em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Se n\xE3o estiver em combate, a criatura s\xF3 pode fazer o teste de Vontade a cada hora. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano mental. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, o alvo recebe +4 nos tr\xEAs atributos mentais. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        cost: "+7 PM",
        description: "aumenta o b\xF4nus em +2. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "a forma escolhida recebe uma habilidade de sentidos entre faro, vis\xE3o na penumbra e vis\xE3o no escuro."
      },
      {
        cost: "+3 PM",
        description: "a forma escolhida recebe percep\xE7\xE3o \xE0s cegas. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para toque, o alvo para 1 criatura e adiciona resist\xEAncia (Vontade anula)."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para m\xE9dio, o alvo para 1 criatura e a resist\xEAncia para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura n\xE3o pode atacar, falar e lan\xE7ar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras caracter\xEDsticas n\xE3o mudam. No in\xEDcio de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna \xE0 sua forma normal e a magia termina. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "se mudar para formas n\xE3o humanoides, pode escolher uma Forma Selvagem Superior. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+12 PM",
        description: "al\xE9m do normal, no in\xEDcio de seus turnos o alvo pode mudar de forma novamente, como uma a\xE7\xE3o livre, fazendo novas escolhas. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "Truque",
        description: "muda o alcance para toque, a \xE1rea para alvo (1 criatura com 0 PV ou menos), a dura\xE7\xE3o para instant\xE2nea e a resist\xEAncia para Fortitude anula. Em vez do normal, voc\xEA canaliza o ''Miasma'' contra uma v\xEDtima. Se falhar na resist\xEAncia, ela morre e voc\xEA recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+3 PM",
        description: "muda o tipo do dano para trevas."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena."
      },
      {
        cost: "+3 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM."
      },
      {
        cost: "+3 PM",
        description: "aumenta o tamanho da montaria em uma categoria. Isso tamb\xE9m aumenta o n\xFAmero de criaturas que ela pode carregar \u2014 duas para uma criatura Enorme, seis para Colossal. Uma \xFAnica criatura controla a montaria; as outras apenas s\xE3o deslocadas."
      },
      {
        cost: "+3 PM",
        description: "muda a criatura para um aliado montaria mestre. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus em +1, limitado pelo c\xEDrculo m\xE1ximo de magia que voc\xEA pode lan\xE7ar."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para m\xE9dio. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "tamb\xE9m cura todo o dano causado por venenos."
      },
      {
        cost: "+2 PM",
        description: "em vez de uma, remove todas as condi\xE7\xF5es listadas."
      },
      {
        cost: "+3 PM",
        description: "tamb\xE9m permite que o alvo solte qualquer item amaldi\xE7oado que esteja segurando (mas n\xE3o remove a maldi\xE7\xE3o do item em si)."
      },
      {
        cost: "Truque",
        description: "muda a dura\xE7\xE3o para cena e a resist\xEAncia para nenhuma. Em vez do normal, cria um facho de luz, que ilumina a \xE1rea da magia. Uma vez por rodada, voc\xEA pode mudar a dire\xE7\xE3o do facho como uma a\xE7\xE3o livre."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, criaturas vivas a sua escolha na \xE1rea curam 4d8 pontos de vida; o restante sofre o dano normalmente."
      },
      {
        cost: "+3 PM",
        description: "criaturas que falhem na resist\xEAncia ficam cegas por 1d4 rodadas."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cria uma cabana que comporta at\xE9 10 criaturas confortavelmente. Descansar nesse espa\xE7o concede recupera\xE7\xE3o de PV e PM igual ao dobro do n\xEDvel. Para todos os efeitos \xE9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\xEDlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\xEAm 15 PV, RD 5 e s\xE3o protegidas por um efeito id\xEAntico \xE0 magia ''Tranca Arcana''. As paredes t\xEAm 200 PV e RD 5."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cria uma cabana que comporta at\xE9 10 criaturas M\xE9dias. Descansar nesse espa\xE7o concede recupera\xE7\xE3o confort\xE1vel (recupera PV e PM igual ao dobro do n\xEDvel). Para todos os efeitos \xE9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\xEDlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\xEAm 15 PV, RD 5 e s\xE3o protegidas por um efeito id\xEAntico \xE0 magia ''Tranca Arcana''. As paredes t\xEAm 200 PV e RD 5."
      },
      {
        cost: "+3 PM",
        description: "em vez do normal, cria um espa\xE7o extradimensional, similar a uma caverna vazia e escura, que comporta at\xE9 10 criaturas M\xE9dias. A entrada para o espa\xE7o precisa estar desenhada em um objeto fixo como uma grande pedra ou \xE1rvore. Qualquer criatura que atravesse a entrada consegue entrar no espa\xE7o. Nenhum efeito a partir do mundo real afeta o espa\xE7o e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espa\xE7o extradimensional surge no mundo real na \xE1rea vazia mais pr\xF3xima da entrada quando a dura\xE7\xE3o da magia acaba. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "em vez do normal, cria uma mans\xE3o extradimensional que comporta at\xE9 100 criaturas M\xE9dias, com quartos luxuosos, comida e bebida e dez servos fantasmag\xF3ricos (como na magia ''Servos Invis\xEDveis''). Descansar na mans\xE3o concede recupera\xE7\xE3o luxuosa (recupera PV e PM igual ao triplo do n\xEDvel). A mans\xE3o tem uma \xFAnica entrada, uma porta feita de luz. Voc\xEA pode deix\xE1-la vis\xEDvel ou invis\xEDvel como uma a\xE7\xE3o livre e apenas criaturas escolhidas por voc\xEA podem passar. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6."
      }
    ]
  },
  {
    name: "Rogar Maldi\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "sustentada",
    resistence: "Fortitude anula",
    description: "Voc\xEA entoa c\xE2nticos mal\xE9ficos que amaldi\xE7oam uma v\xEDtima, criando efeitos variados. Ao lan\xE7ar a magia, escolha entre os seguintes.\n\n\n\n''Debilidade'': o alvo fica esmorecido e n\xE3o pode se comunicar ou lan\xE7ar magias. Ainda reconhece seus aliados e pode segui-los e ajud\xE1-los, mas sempre de maneira simpl\xF3ria.\n\n\n\n''Doen\xE7a'': muda a dura\xE7\xE3o para instant\xE2nea. O alvo contrai uma doen\xE7a a sua escolha, que o afeta imediatamente (sem per\xEDodo de incuba\xE7\xE3o).\n\n\n\n''Fraqueza'': o alvo fica debilitado e lento.\n\n\n\n''Isolamento'': o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a vis\xE3o, fica cego. Se perder a audi\xE7\xE3o, fica surdo. Se perder o olfato ou paladar, n\xE3o pode usar a habilidade faro. Se perder o tato, fica ca\xEDdo e n\xE3o pode se levantar.\n\n\n\nVoc\xEA tamb\xE9m pode inventar sua pr\xF3pria maldi\xE7\xE3o, usando esses exemplos como sugest\xF5es, mas o mestre tem a palavra final sobre o efeito.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de efeitos que voc\xEA pode escolher em +1. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a dura\xE7\xE3o para permanente e resist\xEAncia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\xE7\xE3o, mas por 1 rodada. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Runa de Prote\xE7\xE3o",
    execution: "completa",
    target: "1 objeto ou passagem de at\xE9 6m de largura",
    duration: "permanente at\xE9 ser descarregada",
    resistence: "nenhum ou Reflexos reduz \xE0 metade",
    description: "Esta magia protege um objeto que possa ser aberto ou uma passagem de at\xE9 6m de largura. Quando uma criatura abre o objeto ou passa pela passagem, a runa explode, causando 6d6 pontos de dano em todos os alvos a at\xE9 3m. A criatura que ativa a runa n\xE3o tem direito a teste de resist\xEAncia; outras criaturas na \xE1rea t\xEAm direito a um teste de Reflexos para reduzir o dano \xE0 metade. Quando lan\xE7a a magia, voc\xEA escolhe o tipo de dano, entre \xE1cido, eletricidade, fogo, frio, luz ou trevas.\n\n\n\nVoc\xEA pode determinar que a runa se ative apenas em condi\xE7\xF5es espec\xEDficas \u2014 por exemplo, apenas por goblins ou apenas por mortos-vivos. Voc\xEA tamb\xE9m pode criar uma palavra m\xE1gica que impe\xE7a a runa de se ativar.\n\n\n\nUm personagem pode encontrar a runa com um teste de Investiga\xE7\xE3o e desarm\xE1-la com um teste de Ladinagem (ambos CD 28).\n\n\n\n''Componente material'': p\xF3 de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invis\xEDvel.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \xE9 lido. O objeto tamb\xE9m sofre o dano (possivelmente sendo destru\xEDdo)."
      },
      {
        cost: "+1 PM",
        description: "este aprimoramento exige que voc\xEA lance uma magia de at\xE9 2\xBA c\xEDrculo como parte da execu\xE7\xE3o da ''Runa de Prote\xE7\xE3o''. Quando a runa \xE9 ativada, em vez do efeito normal, lan\xE7a essa magia sobre a criatura que o ativou (se for uma magia de \xE1rea, a \xE1rea \xE9 centrada na criatura)."
      },
      {
        cost: "+3 PM",
        description: "como o aprimoramento acima, mas al\xE9m de lan\xE7ar a magia, a runa ''tamb\xE9m'' causa o dano do efeito normal. Voc\xEA define a ordem que os efeitos acontecem."
      }
    ]
  },
  {
    name: "Salto Dimensional",
    execution: "padr\xE3o",
    range: "curto",
    target: "voc\xEA",
    description: "Esta magia transporta voc\xEA para outro lugar dentro do alcance. Voc\xEA n\xE3o precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imagin\xE1-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas n\xE3o podem agir at\xE9 a rodada seguinte. Esta magia n\xE3o permite que voc\xEA apare\xE7a dentro de um corpo s\xF3lido; se o ponto de chegada n\xE3o tem espa\xE7o livre, voc\xEA ressurge na \xE1rea vazia mais pr\xF3xima.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alcance para m\xE9dio."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para voc\xEA e uma criatura volunt\xE1ria. Voc\xEA pode escolher este aprimoramento mais vezes para aumentar o n\xFAmero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o. Em vez do normal, voc\xEA salta para um espa\xE7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para longo."
      }
    ]
  },
  {
    name: "Servos Invis\xEDveis",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "linha",
    resistence: "Reflexos reduz \xE0 metade",
    target: "1 criatura",
    duration: "instant\xE2nea",
    effect: "at\xE9 5 criaturas conjuradas",
    description: "Voc\xEA cria at\xE9 tr\xEAs servos invis\xEDveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o ch\xE3o ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mans\xE3o ou pequena torre ou para preparar um acampamento nos ermos para voc\xEA e seus aliados (veja a per\xEDcia Sobreviv\xEAncia, na p\xE1gina [[Per\xEDcias T20|Per\xEDcias]]).\n\n\n\nEles tamb\xE9m podem ajud\xE1-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma po\xE7\xE3o, mas isso consome sua energia m\xE1gica. Voc\xEA pode \u201Cgastar\u201D um servo para receber um b\xF4nus n\xE3o cumulativo de +2 em um teste de per\xEDcia (exceto testes de ataque e resist\xEAncia). Os servos n\xE3o s\xE3o criaturas reais; n\xE3o podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resist\xEAncia ou teste oposto \u2014 falhar\xE3o automaticamente no teste e ser\xE3o destru\xEDdos",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de efeitos que voc\xEA pode escolher em +1. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda a dura\xE7\xE3o para permanente e resist\xEAncia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\xE7\xE3o, mas por 1 rodada. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano em +2d6."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \xE9 lido. O objeto tamb\xE9m sofre o dano (possivelmente sendo destru\xEDdo)."
      },
      {
        cost: "+1 PM",
        description: "este aprimoramento exige que voc\xEA lance uma magia de at\xE9 2\xBA c\xEDrculo como parte da execu\xE7\xE3o da ''Runa de Prote\xE7\xE3o''. Quando a runa \xE9 ativada, em vez do efeito normal, lan\xE7a essa magia sobre a criatura que o ativou (se for uma magia de \xE1rea, a \xE1rea \xE9 centrada na criatura)."
      },
      {
        cost: "+3 PM",
        description: "como o aprimoramento acima, mas al\xE9m de lan\xE7ar a magia, a runa ''tamb\xE9m'' causa o dano do efeito normal. Voc\xEA define a ordem que os efeitos acontecem."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para m\xE9dio."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para voc\xEA e uma criatura volunt\xE1ria. Voc\xEA pode escolher este aprimoramento mais vezes para aumentar o n\xFAmero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        cost: "+2 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o. Em vez do normal, voc\xEA salta para um espa\xE7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        cost: "+3 PM",
        description: "muda o alcance para longo."
      },
      {
        cost: "+1 PM",
        description: "muda a \xE1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \xE1rea de sil\xEAncio com 3m de raio. Se lan\xE7ar a magia num objeto de uma criatura involunt\xE1ria, ela tem direito a um teste de Vontade para anul\xE1-la."
      },
      {
        cost: "+2 PM",
        description: "muda a dura\xE7\xE3o para cena. Em vez do normal, nenhum som pode deixar a \xE1rea, mas criaturas dentro da \xE1rea podem falar, ouvir e lan\xE7ar magias com palavras m\xE1gicas normalmente."
      }
    ]
  },
  {
    name: "Soco de Arsenal",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Ningu\xE9m sabe se Mestre Arsenal foi realmente o criador desta magia \u2014 mas ele foi o primeiro a utiliz\xE1-la. O conjurador fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6 + mod. For\xE7a pontos de dano de impacto. A v\xEDtima \xE9 empurrada 3m na dire\xE7\xE3o oposta \xE0 sua (ou 1,5m se passar na resist\xEAncia).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA, a dura\xE7\xE3o para cena e a resist\xEAncia para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura M\xE9dia pode atacar advers\xE1rios a at\xE9 4,5m, por exemplo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+4 PM",
        description: "aumenta a dist\xE2ncia do efeito de empurrar em +3m."
      },
      {
        cost: "+5 PM",
        description: "muda o tipo do dano para ess\xEAncia."
      }
    ]
  },
  {
    name: "Sopro das Uivantes",
    execution: "padr\xE3o",
    range: "6m",
    area: "cone",
    duration: "instant\xE2nea",
    resistence: "Fortitude parcial",
    description: "Voc\xEA sopra ar g\xE9lido que causa 4d6 pontos de dano de frio (Fortitude reduz \xE0 metade). Criaturas de tamanho M\xE9dio ou menor que falhem na resist\xEAncia s\xE3o empurradas 6m na dire\xE7\xE3o oposta. Se houver uma parede ou outro objeto s\xF3lido (mas n\xE3o uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano de frio em +2d6."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, criaturas que falhem no teste de Fortitude ficam ca\xEDdas."
      },
      {
        cost: "+3 PM",
        description: "aumenta o tamanho m\xE1ximo das criaturas afetadas em uma categoria. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Sussurros Insanos",
    range: "curto",
    target: "1 humanoide",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Voc\xEA murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura."
      }
    ]
  },
  {
    name: "Tempestade Divina",
    range: "longo",
    area: "cilindro com 9m de raio e 9m de altura",
    duration: "cena",
    description: "Esta magia s\xF3 pode ser usada em ambientes abertos. A \xE1rea fica sujeita a um vendaval \u2014 ataques \xE0 dist\xE2ncia sofrem penalidade de \u20135, chamas s\xE3o apagadas e n\xE9voas e fuma\xE7as s\xE3o dissipadas em 1 rodada. Voc\xEA tamb\xE9m pode causar chuva (\u20135 em testes de Percep\xE7\xE3o), neve (como chuva, mais a \xE1rea se torna terreno dif\xEDcil) ou granizo (como chuva, mais 1 ponto de dano de impacto por rodada, no in\xEDcio de seus turnos). Criaturas na \xE1rea recebem uma penalidade de \u201315m no deslocamento de voo (m\xEDnimo 1,5m).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, uma vez por rodada, como uma a\xE7\xE3o padr\xE3o, voc\xEA pode fazer um rel\xE2mpago cair sobre um alvo na \xE1rea, causando 3d8 pontos de dano de eletricidade (Reflexos reduz \xE0 metade)."
      },
      {
        cost: "+1 PM",
        description: "se escolheu causar granizo, muda o dano para 1d6."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1 dado do mesmo tipo."
      },
      {
        cost: "+3 PM",
        description: "se escolheu causar chuva, ela revela criaturas e objetos invis\xEDveis na \xE1rea."
      },
      {
        cost: "+7 PM",
        description: "se escolheu causar neve, criaturas na \xE1rea sofrem 2d6 pontos de dano de frio no in\xEDcio de seus turnos."
      }
    ]
  },
  {
    name: "Toque Vamp\xEDrico",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    resistence: "Fortitude reduz \xE0 metade",
    description: "Sua m\xE3o brilha com energia sombria, causando 6d6 pontos de dano de trevas. Voc\xEA recupera pontos de vida iguais \xE0 metade do dano causado (se causou algum dano).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "como parte da execu\xE7\xE3o da magia,\xA0voc\xEA pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais \xE0 metade do dano da magia."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6"
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para cena. Em vez do normal, a cada rodada voc\xEA pode gastar uma a\xE7\xE3o padr\xE3o para tocar 1 criatura e causar 3d6 pontos de dano. Voc\xEA recupera pontos de vida iguais \xE0 metade do dano causado. Requer 3\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Velocidade",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "cena",
    description: "O alvo pode realizar uma a\xE7\xE3o padr\xE3o ou de movimento adicional por turno. Esta a\xE7\xE3o n\xE3o pode ser usada para lan\xE7ar magias e ativar engenhocas.",
    enhancements: [
      {
        cost: "+7 PM",
        description: "muda o alvo para criaturas no alcance. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+7 PM",
        description: "muda o alcance para pessoal e o alvo para voc\xEA. Voc\xEA acelera sua mente, al\xE9m do seu corpo. A a\xE7\xE3o adicional pode ser usada para lan\xE7ar magias e ativar engenhocas. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Vestimenta da F\xE9",
    range: "toque",
    target: "1 traje",
    duration: "1 dia",
    description: "Voc\xEA fortalece uma indument\xE1ria com o poder de sua f\xE9. Isso aumenta o b\xF4nus de Defesa de uma armadura ou escudo em +2 (isso \xE9 uma melhoria no item, portanto \xE9 cumulativa com outras magias). No caso de um traje, ele passa a oferecer +2 na Defesa e continua contando como se voc\xEA n\xE3o estivesse usando armadura.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "o objeto tamb\xE9m oferece o mesmo b\xF4nus em testes de resist\xEAncia. Requer 3\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "aumenta o b\xF4nus em +1."
      },
      {
        cost: "+7 PM",
        description: "o objeto tamb\xE9m oferece resist\xEAncia a dano 5. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Voz Divina",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Voc\xEA pode conversar com criaturas de qualquer ra\xE7a e tipo: animal, construto, esp\xEDrito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura n\xE3o for capaz de falar, mas respeitando os limites da Intelig\xEAncia dela. A atitude dessas criaturas n\xE3o \xE9 alterada, mas voc\xEA pode usar a per\xEDcia Diplomacia para tentar mudar sua atitude.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "voc\xEA concede um pouco de vida a um cad\xE1ver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo \xE9 limitado ao que ele tinha enquanto vivo e suas respostas s\xE3o curtas e enigm\xE1ticas. Um corpo s\xF3 pode ser alvo desta magia uma vez. Ela tamb\xE9m n\xE3o funciona em um corpo cuja cabe\xE7a tenha sido destru\xEDda."
      },
      {
        cost: "+1 PM",
        description: "voc\xEA pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas t\xEAm percep\xE7\xE3o limitada de seus arredores e normalmente fornecem respostas simpl\xF3rias."
      }
    ]
  },
  {
    name: "\xC2ncora Dimensional",
    range: "curto",
    duration: "cena",
    description: "O alvo \xE9 envolvido por um campo de for\xE7a cor de esmeralda que impede qualquer movimento planar. Isso inclui todas as magias de convoca\xE7\xE3o (como ''Salto Dimensional'' e ''Teletransporte''), viagens astrais e a habilidade incorp\xF3reo.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para m\xE9dio, a \xE1rea para c\xEDrculo de 3m de raio e o alvo para criaturas escolhidas."
      },
      {
        cost: "+2 PM",
        description: "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espa\xE7o dentro do alcance. O ponto precisa ser fixo, mas n\xE3o precisa de nenhum apoio ou superf\xEDcie (pode simplesmente flutuar no ar). O alvo n\xE3o pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resist\xEAncia a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do [[Paladino T20|Paladino]])."
      },
      {
        cost: "+4 PM",
        description: "como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resist\xEAncia a dano 40."
      },
      {
        cost: "+4 PM",
        description: "muda o alvo para \xE1rea de cubo de 9m, a dura\xE7\xE3o para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da \xE1rea."
      }
    ]
  },
  {
    name: "Anular a Luz",
    execution: "padr\xE3o",
    range: "pessoal",
    area: "esfera de 6m de raio",
    description: "Esta magia cria uma onda de escurid\xE3o que causa diversos efeitos. Todas as magias de 3\xBA c\xEDrculo ou menor ativas na \xE1rea s\xE3o dissipadas se voc\xEA passar num teste de Religi\xE3o contra a CD de cada magia. Seus aliados na \xE1rea s\xE3o protegidos por uma aura sombria e recebem +4 na Defesa at\xE9 o fim da cena. Inimigos na \xE1rea ficam enjoados por 1d4 rodadas. ''Anular a Luz'' anula ''Dispersar as Trevas''.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus na Defesa em +1."
      },
      {
        cost: "+4 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 4\xBA."
      },
      {
        cost: "+9 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 5\xBA."
      }
    ]
  },
  {
    name: "Banimento",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Vontade parcial",
    description: "Voc\xEA expulsa criaturas que n\xE3o s\xE3o naturais deste mundo. Um alvo nativo de outro mundo, como muitas criaturas do tipo esp\xEDrito, \xE9 teletransportado de volta para um lugar aleat\xF3rio de seu mundo de origem. J\xE1 um alvo morto-vivo tem sua conex\xE3o com as energias negativas quase completamente rompida, sendo reduzido a 1d6 PV. Se passar na resist\xEAncia, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.\n\n\n\nSe voc\xEA tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resist\xEAncia aumenta em +2 por item. Por exemplo, se lan\xE7ar a magia contra dem\xF4nios do frio (vulner\xE1veis a \xE1gua benta e que odeiam luz e calor) enquanto segura um frasco de \xE1gua benta e uma tocha acesa, a CD do teste de resist\xEAncia aumenta em +4. O mestre decide se determinado item \xE9 forte o bastante contra a criatura para isso.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      }
    ]
  },
  {
    name: "Coluna de Chamas",
    execution: "padr\xE3o",
    area: "cilindro com 3m de raio e 30m de altura",
    duration: "instant\xE2nea",
    description: "Um pilar de fogo sagrado desce dos c\xE9us, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de eletricidade nas criaturas e objetos livres na \xE1rea.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano de fogo em +1d6."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano de eletricidade em +1d6."
      }
    ]
  },
  {
    name: "Comunh\xE3o com a Natureza",
    execution: "completa",
    range: "pessoal",
    target: "voc\xEA",
    duration: "1 dia",
    description: "Ap\xF3s uma breve uni\xE3o com a natureza local, voc\xEA obt\xE9m informa\xE7\xF5es e intui\xE7\xF5es sobre a regi\xE3o em que est\xE1, numa dist\xE2ncia equivalente a um dia de viagem. Voc\xEA recebe 6d4 dados de aux\xEDlio. Enquanto a magia durar, sempre que for realizar um teste de per\xEDcia em \xE1reas naturais, voc\xEA pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como b\xF4nus no teste. A magia termina se voc\xEA ficar sem dados.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de dados de aux\xEDlio em +2."
      },
      {
        cost: "+4 PM",
        description: "muda o tipo dos dados de aux\xEDlio para d6."
      },
      {
        cost: "+8 PM",
        description: "muda o tipo dos dados de aux\xEDlio para d8."
      }
    ]
  },
  {
    name: "Contato Extraplanar",
    execution: "completa",
    target: "voc\xEA",
    duration: "1 dia",
    description: "Sua mente viaja at\xE9 outro plano de exist\xEAncia, onde entra em contato com seres extraplanares como g\xEAnios, dem\xF4nios ou elementais. Voc\xEA firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia \xE9 lan\xE7ada, voc\xEA recebe 6d6 dados de aux\xEDlio. Enquanto a magia durar, sempre que for realizar um teste de per\xEDcia, voc\xEA pode gastar qualquer quantidade desses d6 e adicionar o resultado rolado como b\xF4nus no teste. No entanto, esse aux\xEDlio tem um pre\xE7o: sempre que rolar um \u201C6\u201D num desses d6, a entidade \u201Csuga\u201D 1 PM de voc\xEA. A magia termina quando voc\xEA ficar sem dados para rolar, sem PM ou no fim do dia (o que acontecer primeiro).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de dados de aux\xEDlio em +1."
      },
      {
        cost: "+8 PM",
        description: "Muda os dados de aux\xEDlio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade \u201Csuga\u201D 2 PM de voc\xEA. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Controlar \xC1gua",
    execution: "padr\xE3o",
    range: "longo",
    target: "esfera com 30m de raio",
    description: "Voc\xEA pode controlar os movimentos e comportamentos da \xE1gua. Ao lan\xE7ar a magia, escolha um dos efeitos abaixo.\n\n\n\n''Congelar'': toda a \xE1gua mundana na \xE1rea \xE9 congelada. Criaturas nadando na \xE1rea ficam im\xF3veis; escapar exige gastar uma a\xE7\xE3o padr\xE3o e passar num teste de Atletismo ou Acrobacia.\n\n\n\n''Derreter'': gelo mundano na \xE1rea vira \xE1gua e a magia termina. A crit\xE9rio do mestre, isso pode criar terreno dif\xEDcil.\n\n\n\n''Enchente'': eleva o n\xEDvel da \xE1gua mundana na \xE1rea em at\xE9 4,5m. A sua escolha, muda \xE1rea para alvo: uma embarca\xE7\xE3o. O alvo recebe +3m em seu deslocamento pela dura\xE7\xE3o do efeito.\n\n\n\n''Evaporar'': toda a \xE1gua e gelo mundano na \xE1rea evaporam instantaneamente e a magia termina. Elementais da \xE1gua, plantas monstruosas e criaturas com imunidade a frio na \xE1rea sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz \xE0 metade).\n\n\n\n''Partir'': diminui o n\xEDvel de toda \xE1gua mundana na \xE1rea em at\xE9 4,5m. Em um corpo d\u2019\xE1gua raso, isso abre um caminho seco, que pode ser atravessado a p\xE9. Em um corpo d\u2019\xE1gua profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual \xE0 da magia permite ao piloto livrar a embarca\xE7\xE3o). Elementais da \xE1gua na \xE1rea ficam lentos.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d8."
      }
    ]
  },
  {
    name: "Controlar Terra",
    execution: "padr\xE3o",
    range: "longo",
    area: "9 cubos com 1",
    duration: "instant\xE2nea",
    description: "Voc\xEA manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na \xE1rea. Ao lan\xE7ar a magia, escolha.\n\n\n\n''Amolecer'': se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto \xE0s criaturas na \xE1rea (Reflexos reduz \xE0 metade). Se afetar um piso de terra ou pedra, cria terreno dif\xEDcil de areia ou argila, respectivamente.\n\n\n\n''Modelar'': pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes m\xF3veis). Por exemplo, pode transformar um tijolo em uma ma\xE7a, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).\n\n\n\n''Solidificar'': transforma lama ou areia em terra ou pedra. Criaturas com os p\xE9s na superf\xEDcie ficam agarradas. Elas podem se soltar com uma a\xE7\xE3o padr\xE3o e um teste de Acrobacia ou Atletismo.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de cubos de 1,5m em +2."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para pessoal, o alvo para voc\xEA e a dura\xE7\xE3o para 1 dia. Voc\xEA e seu equipamento fundem-se a uma superf\xEDcie ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomod\xE1-lo. Voc\xEA pode voltar ao espa\xE7o adjacente como uma a\xE7\xE3o livre, dissipando a magia. Enquanto mesclado, voc\xEA n\xE3o pode falar ou fazer a\xE7\xF5es f\xEDsicas, mas consegue perceber seus arredores normalmente. Pequenos danos n\xE3o o afetam, mas se o objeto (ou o trecho onde voc\xEA est\xE1 imerso) for destru\xEDdo, a magia \xE9 dissipada, voc\xEA volta a um espa\xE7o livre adjacente e sofre 10d6 pontos de dano de impacto."
      }
    ]
  },
  {
    name: "Convoca\xE7\xE3o Instant\xE2nea",
    execution: "padr\xE3o",
    range: "ilimitado",
    target: "1 objeto de at\xE9 5kg",
    duration: "instant\xE2nea",
    description: "Voc\xEA invoca um objeto de qualquer lugar para sua m\xE3o. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia n\xE3o funciona se o objeto estiver com outra criatura, mas voc\xEA saber\xE1 onde ele est\xE1 e quem o est\xE1 carregando (ou sua descri\xE7\xE3o f\xEDsica, caso n\xE3o conhe\xE7a a criatura).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, at\xE9 1 hora depois que lan\xE7ou a magia, voc\xEA pode gastar uma a\xE7\xE3o de movimento para enviar o objeto de volta para o local em que ele estava antes."
      },
      {
        cost: "+1 PM",
        description: "muda o alvo para um ba\xFA M\xE9dio, a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM. Em vez do normal, voc\xEA esconde o ba\xFA alvo no Et\xE9reo, com at\xE9 250kg de equipamento. A magia faz com que qualquer objeto caiba no ba\xFA, independentemente do seu tamanho. Uma vez escondido, voc\xEA pode convocar o ba\xFA para um espa\xE7o livre adjacente, ou de volta para o Et\xE9reo, como uma a\xE7\xE3o padr\xE3o. ''Componente material:'' ba\xFA constru\xEDdo com mat\xE9ria-prima da melhor qualidade (T$ 1.000). Voc\xEA deve ter em m\xE3os uma miniatura do ba\xFA, no valor de T$ 100, para invocar o ba\xFA verdadeiro."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o peso limite do alvo em um fator de 10, at\xE9 500 kg. Um objeto muito grande ou pesado para aparecer em suas m\xE3os \xE9 teletransportado para um espa\xE7o adjacente a sua escolha."
      }
    ]
  },
  {
    name: "Despertar Consci\xEAncia",
    execution: "completa",
    range: "toque",
    target: "1 animal ou planta",
    duration: "1 dia",
    description: "Voc\xEA desperta a consci\xEAncia de um animal ou planta, que passa a ajud\xE1-lo. O alvo se torna um aliado veterano de um tipo a sua escolha entre ajudante, combatente, fort\xE3o, guardi\xE3o, m\xE9dico ou perseguidor. Se usar esta magia em um aliado que j\xE1 possua, seu n\xEDvel de poder aumenta em um passo (iniciante para veterano, veterano para mestre). Se j\xE1 for um aliado mestre, fornece um b\xF4nus adicional de outro tipo de aliado iniciante (entre as escolhas acima). O alvo ganha Intelig\xEAncia 3d6, +1d4 de Carisma e pode falar os idiomas que voc\xEA conhece.\n\n\n\nSe n\xE3o quiser ter o alvo como aliado, voc\xEA pode pedir que ele proteja um local espec\xEDfico, atacando invasores (nesse caso, use as estat\xEDsticas apropriadas \xE0 criatura; plantas usam as estat\xEDsticas de entes).",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o alvo para 1 escultura mundana inanimada. Al\xE9m do normal, o alvo tem as mesmas caracter\xEDsticas de um construto."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona sacrif\xEDcio de 1 PM."
      }
    ]
  },
  {
    name: "Dificultar Detec\xE7\xE3o",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura ou objeto",
    duration: "1 dia",
    description: "Esta magia oculta a presen\xE7a do alvo contra qualquer meio m\xE1gico de detec\xE7\xE3o, inclusive detectar magia. Um conjurador que lance uma magia de adivinha\xE7\xE3o para detectar a presen\xE7a ou localiza\xE7\xE3o do alvo deve fazer um teste de Vontade. Se falhar, a magia n\xE3o funciona, mas os PM s\xE3o gastos mesmo assim. Se for lan\xE7ada sobre uma criatura, ''Dificultar Detec\xE7\xE3o'' protege tanto a criatura quanto seu equipamento.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o alvo para \xE1rea de cubo de 9m. Qualquer criatura ou objeto na \xE1rea recebe o efeito da magia enquanto estiver dentro dela."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 semana."
      }
    ]
  },
  {
    name: "Dispersar as Trevas",
    range: "pessoal",
    area: "esfera de 6m de raio",
    duration: "instant\xE2nea",
    description: "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3\xBA c\xEDrculo ou menor ativas na \xE1rea s\xE3o dissipadas se voc\xEA passar num teste de Religi\xE3o contra a CD de cada magia. Seus aliados na \xE1rea recebem +4 em testes de resist\xEAncia e resist\xEAncia a trevas 10 at\xE9 o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na \xE1rea ficam cegos por 1d4 rodadas. ''Dispersar as Trevas'' anula ''Anular a Luz''.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o b\xF4nus nas resist\xEAncias em +1."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto, a \xE1rea para alvo 1 criatura e a dura\xE7\xE3o para cena. O alvo fica imune a efeitos de necromancia e trevas."
      },
      {
        cost: "+4 PM",
        description: "muda o c\xEDrculo m\xE1ximo de magias dissipadas para 4\xBA. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Enxame Rubro de Ichabod",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "1 enxame Grade",
    duration: "sustentada",
    resistence: "Reflexos parcial",
    description: "Voc\xEA conjura um enxame de pequenas criaturas da Tormenta, que surge em um ponto a sua escolha. O enxame pode passar pelo espa\xE7o de outras criaturas e n\xE3o impede que outras criaturas entrem no espa\xE7o dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de \xE1cido a qualquer criatura em seu espa\xE7o (Reflexos reduz \xE0 metade). Voc\xEA pode gastar uma a\xE7\xE3o de movimento para mover o enxame com deslocamento de 12m.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma a\xE7\xE3o padr\xE3o e fazer um teste de Acrobacia ou Atletismo para escapar. Se voc\xEA mover o enxame, a criatura fica livre."
      },
      {
        cost: "+2 PM",
        description: "muda o tipo de dano para trevas."
      },
      {
        cost: "+3 PM",
        description: "o enxame vira Enorme (quadrado de 6m de lado)."
      },
      {
        cost: "+3 PM",
        description: "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao inv\xE9s de um quadrado."
      },
      {
        cost: "+4 PM",
        description: "o enxame inclui parasitas inchados que explodem e criam novos enxames. No in\xEDcio de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um j\xE1 existente \xE0 sua escolha. Voc\xEA pode mover todos os enxames com uma \xFAnica a\xE7\xE3o de movimento, mas eles n\xE3o podem ocupar o mesmo espa\xE7o. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Erup\xE7\xE3o Glacial",
    range: "m\xE9dio",
    area: "quadrado de 6m de lado",
    duration: "instant\xE2nea",
    description: "Estacas de gelo irrompem do ch\xE3o. Criaturas na \xE1rea sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam ca\xEDdas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a \xE1rea afetada terreno dif\xEDcil, e concedem cobertura para criaturas dentro da \xE1rea ou atr\xE1s dela. As estacas s\xE3o destru\xEDdas caso sofram qualquer quantidade de dano por fogo m\xE1gico.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o dano de frio em +2d6 e o dano de corte em +2d6."
      },
      {
        cost: "+4 PM",
        description: "muda a \xE1rea para cilindro com 6m de raio e 6m de altura e a dura\xE7\xE3o para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na \xE1rea (sem teste de resist\xEAncia). A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno dif\xEDcil e obriga criaturas na \xE1rea a fazer testes de Acrobacia para equil\xEDbrio (veja a p\xE1gina [[Per\xEDcias T20|Per\xEDcias]]). Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Ferver Sangue",
    range: "curto",
    target: "1 criatura",
    duration: "sustentada",
    resistence: "Fortitude reduz \xE0 metade",
    description: "O sangue do alvo aquece rapidamente at\xE9 entrar em ebuli\xE7\xE3o. Quando a magia \xE9 lan\xE7ada, e no in\xEDcio de cada um de seus turnos, o alvo sofre 3d6 pontos de dano de fogo (Fortitude reduz \xE0 metade). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a at\xE9 3m (Reflexos reduz \xE0 metade). Essa magia n\xE3o afeta criaturas sem sangue, como construtos ou esp\xEDritos.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +1d6."
      },
      {
        cost: "+9 PM",
        description: "muda alvo para criaturas escolhidas. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Globo de Invulnerabilidade",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Voc\xEA \xE9 envolto por uma esfera m\xE1gica brilhante com 3m de raio, que det\xE9m qualquer magia de 2\xBA c\xEDrculo ou menor. Nenhuma magia pode ser lan\xE7ada contra um alvo dentro do globo e magias de \xE1rea n\xE3o o penetram. No entanto, magias ainda podem ser lan\xE7adas de dentro para fora.\n\n\n\n''Dissipar Magia'' s\xF3 dissipa o globo se for usada diretamente sobre voc\xEA, n\xE3o o afetando se usada em \xE1rea. Efeitos m\xE1gicos n\xE3o s\xE3o dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua dura\xE7\xE3o n\xE3o tenha acabado).\n\n\n\nO globo \xE9 im\xF3vel e n\xE3o tem efeito sobre criaturas ou objetos. Ap\xF3s lan\xE7\xE1-lo, voc\xEA pode entrar ou sair livremente.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o efeito para afetar magias de at\xE9 3\xBA c\xEDrculo. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o efeito para afetar magias de at\xE9 4\xBA c\xEDrculo. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Ilus\xE3o Lacerante",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "cena",
    resistence: "Vontade anula",
    description: "Voc\xEA cria uma ilus\xE3o de algum perigo mortal. Quando a magia \xE9 lan\xE7ada, e no in\xEDcio de cada um de seus turnos, o alvo deve fazer um teste de Vontade; se falhar, acredita que a ilus\xE3o \xE9 real e sofre 3d6 pontos de dano. O tipo de dano depende da ilus\xE3o \u2014 fogo para uma ilus\xE3o de chamas, impacto para uma ilus\xE3o de desmoronamento etc. Somente o alvo pode ver a ilus\xE3o, e racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele v\xE1rias vezes). Se o alvo passar em dois testes de Vontade seguidos, anula o efeito.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\xE3o."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      }
    ]
  },
  {
    name: "Imobilizar",
    execution: "padr\xE3o",
    range: "curto",
    duration: "cena",
    description: "O alvo fica paralisado; se passar na resist\xEAncia, em vez disso fica lento. A cada rodada, pode gastar uma a\xE7\xE3o completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Lan\xE7a \xCDgnea de Aleph",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    duration: "instant\xE2nea",
    resistence: "Reflexos parcial",
    description: "Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulc\xE2nicos. Ela dispara um proj\xE9til de magma superaquecido contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfura\xE7\xE3o e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resist\xEAncia, o alvo sofre metade do dano e n\xE3o fica em chamas.\n\n\n\nRespingos de rocha incandescente se espalham com a explos\xE3o, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para cena ou at\xE9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\xE7\xE3o livre, voc\xEA pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\xBA C\xEDrculo."
      }
    ]
  },
  {
    name: "Lendas e Hist\xF3rias",
    execution: "padr\xE3o",
    range: "toque",
    duration: "sustentada",
    description: "Voc\xEA descobre informa\xE7\xF5es sobre uma criatura, objeto ou local que esteja tocando. O que exatamente voc\xEA descobre depende do mestre: talvez voc\xEA n\xE3o descubra tudo que h\xE1 para saber, mas ganhe pistas para continuar a investiga\xE7\xE3o. A cada rodada que mantiver a magia, voc\xEA descobre:\n\n*Todas as informa\xE7\xF5es sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\n\n*Todas as habilidades do alvo. Se for uma criatura, voc\xEA sabe suas estat\xEDsticas de jogo como ra\xE7a, classe, n\xEDvel, atributos, magias, resist\xEAncias e fraquezas. Se for um item m\xE1gico, aprende seu efeito e funcionamento.\n\n*Se alvo est\xE1 sob influ\xEAncia de alguma magia e todas as informa\xE7\xF5es sobre as magias ativas, se houver alguma.",
    enhancements: []
  },
  {
    name: "Manto de Sombras",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "sustentada",
    description: "Voc\xEA fica coberto por um manto de energia sombria. Nesta forma, torna-se incorp\xF3reo (inclui seu equipamento): s\xF3 pode ser afetado por armas m\xE1gicas, magias ou outras criaturas incorp\xF3reas e pode atravessar objetos s\xF3lidos, mas n\xE3o manipul\xE1-los. Contudo, se torna vulner\xE1vel \xE0 luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada.\n\n\n\nVoc\xEA pode gastar uma a\xE7\xE3o de movimento e 1 PM para \u201Centrar\u201D em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, tamb\xE9m do seu tamanho ou maior, em alcance m\xE9dio.",
    enhancements: []
  },
  {
    name: "Miragem",
    execution: "padr\xE3o",
    range: "longo",
    area: "cubo de at\xE9 90m de lado",
    duration: "1 dia",
    resistence: "Vontade desacredita",
    description: "Voc\xEA faz um terreno parecer outro, incluindo sons e cheiros. Uma plan\xEDcie pode parecer um p\xE2ntano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movedi\xE7a pode parecer terra firme ou um precip\xEDcio pode parecer um lago. Voc\xEA pode alterar, incluir e esconder estruturas dentro da \xE1rea, mas n\xE3o criaturas (embora elas possam se esconder nas estruturas ilus\xF3rias).",
    enhancements: [
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, pode alterar a apar\xEAncia de criaturas escolhidas na \xE1rea, como se usando ''Disfarce Ilus\xF3rio''."
      }
    ]
  },
  {
    name: "Miss\xE3o Divina",
    execution: "padr\xE3o",
    target: "1 criatura",
    resistence: "Vontade anula",
    description: "Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou at\xE9 o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a miss\xE3o \u2014 mas, no fim de cada dia em que n\xE3o se esfor\xE7ar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de \u20132 em todos os testes e rolagens.\n\n\n\nA ''Miss\xE3o Divina'' n\xE3o pode for\xE7ar uma criatura a um ato suicida, nem designar uma miss\xE3o imposs\xEDvel (como matar uma criatura que n\xE3o existe).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, a dura\xE7\xE3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\xEA inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\xE7\xE3o que ativar\xE1 a marca. Normalmente, ser\xE1 cometer um crime (roubar, matar...) ou outra coisa contr\xE1ria \xE0s Obriga\xE7\xF5es & Restri\xE7\xF5es de sua divindade. Sempre que a marca \xE9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \xE9 um estigma por si s\xF3, j\xE1 que esta magia normalmente \xE9 lan\xE7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\xF3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\xE7\xE3o''."
      },
      {
        cost: "+4 PM",
        description: "aumenta a dura\xE7\xE3o para 1 ano ou at\xE9 ser descarregada."
      }
    ]
  },
  {
    name: "Muralha Elemental",
    range: "m\xE9dio",
    duration: "cena",
    resistence: "veja texto",
    description: "Esta magia cria uma muralha de um elemento a sua escolha. A muralha pode ter duas formas: uma barreira de at\xE9 30m de comprimento e 3m de altura (ou o contr\xE1rio) ou uma c\xFApula de 3m de raio. Os efeitos variam conforme o tipo de elemento escolhido.\n\n\n\n''Fogo:'' Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a at\xE9 6m. A muralha causa esse dano quando surge e no in\xEDcio de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma \xE1rea onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano \xE0 metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrer\xE1 mais 2d6 pontos de dano).\n\n\n\n''Gelo:'' Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de c\xFApula, pode prender uma ou mais criaturas, mas elas t\xEAm direito a um teste de Reflexos para escapar antes que a c\xFApula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV ser\xE1 rompido. Qualquer efeito de fogo causa dano dobrado \xE0 muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o comprimento em +15m e altura em +3m, at\xE9 60m de comprimento e 9m de altura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para sustentada e adiciona uma nova escolha, ''Ess\xEAncia:'' A muralha \xE9 invis\xEDvel e indestrut\xEDvel \u2014 imune a qualquer forma de dano e n\xE3o afetada por nenhuma magia. Ela n\xE3o pode ser atravessada nem mesmo por criaturas incorp\xF3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\xE1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\xE3o, n\xE3o vencem a muralha, mas magias lan\xE7adas diretamente sobre uma criatura ou \xE1rea, como Sono, podem ser lan\xE7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Pele de Pedra",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Sua pele ganha aspecto e dureza de rocha. Voc\xEA recebe resist\xEAncia a dano 5.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+4 PM",
        description: "sua pele ganha aspecto e dureza do a\xE7o. Voc\xEA recebe resist\xEAncia a dano 10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para toque, o alvo para 1 criatura, a dura\xE7\xE3o para 1d4 rodadas e adiciona Resist\xEAncia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\xE1tua inerte e sem consci\xEAncia. A est\xE1tua possui os mesmos PV da criatura e resist\xEAncia a dano 8; se for quebrada, a criatura morrer\xE1. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "como acima, mas com dura\xE7\xE3o permanente. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Poeira da Podrid\xE3o",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    area: "nuvem com 6m de raio",
    duration: "cena",
    resistence: "Fortitude",
    description: "Voc\xEA manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na \xE1rea. Ao lan\xE7ar a magia, e no in\xEDcio de seus turnos, criaturas na \xE1rea sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz \xE0 metade). Alvos que falharem no teste ficam imunes a magias de cura por uma rodada.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em 1d8+4."
      }
    ]
  },
  {
    name: "Pot\xEAncia Divina",
    execution: "padr\xE3o",
    duration: "sustentada",
    description: "Voc\xEA canaliza o poder de sua divindade. Voc\xEA aumenta uma categoria de tamanho (seu equipamento muda de acordo). Al\xE9m disso, voc\xEA recebe For\xE7a +8 e resist\xEAncia a dano 10. Voc\xEA n\xE3o pode lan\xE7ar magias enquanto estiver sob efeito de ''Pot\xEAncia Divina''.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta a resist\xEAncia a dano em +2."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\xE3o seguir a mesma divindade que voc\xEA."
      }
    ]
  },
  {
    name: "Prote\xE7\xE3o contra Magia",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    description: "Voc\xEA protege o alvo contra efeitos m\xE1gicos nocivos. O alvo recebe +5 em testes de resist\xEAncia contra magias.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o b\xF4nus para +10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\xBA C\xEDrculo."
      }
    ]
  },
  {
    name: "Selo de Mana",
    range: "toque",
    target: "1 criatura",
    duration: "cena",
    description: "Seu toque manifesta um selo m\xE1gico na pele do alvo, que atrapalha o fluxo de mana. Pela dura\xE7\xE3o da magia, sempre que o alvo realizar qualquer a\xE7\xE3o que gaste PM, deve fazer um teste de Vontade; se passar, faz a a\xE7\xE3o normalmente. Se falhar, a a\xE7\xE3o n\xE3o tem efeito (mas os PM s\xE3o gastos mesmo assim).",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Servo Divino",
    execution: "padr\xE3o",
    effect: "criatura conjurada",
    duration: "cena ou at\xE9 ser descarregada",
    description: "Voc\xEA pede a sua divindade que envie um esp\xEDrito para ajud\xE1-lo. Esse esp\xEDrito realiza uma tarefa a sua escolha que possa ser cumprida em at\xE9 uma hora \u2014 desde algo simples como \u201Cuse suas asas para nos levar at\xE9 o topo da montanha\u201D at\xE9 algo complexo como \u201Cescolte esses camponeses at\xE9 o castelo\u201D. A magia \xE9 descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura \xE9 escolhido pelo mestre, de acordo com as necessidades da tarefa.\n\n\n\n''Componente material'': um pagamento de T$ 100 ao esp\xEDrito. A forma de pagamento varia \u2014 doa\xE7\xF5es a um templo, um item m\xE1gico ou mesmo dinheiro.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa a sua escolha que exija at\xE9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        cost: "+9 PM",
        description: "muda a dura\xE7\xE3o para 1 semana ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa que exija at\xE9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      }
    ]
  },
  {
    name: "Servo Morto-Vivo",
    execution: "completa",
    range: "toque",
    duration: "instant\xE2nea",
    description: "Esta magia transforma o cad\xE1ver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conserva\xE7\xE3o do corpo). O morto-vivo ent\xE3o obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fort\xE3o, guardi\xE3o ou montaria.\n\n\n\nSe n\xE3o quiser usar o morto-vivo como aliado, pode ordenar que ele proteja um local espec\xEDfico, atacando invasores (nesse caso, use as estat\xEDsticas de criaturas vistas na p\xE1gina [[Amea\xE7as T20|Amea\xE7as]]). O n\xEDvel somado de mortos-vivos sob seu comando ao mesmo tempo n\xE3o pode exceder o seu pr\xF3prio n\xEDvel +3, mas voc\xEA s\xF3 pode receber os benef\xEDcios de um deles como aliado por vez. Eles duram at\xE9 serem destru\xEDdos (um morto-vivo destru\xEDdo n\xE3o pode ser reanimado).\n\n\n\n''Componente material:'' um \xF4nix negro (T$ 100), inserido na boca ou olho do cad\xE1ver.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\xE7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\xE3o ou guardi\xE3o. O resto segue normal."
      },
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        cost: "+7 PM",
        description: "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\xFAmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\xE3o ou m\xE9dico. O restante da magia segue normal. Requer 4\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Sopro da Salva\xE7\xE3o",
    execution: "padr\xE3o",
    range: "pessoal",
    area: "cone de 9m",
    duration: "instant\xE2nea",
    description: "Voc\xEA enche seus pulm\xF5es de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na \xE1rea, curando 2d8+4 pontos de vida e removendo uma das seguintes condi\xE7\xF5es de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta a quantidade de cura em 1d8+2."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, se um aliado estiver com PV negativos, seus PV s\xE3o levados a 0 e ent\xE3o a cura \xE9 aplicada."
      },
      {
        cost: "+4 PM",
        description: "remove todas as condi\xE7\xF5es listadas, em vez de apenas uma."
      }
    ]
  },
  {
    name: "Telecinesia",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "veja texto",
    duration: "sustentada ou instant\xE2nea",
    description: "Voc\xEA move objetos ou criaturas se concentrando. Ao lan\xE7ar a magia, escolha uma das op\xE7\xF5es a seguir.\n\n\n\n''For\xE7a Cont\xEDnua:'' voc\xEA move uma criatura ou objeto com at\xE9 200kg, a at\xE9 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O peso pode ser movido em qualquer dire\xE7\xE3o dentro do alcance. Ele cai no ch\xE3o se sair do alcance ou a magia terminar. '''Dura\xE7\xE3o:''' sustentada.\n\n\n\n''Empurr\xE3o Violento:'' nesta vers\xE3o a energia m\xE1gica \xE9 expelida de uma \xFAnica vez e arremessa at\xE9 10 objetos, ou um peso total de 200kg, o que for menor. Os objetos devem estar a at\xE9 3m uns dos outros.\n\n\n\nObjetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por 10kg (objetos macios, sem pontas ou sem fio) at\xE9 1d6 pontos de dano por 10kg (objetos duros, pontudos ou afiados). Criaturas atingidas t\xEAm direito a um teste de Reflexos para reduzir o dano \xE0 metade.\n\n\n\nCriaturas dentro da capacidade de peso da magia podem ser arremessadas, mas t\xEAm direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superf\xEDcie s\xF3lida sofre 1d6 pontos de dano de impacto para cada 3m que \u201Cvoou\u201D no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). '''Dura\xE7\xE3o:''' instant\xE2nea.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o limite de peso em 100kg."
      }
    ]
  },
  {
    name: "Teletransporte",
    range: "toque",
    target: "at\xE9 5 criaturas volunt\xE1rias",
    description: "Esta magia transporta os alvos para um lugar a sua escolha a at\xE9 1.000km. Voc\xEA precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino.\n\n\n\n''CD 20''. Um lugar familiar, que voc\xEA visita com frequ\xEAncia.\n\n\n\n''CD 30''. Um lugar conhecido, que voc\xEA j\xE1 visitou pelo menos uma vez.\n\n\n\n''CD 40''. Um lugar desconhecido, que voc\xEA nunca visitou e s\xF3 conhece a partir da descri\xE7\xE3o de outra pessoa que esteve l\xE1.\n\n\n\nVoc\xEA n\xE3o pode se teletransportar para um lugar que nunca visitou sem a descri\xE7\xE3o de algu\xE9m. Ou seja, n\xE3o pode se transportar para a \u201Csala de tesouro do rei\u201D se nunca esteve nela nem falou com algu\xE9m que esteve.\n\n\n\nSe passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer dire\xE7\xE3o (se o destino \xE9 uma cidade costeira, voc\xEA pode surgir em alto-mar). Se falhar por 5 ou mais, voc\xEA chega em um lugar parecido, mas errado. E se voc\xEA rolar 1 natural no teste a magia falha, mas voc\xEA gasta PM normalmente e fica atordoado por 1d4 rodadas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +5."
      },
      {
        cost: "+2 PM",
        description: "em vez do normal, a magia teletransporta os alvos para seu santu\xE1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\xE2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\xE1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\xEA s\xF3 pode ter um santu\xE1rio por vez."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o completa, a dura\xE7\xE3o para cena e adiciona sacrif\xEDcio de 1 PM. Em vez do normal, voc\xEA cria um c\xEDrculo de 1,5m de di\xE2metro no ch\xE3o, que transporta qualquer criatura que pisar nele. O destino \xE9 escolhido quando a magia \xE9 lan\xE7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\xEA. O c\xEDrculo \xE9 t\xEAnue e praticamente invis\xEDvel. Voc\xEA pode marc\xE1-lo de alguma forma (por exemplo, lan\xE7ando-o sobre uma plataforma elevada). Se n\xE3o fizer isso, algu\xE9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\xEA ter\xE1 uma armadilha bastante eficaz! Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Tent\xE1culos de Trevas",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    duration: "cena",
    description: "Um c\xEDrculo de energias sombrias se abre no ch\xE3o, de onde surgem tent\xE1culos feitos de treva viscosa. Ao lan\xE7ar a magia e no in\xEDcio de cada um de seus turnos, voc\xEA faz um teste da manobra agarrar (usando seu b\xF4nus de Misticismo) contra cada criatura na \xE1rea. Se voc\xEA passar, a criatura \xE9 agarrada; se a v\xEDtima j\xE1 est\xE1 agarrada, \xE9 esmagada, sofrendo 4d6 pontos de dano de trevas. A \xE1rea conta como terreno dif\xEDcil. Os tent\xE1culos s\xE3o imunes a dano.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o raio da \xE1rea em +3m."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano dos tent\xE1culos em +2d6."
      }
    ]
  },
  {
    name: "Transforma\xE7\xE3o de Guerra",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "sustentada",
    description: "Voc\xEA se torna uma m\xE1quina de combate, ficando mais forte, r\xE1pido e resistente. Voc\xEA recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV tempor\xE1rios. Durante a ''Transforma\xE7\xE3o de Guerra'' voc\xEA n\xE3o pode lan\xE7ar magias, mas se torna proficiente em todas as armas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\xE1rios em +10."
      },
      {
        cost: "+2 PM",
        description: "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\xE1lico e sem express\xF5es. Voc\xEA recebe resist\xEAncia a dano 15/adamante e imunidade a atordoamento, dano n\xE3o letal, doen\xE7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\xE3o precisa respirar."
      }
    ]
  },
  {
    name: "Viagem Arb\xF3rea",
    execution: "completa",
    range: "pessoal",
    target: "voc\xEA",
    description: "Como parte da execu\xE7\xE3o, voc\xEA entra em uma \xE1rvore adjacente que seja maior do que voc\xEA. Voc\xEA pode permanecer dentro da \xE1rvore, percebendo os arredores de forma normal (mas sem poder fazer a\xE7\xF5es). Voc\xEA pode gastar uma a\xE7\xE3o de movimento para sair da mesma \xE1rvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma \xE1rvore que seja destru\xEDda, a magia termina e voc\xEA sofre 10d6 pontos de dano de impacto. Enquanto a magia durar voc\xEA pode gastar a\xE7\xF5es de movimento para entrar em outras \xE1rvores.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, o alvo para at\xE9 cinco criaturas e a dura\xE7\xE3o para instant\xE2nea. Os alvos entram em uma planta (de tamanho M\xE9dio ou maior) e saem em outra planta do mesmo tamanho a at\xE9 100km de dist\xE2ncia, especificada em dire\xE7\xE3o e dist\xE2ncia aproximadas (como \u201C50km ao norte\u201D)."
      }
    ]
  },
  {
    name: "Vid\xEAncia",
    execution: "completa",
    range: "ilimitado",
    target: "1 criatura",
    duration: "sustentada",
    resistence: "Vontade anula",
    description: "Atrav\xE9s de uma superf\xEDcie reflexiva (bacia de \xE1gua benta para cl\xE9rigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) voc\xEA pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer dire\xE7\xE3o), mesmo que ela se mova. O alvo pode estar a qualquer dist\xE2ncia, mas se passar em um teste de Vontade, a magia falha. A v\xEDtima recebe b\xF4nus ou penalidades em seu teste de resist\xEAncia, dependendo do conhecimento que voc\xEA tiver dela.\n\n*N\xE3o conhece o alvo: +10.\n\n*Ouviu falar do alvo: +5.\n\n*O alvo est\xE1 em outro plano ou mundo: +5.\n\n*J\xE1 encontrou o alvo pessoalmente: +0.\n\n*Tem uma pintura, escultura ou outra representa\xE7\xE3o do alvo: \u20132.\n\n*Conhece bem o alvo: \u20135.\n\n*Tem um pertence pessoal ou pe\xE7a de roupa do alvo: \u20135.\n\n*Tem uma parte do corpo do alvo (unhas, cabelos...): \u201310.",
    enhancements: []
  },
  {
    name: "Voo",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Voc\xEA recebe deslocamento de voo 12m. Voar por meio desta magia \xE9 simples como andar \u2014 voc\xEA pode atacar e lan\xE7ar magias normalmente enquanto voa. Quando a magia termina, voc\xEA desce lentamente at\xE9 o ch\xE3o, como se estivesse sob efeito de ''Queda Suave''.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 10 criaturas. Requer 4\xB0 c\xEDrculo."
      }
    ]
  },
  {
    name: "Alterar Mem\xF3ria",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Vontade anula",
    description: "Voc\xEA invade a mente do alvo e altera ou apaga suas mem\xF3rias da \xFAltima hora.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para cone de 4,5m e o alvo para criaturas na \xE1rea."
      }
    ]
  },
  {
    name: "Animar Objetos",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "at\xE9 8 objetos Min\xFAsculos ou Pequenos",
    duration: "cena",
    description: "Voc\xEA concede vida a objetos inanimados. Cada objeto se torna um aliado sob seu controle. O tipo dele \xE9 escolhido da lista de tamanho e ele n\xE3o conta em seu limite de aliados. Com uma a\xE7\xE3o de movimento, voc\xEA pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie voc\xEA ou outra criatura neste turno. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados t\xEAm valores de For\xE7a, Destreza de acordo com seu tamanho e todos os outros atributos nulos; eles t\xEAm PV de acordo com seu tamanho, n\xE3o t\xEAm valor de Defesa ou testes de resist\xEAncia e falham automaticamente em qualquer teste oposto, e s\xE3o imunes a doen\xE7as, fadiga, sangramento, sono e veneno. Diferente de aliados comuns, um objeto pode ser alvo de um ataque direto. Esta magia n\xE3o afeta itens m\xE1gicos, nem objetos que estejam sendo carregados por outra criatura.",
    enhancements: []
  },
  {
    name: "Assassino Fantasmag\xF3rico",
    execution: "padr\xE3o",
    range: "longo",
    target: "1 criatura",
    duration: "cena",
    resistence: "Vontade parcial",
    description: "Usando os medos subconscientes do alvo, voc\xEA cria uma imagem daquilo que ele mais teme. Apenas a pr\xF3pria v\xEDtima pode ver o Assassino Fantasmag\xF3rico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.\n\n\n\nO espectro surge adjacente a voc\xEA e flutua em dire\xE7\xE3o \xE0 v\xEDtima com deslocamento total de voo 18m por turno. Ele \xE9 incorp\xF3reo e imune a magias.\n\n\n\nSe o espectro terminar seu turno em alcance curto da v\xEDtima, ela deve fazer um teste de Vontade. Se falhar, ficar\xE1 abalada.\n\n\n\nSe o espectro terminar seu turno adjacente \xE0 v\xEDtima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano n\xE3o pode reduzir o alvo a menos de 0 PV e n\xE3o o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com \u20131 PV e sangrando.\n\n\n\nO espectro persegue o alvo implacavelmente. Ele s\xF3 desaparece se deixar seu alvo inconsciente, se for dissipado ou ao t\xE9rmino da cena.",
    enhancements: []
  },
  {
    name: "Campo Antimagia",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Voc\xEA \xE9 cercado por uma barreira invis\xEDvel com 3m de raio que acompanha seus movimentos. Qualquer magia ou habilidade m\xE1gica que entre na \xE1rea da barreira \xE9 suprimida enquanto estiver l\xE1.\n\n\n\nCriaturas convocadas que entrem em um ''Campo Antimagia'' desaparecem. Elas reaparecem na mesma posi\xE7\xE3o quando a dura\xE7\xE3o do Campo termina \u2014 supondo que a dura\xE7\xE3o da magia que as convocou ainda n\xE3o tenha terminado. Criaturas m\xE1gicas, como elementais, ou construtos imbu\xEDdos com magia durante sua cria\xE7\xE3o, como golens, n\xE3o s\xE3o diretamente afetados pelo ''Campo Antimagia''. Entretanto, como qualquer criatura, n\xE3o poder\xE3o usar magias ou habilidades m\xE1gicas dentro dele.\n\n\n\n''Dissipar Magia'' n\xE3o dissipa um ''Campo Antimagia'', e dois Campos na mesma \xE1rea n\xE3o se neutralizam. Artefatos e deuses maiores n\xE3o s\xE3o afetados por um ''Campo Antimagia.''",
    enhancements: []
  },
  {
    name: "C\xEDrculo da Restaura\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    area: "c\xEDrculo de 3m de raio",
    duration: "5 rodadas",
    resistence: "Reflexos parcial",
    description: "Voc\xEA cria uma explos\xE3o de luz dourada e intensa. Criaturas na \xE1rea ficam cegas por 1d4 rodadas, pegam fogo e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resist\xEAncia n\xE3o fica cega, n\xE3o pega fogo e sofre metade do dano.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta a regenera\xE7\xE3o de PV em 1d8+1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        cost: "+2 PM",
        description: "aumenta a \xE1rea em +6m de raio."
      },
      {
        cost: "+5 PM",
        description: "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \xE1rea. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Conceder Milagre",
    range: "toque",
    target: "1 criatura",
    description: "Voc\xEA transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de at\xE9 2\xBA c\xEDrculo que voc\xEA conhe\xE7a; o alvo pode lan\xE7ar essa magia uma vez, sem gastar pelo custo base em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus pr\xF3prios PM). Voc\xEA sofre uma penalidade de \u20133 PM at\xE9 que o alvo lance a magia que ganhou.",
    enhancements: []
  },
  {
    name: "Conjurar Elemental",
    execution: "completa",
    duration: "sustentada",
    description: "Esta magia transforma uma por\xE7\xE3o de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lan\xE7ar esta magia numa fogueira ou tocha cria um elemental do fogo. Voc\xEA pode criar elementais do ar, \xE1gua, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um aliado mestre do tipo destruidor (mas sem custo em PM) e mais um tipo entre os indicados na lista abaixo. Somente voc\xEA pode ser auxiliado pelo elemental e ele n\xE3o conta em seu limite de aliados.\n\n\n\n''Ar:'' assassino, perseguidor ou vigilante. Dano de eletricidade.\n\n\n\n''\xC1gua'': ajudante, guardi\xE3o ou m\xE9dico. Dano de frio.\n\n\n\n''Fogo'': atirador, combatente ou fort\xE3o. Dano de fogo.\n\n\n\n''Terra'': combatente, guardi\xE3o ou montaria. Dano de impacto.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        cost: "+5 PM",
        description: "voc\xEA convoca um elemental de cada tipo. Voc\xEA pode ordenar que cada elemental auxilie voc\xEA ou seus aliados. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Controlar a Gravidade",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    description: "Voc\xEA controla os efeitos da gravidade dentro da \xE1rea. Ao lan\xE7ar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, voc\xEA pode usar uma a\xE7\xE3o padr\xE3o para mudar o efeito.\n\n\n\n''Aumentar'': a gravidade fica mais forte. No in\xEDcio de seus turnos, cada criatura na \xE1rea deve fazer um teste de For\xE7a. Se passar, fica fatigada. Se falhar, fica fatigada e ca\xEDda.\n\n\n\n''Inverter'': inverte a gravidade da \xE1rea, fazendo com que criaturas e objetos \u201Ccaiam\u201D para cima, atingindo o topo (12m) em uma rodada. Se um obst\xE1culo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de \u201Cqueda\u201D. Elas podem ent\xE3o se levantar e caminhar no obst\xE1culo, de cabe\xE7a para baixo. Se n\xE3o houver obst\xE1culo, as criaturas e objetos ficam flutuando no topo da \xE1rea afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Algu\xE9m adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a \u201Cqueda\u201D. A criatura deve permanecer presa pela dura\xE7\xE3o da magia; caso contr\xE1rio \u201Ccair\xE1\u201D.\n\n\n\n''Reduzir'': a gravidade fica mais leve. Criaturas ou objetos livres com at\xE9 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na \xE1rea recebem +20 de b\xF4nus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica inst\xE1vel, sofrendo \u20132 de penalidade em testes de ataque.",
    enhancements: []
  },
  {
    name: "Controlar o Clima",
    execution: "completa",
    range: "2km",
    area: "c\xEDrculo com 2km de raio",
    duration: "4d12 horas",
    description: "Voc\xEA muda o clima da \xE1rea onde se encontra, podendo criar qualquer condi\xE7\xE3o clim\xE1tica: chuva, neve, ventos, n\xE9voas...",
    enhancements: []
  },
  {
    name: "C\xFApula de Repuls\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Uma c\xFApula de energia invis\xEDvel o cerca, impedindo a aproxima\xE7\xE3o de certas criaturas. Escolha um tipo de criatura com uma limita\xE7\xE3o espec\xEDfica, como animais mam\xEDferos, monstros insetoides ou mortos-vivos corp\xF3reos; ou uma ra\xE7a, como elfos, goblins ou minotauros. Criaturas com o tipo e a limita\xE7\xE3o escolhidos (ou com a ra\xE7a escolhida) n\xE3o podem se aproximar a at\xE9 3m de voc\xEA. Isso det\xE9m ataques corpo a corpo, mas n\xE3o ataques \xE0 dist\xE2ncia ou magias. Se voc\xEA tentar se aproximar al\xE9m do limite de 3m, rompe a c\xFApula e a magia \xE9 dissipada.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "como normal, mas voc\xEA pode escolher um tipo de criaturas sem limita\xE7\xE3o (todos os animais, todos os monstros etc.)."
      },
      {
        cost: "+8 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \xE9 desviado pelo efeito e n\xE3o o atinge. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Desintegrar",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    target: "1 criatura ou objeto",
    duration: "instant\xE2nea",
    description: "Voc\xEA dispara um raio fino e esverdeado que causa 10d12 pontos de dano de ess\xEAncia. Se o alvo passar no teste de resist\xEAncia, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele ser\xE1 completamente desintegrado, restando apenas p\xF3.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "aumenta o dano total em +2d12 e o dano m\xEDnimo em +1d12."
      }
    ]
  },
  {
    name: "Duplicata Ilus\xF3ria",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "c\xF3pia ilus\xF3ria",
    duration: "cena",
    description: "Voc\xEA cria uma c\xF3pia ilus\xF3ria semirreal de... voc\xEA mesmo! Ela \xE9 id\xEAntica em apar\xEAncia, som e cheiro, mas \xE9 intang\xEDvel. A cada turno, voc\xEA escolhe se ver\xE1 e ouvir\xE1 atrav\xE9s da duplicata ou de seu corpo original. A c\xF3pia reproduz todas as suas a\xE7\xF5es, incluindo fala. Qualquer magia com alcance de toque ou maior que voc\xEA lan\xE7ar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a \xFAnica diferen\xE7a de se originarem da c\xF3pia, em vez de voc\xEA. Se quiser que a duplicata fa\xE7a algo diferente de voc\xEA, voc\xEA deve gastar uma a\xE7\xE3o de movimento. Qualquer criatura que interagir com a c\xF3pia tem direito a um teste de Vontade para perceber que \xE9 uma ilus\xE3o. As magias que se originam dela, no entanto, s\xE3o reais. A c\xF3pia desaparece se sair do alcance.",
    enhancements: []
  },
  {
    name: "Explos\xE3o Caleidosc\xF3pica",
    range: "curto",
    description: "Esta magia cria uma forte explos\xE3o de luzes estrobosc\xF3picas e sons cacof\xF4nicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela.\n\n\n\n''ND 4 ou menor:'' se falhar no teste de resist\xEAncia, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.\n\n\n\n''ND entre 5 e 9:'' se falhar no teste de resist\xEAncia, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.\n\n\n\n''ND 10 ou maior:'' se falhar no teste de resist\xEAncia, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.",
    enhancements: []
  },
  {
    name: "Forma Et\xE9rea",
    execution: "completa",
    range: "pessoal",
    target: "voc\xEA",
    duration: "sustentada",
    description: "Voc\xEA e todo o equipamento que est\xE1 com voc\xEA s\xE3o transportados para o plano et\xE9reo, que existe paralelamente ao plano material (o mundo f\xEDsico). Na pr\xE1tica, \xE9 como ser transformado em um fantasma (mas voc\xEA ainda \xE9 considerado uma criatura viva). Uma criatura et\xE9rea \xE9 invis\xEDvel (pode alterar entre vis\xEDvel e invis\xEDvel como a\xE7\xE3o livre), incorp\xF3rea e capaz de se mover em qualquer dire\xE7\xE3o, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da vis\xE3o e audi\xE7\xE3o para 18m. Magias de abjura\xE7\xE3o e ess\xEAncia afetam criaturas et\xE9reas, mas outras magias, n\xE3o. Da mesma forma, uma criatura et\xE9rea n\xE3o pode atacar nem lan\xE7ar magias contra criaturas no plano material. Duas criaturas et\xE9reas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma a\xE7\xE3o de movimento, encerrando a magia. Uma criatura et\xE9rea que se materialize em um espa\xE7o ocupado \xE9 jogada para o espa\xE7o n\xE3o ocupado mais pr\xF3ximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "muda o alcance para toque e o alvo para at\xE9 5 criaturas volunt\xE1rias que estejam de m\xE3os dadas. Depois que a magia \xE9 lan\xE7ada, as criaturas podem soltar as m\xE3os. Requer 5\xBA c\xEDrculo."
      }
    ]
  },
  {
    name: "Guardi\xE3o Divino",
    execution: "padr\xE3o",
    duration: "cena ou at\xE9 ser descarregado",
    description: "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura \xE9 incorp\xF3rea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.\n\n\n\nUma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condi\xE7\xF5es de criaturas em alcance curto, \xE0 taxa de 1 PV por 1 ponto de luz ou uma condi\xE7\xE3o por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulner\xE1vel). A magia \xE9 encerrada quando o elemental fica sem pontos de luz.",
    enhancements: []
  },
  {
    name: "Liberta\xE7\xE3o",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "cena",
    description: "O alvo fica imune a condi\xE7\xF5es de paralisia e ignora qualquer efeito que impe\xE7a ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo",
    enhancements: [
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode caminhar sobre a \xE1gua ou outros l\xEDquidos com seu deslocamento normal. Entretanto, isso n\xE3o protege contra qualquer efeito que o l\xEDquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\xEDcia mesmo sem treinamento."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 5 criaturas."
      },
      {
        cost: "+5 PM",
        description: "pode dissipar ''Aprisionamento''."
      }
    ]
  },
  {
    name: "Liga\xE7\xE3o Sombria",
    range: "longo",
    target: "1 criatura",
    duration: "1 dia",
    resistence: "Fortitude anula",
    description: "Esse ritual cria uma conex\xE3o entre seu corpo e o da criatura alvo, criando uma marca id\xEAntica na pele de ambos. Enquanto a magia durar, sempre que voc\xEA sofrer qualquer dano ou condi\xE7\xE3o, o alvo dessa magia deve fazer um teste de Fortitude; se falhar, sofre a mesma quantidade e tipo de dano que voc\xEA, ou adquire a mesma condi\xE7\xE3o. A magia termina se o alvo chegar a 0 pontos de vida.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, o alvo tamb\xE9m pode morrer por perda de PV ou se voc\xEA morrer (um teste de Fortitude anula a morte)."
      }
    ]
  },
  {
    name: "Manto do Cruzado",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Voc\xEA invoca a energia sagrada de sua divindade na forma de um manto de energia s\xF3lida que reveste seu corpo. Esta magia tem duas vers\xF5es. Voc\xEA escolhe qual vers\xE3o pode lan\xE7ar quando aprende esta magia. Ela n\xE3o pode ser mudada.\n\n\n\n''Manto de Luz:'' um manto dourado e luminoso. No in\xEDcio de cada um de seus turnos, voc\xEA e todos os seus aliados em alcance curto recuperam 2d8 PV. Voc\xEA fica imune a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.\n\n\n\n''Manto de Trevas:'' um manto negro como a noite. No in\xEDcio de cada um de seus turnos, todos os inimigos em alcance curto sofrem 2d8 pontos de dano de trevas. Voc\xEA cura metade de todo o dano causado pela magia.",
    enhancements: []
  },
  {
    name: "M\xE3o Poderosa de Talude",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "m\xE3o gigante de energia",
    duration: "sustentada",
    description: "Esta magia cria uma m\xE3o flutuante de tamanho Grande que sempre se posiciona entre voc\xEA e um oponente a sua escolha. A m\xE3o fornece cobertura (+5 na Defesa) contra esse oponente. Nada \xE9 capaz de enganar a m\xE3o \u2014 coisas como escurid\xE3o, invisibilidade, metamorfose e disfarces mundanos n\xE3o a impedem de proteg\xEA-lo. A m\xE3o tem Defesa 20 e PV e resist\xEAncias iguais aos seus. Com uma a\xE7\xE3o de movimento, voc\xEA pode comandar a m\xE3o para que o proteja de outro oponente ou para que realize uma das a\xE7\xF5es a seguir.\n\n\n\n''Agarrar'': a m\xE3o usa uma manobra agarrar contra o oponente, com b\xF4nus de +20. A m\xE3o mant\xE9m o oponente agarrado, mas n\xE3o causa dano. Esmagar: a m\xE3o esmaga um oponente j\xE1 agarrado, causando 2d6+12 pontos de dano.\n\n\n\n''Empurrar'': a m\xE3o afasta o oponente, usando uma manobra empurrar com b\xF4nus de +20. A m\xE3o sempre acompanha o oponente para empurr\xE1-lo at\xE9 a dist\xE2ncia m\xE1xima que conseguir, dentro do alcance da magia.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "aumenta o b\xF4nus dos testes em +5, e o dano de impacto em +1d6+6."
      }
    ]
  },
  {
    name: "Marionete",
    execution: "padr\xE3o",
    target: "1 criatura",
    duration: "sustentada",
    resistence: "Fortitude anula",
    description: "Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no in\xEDcio de cada um de seus turnos, a v\xEDtima faz um teste de Fortitude. Se passar, a magia \xE9 anulada. Se falhar, todas as suas a\xE7\xF5es f\xEDsicas naquele turno estar\xE3o sob controle do conjurador. A v\xEDtima ainda tem consci\xEAncia de tudo que acontece \xE0 sua volta, podendo ver, ouvir e at\xE9 falar com certo esfor\xE7o (mas n\xE3o para lan\xE7ar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A v\xEDtima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.\n\n\n\nVoc\xEA precisa de linha de efeito para controlar a v\xEDtima. Se perder o contato, n\xE3o poder\xE1 control\xE1-la \u2014 mas ela estar\xE1 paralisada at\xE9 que o conjurador recupere o controle ou a magia termine.",
    enhancements: []
  },
  {
    name: "Muralha de Ossos",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "muro de ossos",
    duration: "cena",
    description: "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 3m de altura e 1,5m de espessura. Ela pode ter qualquer forma \u2014 n\xE3o precisa ser uma linha reta \u2014, mas sua base precisa estar no ch\xE3o e ela n\xE3o pode aparecer de modo que ocupe o espa\xE7o de uma criatura.\n\n\n\n\xC9 poss\xEDvel escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de dano de corte. Tamb\xE9m \xE9 poss\xEDvel destruir o muro para atravess\xE1-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e resist\xEAncia a corte, frio e perfura\xE7\xE3o 5.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "o muro \xE9 feito de uma massa de esqueletos animados. Quando voc\xEA lan\xE7a a magia e no in\xEDcio de cada um de seus turnos, todos os inimigos adjacentes \xE0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\xE3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\xE7\xE3o padr\xE3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      }
    ]
  },
  {
    name: "Premoni\xE7\xE3o",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    description: "Vislumbres do futuro permitem que voc\xEA reavalie suas a\xE7\xF5es. Uma vez por rodada, voc\xEA pode usar uma rea\xE7\xE3o para rolar novamente um teste rec\xE9m realizado, mas deve aceitar o resultado da nova rolagem.",
    enhancements: [
      {
        cost: "+3 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o, o alcance para curto, o alvo para 1 criatura e a dura\xE7\xE3o para instant\xE2nea. Esta magia s\xF3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\xE1rias t\xEAm direito a um teste de Vontade para negar o efeito."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      }
    ]
  },
  {
    name: "Raio Polar",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    resistence: "Fortitude parcial",
    description: "Voc\xEA dispara um raio azul esbranqui\xE7ado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (paralisado). Se passar no teste de resist\xEAncia, sofre metade do dano e, em vez de paralisado, fica lento por uma rodada. \xC9 poss\xEDvel quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resist\xEAncia a dano 10 e \xE9 vulner\xE1vel a fogo. Uma criatura presa pode usar uma a\xE7\xE3o completa para fazer um teste de For\xE7a e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "muda o alvo para \xE1rea de explos\xE3o de 6m de raio. Em vez de um raio, voc\xEA dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \xE1rea."
      }
    ]
  },
  {
    name: "Rel\xE2mpago Flamejante de Reynard",
    execution: "duas rodadas",
    range: "m\xE9dio",
    resistence: "Reflexos reduz \xE0 metade",
    description: "Esta \xE9 uma magia poderosa, mas lenta, desenvolvida pelo met\xF3dico e impass\xEDvel arquimago Reynard. Na primeira rodada de execu\xE7\xE3o, voc\xEA invoca as energias elementais do fogo, e uma de suas m\xE3os fica em chamas. Na segunda rodada, invoca as energias elementais dos rel\xE2mpagos, ficando com a outra m\xE3o eletrificada. Ent\xE3o, pela dura\xE7\xE3o da magia, pode usar uma a\xE7\xE3o de movimento para disparar bolas de fogo (6d6 pontos de dano de fogo numa explos\xE3o de 3m de raio) ou rel\xE2mpagos (6d6 pontos de dano de eletricidade numa linha). Voc\xEA tamb\xE9m pode, como uma a\xE7\xE3o padr\xE3o, usar as duas m\xE3os num ataque de energia mista (12d12 pontos de dano, metade de fogo e metade de eletricidade, numa explos\xE3o de 6m de raio). Voc\xEA precisa estar com as duas m\xE3os livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente.",
    enhancements: [
      {
        cost: "+4 PM",
        description: "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12."
      }
    ]
  },
  {
    name: "Sonho",
    execution: "10 minutos",
    range: "ilimitado",
    duration: "veja texto",
    description: "Voc\xEA entra nos sonhos de uma criatura. Uma vez l\xE1, pode conversar com o alvo at\xE9 que ele acorde. Se a criatura n\xE3o estiver dormindo quando voc\xEA lan\xE7ar a magia, voc\xEA pode permanecer em transe at\xE9 que ela adorme\xE7a. Durante o transe voc\xEA fica indefeso e sem consci\xEAncia dos arredores. Voc\xEA pode sair do transe quando quiser, mas a magia termina.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "transforma o sonho do alvo em um pesadelo. A v\xEDtima deve fazer um teste de Vontade. Se falhar, n\xE3o recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A v\xEDtima recebe b\xF4nus ou penalidades em seu teste de resist\xEAncia, dependendo do conhecimento que voc\xEA tiver dela. Use os mesmos modificadores da magia ''Vid\xEAncia''."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com voc\xEA."
      }
    ]
  },
  {
    name: "Talho Invis\xEDvel de Edauros",
    range: "curto",
    area: "cone",
    duration: "instant\xE2nea",
    resistence: "Fortitude parcial",
    description: "Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um b\xEDpede. Voc\xEA faz um gesto r\xE1pido e dispara uma l\xE2mina de ar em alta velocidade. Criaturas na \xE1rea sofrem 8d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resist\xEAncia sofrem metade do dano e n\xE3o ficam sangrando.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d8."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para voc\xEA e a dura\xE7\xE3o para sustentada. Uma vez por rodada, como uma a\xE7\xE3o padr\xE3o, voc\xEA pode disparar uma l\xE2mina de ar contra um alvo em alcance m\xE9dio, causando 6d8 pontos de dano de corte (Fortitude reduz \xE0 metade)."
      }
    ]
  },
  {
    name: "Terremoto",
    range: "longo",
    resistence: "veja texto",
    description: "Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo n\xE3o podem se mover, atacar ou lan\xE7ar magias. O efeito exato depende do terreno.\n\n\n\n''Caverna ou subterr\xE2neo:'' a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na \xE1rea. Um teste de Reflexos reduz o dano \xE0 metade e evita ficar agarrado.\n\n\n\n''Constru\xE7\xE3o:'' todas as estruturas na \xE1rea sofrem 200 pontos de dano de impacto, o suficiente para derrubar constru\xE7\xF5es de madeira ou alvenaria simples, mas n\xE3o de alvenaria refor\xE7ada. Criaturas em uma constru\xE7\xE3o que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).\n\n\n\n''Espa\xE7o aberto:'' fendas se abrem no ch\xE3o; cada criatura tem 25% de chance (1 em 1d4) de cair em uma delas. A v\xEDtima tem direito a um teste de Reflexos para se agarrar na borda e escapar. No in\xEDcio do seu pr\xF3ximo turno as fendas se fecham, matando todos que estejam dentro delas.\n\n\n\n''Penhascos:'' o penhasco racha, criando um desmoronamento que percorre uma dist\xE2ncia horizontal igual \xE0 dist\xE2ncia vertical da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma \xE1rea de 30m de comprimento al\xE9m da base. Qualquer criatura no caminho sofre 8d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano \xE0 metade e evita ficar agarrado.\n\n\n\n''Rio, lago ou p\xE2ntano:'' fissuras se abrem sob a \xE1gua, drenando-a e formando um lama\xE7al. Criaturas na \xE1rea precisam fazer um teste de Reflexos para n\xE3o afundarem na lama e ficarem agarradas. No in\xEDcio do seu pr\xF3ximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas. Escapar exige uma a\xE7\xE3o completa e um teste de Atletismo.\n\n\n\nCriaturas agarradas (efeito poss\xEDvel de caverna, constru\xE7\xE3o, penhasco e rio, lago ou p\xE2ntano) sofrem 1d6 pontos de dano por rodada at\xE9 serem libertadas, o que exige uma a\xE7\xE3o completa e um teste de Atletismo (por parte da pr\xF3pria criatura ou de um aliado adjacente).",
    enhancements: []
  },
  {
    name: "Viagem Planar",
    execution: "completa",
    range: "toque",
    target: "pessoal",
    description: "Voc\xEA viaja instantaneamente para outro plano da Cria\xE7\xE3o. L\xE1, voc\xEA chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).\n\n\n\n''Componente material:'' um bast\xE3o de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de exist\xEAncia voc\xEA ser\xE1 enviado. Os metais que levam a dimens\xF5es espec\xEDficas podem ser dif\xEDceis de encontrar, de acordo com o mestre.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alvo para at\xE9 cinco criaturas volunt\xE1rias que voc\xEA esteja tocando."
      }
    ]
  },
  {
    name: "Vis\xE3o da Verdade",
    range: "pessoal",
    target: "voc\xEA",
    duration: "cena",
    description: "Voc\xEA enxerga a forma real das coisas. Voc\xEA pode ver atrav\xE9s de camuflagem (normal e total), escurid\xE3o (normal e m\xE1gica) e efeitos de ilus\xE3o e transmuta\xE7\xE3o (enxergando a verdade como formas transl\xFAcidas ou sobrepostas).",
    enhancements: [
      {
        cost: "+1 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percep\xE7\xE3o."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intui\xE7\xE3o."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, o alvo enxerga atrav\xE9s de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem transl\xFAcidas)."
      }
    ]
  },
  {
    name: "Alterar Destino",
    execution: "rea\xE7\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "instant\xE2nea",
    description: "Sua mente visualiza todas as possibilidades de um evento, permitindo a voc\xEA escolher o melhor curso de a\xE7\xE3o. Voc\xEA automaticamente passa em um teste de resist\xEAncia ou evita um ataque nesta rodada.",
    enhancements: []
  },
  {
    name: "Aprisionamento",
    execution: "completa",
    target: "1 criatura",
    duration: "permanente",
    resistence: "Vontade anula",
    description: "Voc\xEA cria uma pris\xE3o m\xE1gica para aprisionar uma criatura. Se falhar no teste de resist\xEAncia, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura n\xE3o precisa respirar e alimentar-se, e n\xE3o envelhece. Magias de adivinha\xE7\xE3o n\xE3o conseguem localizar ou perceber o alvo. Ao lan\xE7ar a magia, voc\xEA escolhe uma das seguintes formas de pris\xE3o. O componente material varia, mas todos custam T$ 1.000.\n\n\n\n''Acorrentamento'': o alvo \xE9 preso por correntes firmemente enraizadas no ch\xE3o, que o mant\xE9m no lugar. O alvo fica paralisado e n\xE3o pode se mover ou ser movido por qualquer meio. ''Componente Material:'' uma fina corrente de mitral.\n\n\n\n''Conten\xE7\xE3o M\xEDnima:'' o alvo diminui para uma altura de 2 cent\xEDmetros e \xE9 preso dentro de uma pedra preciosa ou objeto semelhante. A luz pode passar atrav\xE9s da pedra preciosa normalmente (permitindo que o alvo veja o lado de fora e outras criaturas o vejam), mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra n\xE3o pode ser quebrada enquanto o alvo estiver dentro. ''Componente Material:'' uma pedra preciosa, como um diamante ou rubi.\n\n\n\n''Pris\xE3o Dimensional:'' o alvo \xE9 transportado para um pequeno semiplano protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou \xE1rea confinada similar de sua escolha. ''Componente Material:'' uma representa\xE7\xE3o em miniatura da pris\xE3o, feita de jade.\n\n\n\n''Sepultamento'': o alvo \xE9 sepultado bem fundo abaixo da terra, dentro de uma esfera de for\xE7a m\xE1gica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares. ''Componente Material:'' um pequeno orbe de adamante.\n\n\n\n''Sono Eterno:'' o alvo adormece e n\xE3o pode ser acordado. ''Componente Material:'' fruta preparada com ervas son\xEDferas raras.\n\n\n\nQuando a magia \xE9 lan\xE7ada, voc\xEA deve especificar uma condi\xE7\xE3o que far\xE1 com que ela termine e solte o alvo. A condi\xE7\xE3o pode ser t\xE3o espec\xEDfica ou elaborada quanto voc\xEA quiser, mas deve ser poss\xEDvel de acontecer. As condi\xE7\xF5es podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em a\xE7\xF5es ou qualidades observ\xE1veis, mas nunca em estat\xEDsticas intang\xEDveis, como n\xEDvel, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condi\xE7\xE3o \xE9 v\xE1lida ou n\xE3o.\n\n\n\n''Dissipar Magia'' pode dissipar o efeito, mas deve ser conjurada com o aprimoramento de 5\xBA c\xEDrculo e alvo na pris\xE3o.",
    enhancements: []
  },
  {
    name: "Aura Divina",
    execution: "padr\xE3o",
    range: "pessoal",
    duration: "cena",
    description: "Voc\xEA se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher. Seus aliados na \xE1rea recebem +5 na Defesa e em testes de resist\xEAncia (voc\xEA e aliados devotos da mesma divindade que voc\xEA recebem +10) e ficam imunes a encantamento. Al\xE9m disso, inimigos que entrem na \xE1rea afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condi\xE7\xE3o a sua escolha entre esmorecido, debilitado ou lento at\xE9 o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na \xE1rea.",
    enhancements: []
  },
  {
    name: "Barragem Elemental de Vectorius",
    execution: "padr\xE3o",
    range: "longo",
    effect: "4 esferas elementais",
    duration: "instant\xE2nea",
    resistence: "Reflexos parcial",
    description: "Criada pelo arquimago Vectorius, esta magia produz quatro esferas elementais (\xE1cido, eletricidade, fogo e frio) que voam at\xE9 um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano (cada uma do seu tipo) numa esfera com 12m de raio. Um teste de Reflexos reduz o dano \xE0 metade. Voc\xEA pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explos\xE3o de mais de uma esfera deve fazer um teste de resist\xEAncia para cada uma. Al\xE9m disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resist\xEAncia:\n\n\n\n* Esfera de \xE1cido: vulner\xE1vel at\xE9 o fim da cena.\n\n* Esfera el\xE9trica: atordoado por uma rodada.\n\n* Esfera de fogo: em chamas.\n\n* Esfera de frio: lento at\xE9 o fim da cena",
    enhancements: [
      {
        cost: "+5 PM",
        description: "aumenta o dano de cada esfera em +2d6."
      },
      {
        cost: "+5 PM",
        description: "muda o tipo de dano de todas as esferas para ess\xEAncia (mas elas ainda causam os outros efeitos como se seu tipo de dano n\xE3o mudasse)."
      }
    ]
  },
  {
    name: "Buraco Negro",
    execution: "completa",
    duration: "3 rodadas",
    resistence: "Fortitude parcial",
    description: "Esta magia cria um v\xE1cuo capaz de sugar tudo nas proximidades. Escolha um espa\xE7o desocupado para o buraco negro. No in\xEDcio de cada um de seus tr\xEAs turnos seguintes, todas as criaturas a at\xE9 90m do buraco negro, incluindo voc\xEA, devem fazer um teste de Fortitude. Em caso de falha, ficam ca\xEDdas e s\xE3o puxadas 30m na dire\xE7\xE3o do buraco. Objetos soltos tamb\xE9m s\xE3o puxados. Criaturas podem gastar uma a\xE7\xE3o de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resist\xEAncia. Criaturas e objetos que toquem o buraco negro s\xE3o sugadas, desaparecendo para sempre.\n\n\n\nN\xE3o se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos cl\xE9rigos da Deusa da Noite acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "muda o efeito para que voc\xEA n\xE3o seja afetado."
      }
    ]
  },
  {
    name: "Chuva de Meteoros",
    execution: "completa",
    range: "longo",
    area: "explos\xE3o com 9m de raio",
    duration: "instant\xE2nea",
    resistence: "Reflexos reduz \xE0 metade",
    description: "Esta magia faz com que um meteoro caia dos c\xE9us, devastando a \xE1rea de impacto e seus arredores. Criaturas na \xE1rea sofrem 20d6 pontos de dano (metade impacto, metade fogo).",
    enhancements: [
      {
        cost: "+2 PM",
        description: "criaturas que falhem no teste de resist\xEAncia ficam ca\xEDdas e presas sob os escombros (agarradas). Uma criatura agarrada pode escapar gastando uma a\xE7\xE3o padr\xE3o e passando em um teste de Atletismo. Toda a \xE1rea afetada fica coberta de escombros, sendo considerada terreno dif\xEDcil."
      }
    ]
  },
  {
    name: "Controlar o Tempo",
    execution: "padr\xE3o",
    range: "curto",
    duration: "veja texto",
    description: "Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.\n\n\n\n''Congelar o tempo:'' voc\xEA entra em um estado atemporal que faz todas as criaturas e efeitos parecerem congelados. Voc\xEA pode agir livremente por 3 rodadas de tempo aparente. Durante essas rodadas, efeitos cont\xEDnuos n\xE3o o afetam, mas criaturas e objetos em posse de criaturas ficam imunes a seus ataques e magias. Magias de \xE1rea e com dura\xE7\xE3o maior que este efeito v\xE3o agir normalmente quando o congelamento acabar. Este efeito costuma ser usado para fortalecer suas defesas e invocar criaturas.\n\n\n\n''Saltar no tempo:'' voc\xEA e at\xE9 5 criaturas volunt\xE1rias s\xE3o transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Voc\xEAs ressurgem no mesmo lugar, com a mesma velocidade e orienta\xE7\xE3o; do seu ponto de vista, nenhum tempo se passou. Se um objeto s\xF3lido agora ocupa o espa\xE7o de uma criatura, ela ressurge na \xE1rea vazia mais pr\xF3xima.\n\n\n\n''Voltar no tempo:'' voc\xEA revive os \xFAltimos segundos. Todas as a\xE7\xF5es da rodada anterior s\xE3o desfeitas (incluindo perda de PV e PM). Tudo retorna \xE0 posi\xE7\xE3o em que estava no in\xEDcio do seu turno na \xFAltima rodada e voc\xEA \xE9 o \xFAnico que sabe o que acontecer\xE1. Todos os outros personagens envolvidos na cena devem repetir as mesmas a\xE7\xF5es \u2014 exceto se voc\xEA fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer).",
    enhancements: []
  },
  {
    name: "Deflagra\xE7\xE3o de Mana",
    execution: "completa",
    range: "pessoal",
    resistence: "Fortitude parcial",
    description: "Ap\xF3s concentrar seu mana, voc\xEA explode em dano de ess\xEAncia, como uma estrela em plena terra. Todas as criaturas na \xE1rea sofrem 150 pontos de dano de ess\xEAncia, e todos os itens m\xE1gicos (exceto artefatos) tornam-se mundanos. Voc\xEA n\xE3o \xE9 afetado pela magia. Alvos que passem no teste de Fortitude sofrem apenas metade do dano e seus itens m\xE1gicos voltam a funcionar depois de um dia.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano em 10."
      },
      {
        cost: "+5 PM",
        description: "afeta apenas criaturas a sua escolha."
      }
    ]
  },
  {
    name: "Desejo",
    execution: "completa",
    range: "veja texto",
    target: "veja texto",
    duration: "veja texto",
    resistence: "veja texto",
    description: "Esta \xE9 a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Voc\xEA pode:\n\n\n\n* Dissipar os efeitos de qualquer magia de 4\xBA c\xEDrculo ou menor.\n\n* Transportar at\xE9 10 criaturas volunt\xE1rias em alcance longo para qualquer outro local, em qualquer plano.\n\n* Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na \xFAltima rodada seja realizado novamente. Por exemplo, se um aliado morreu na \xFAltima rodada devido ao ataque de um inimigo, voc\xEA pode obrigar o inimigo a refazer esse ataque.\n\n\n\nNormalmente, ''Desejo'' n\xE3o exige sacrif\xEDcio de PM \u2014 mas voc\xEA pode desejar por algo mais poderoso. Nesse caso, a magia requer o sacrif\xEDcio de 2 PM e pode fazer coisas como:\n\n\n\n* Criar um item mundano de at\xE9 T$ 25.000.\n\n* Duplicar os efeitos de qualquer magia de at\xE9 4\xBA c\xEDrculo. Caso a magia precise de um componente material para ser lan\xE7ada, ainda \xE9 necess\xE1rio providenciar o componente.\n\n* Aumentar um atributo de uma criatura em +1. Um mesmo atributo pode ser aumentado em at\xE9 +5 atrav\xE9s do uso de ''Desejo''.\n\n\n\n''Desejo'' pode gerar efeitos ainda mais poderosos, mas tenha cuidado! Desejar a fortuna de um rei pode transport\xE1-lo para a sala de tesouro real, onde voc\xEA ser\xE1 preso ou morto; desejar ser imortal pode transform\xE1-lo em morto-vivo, e assim por diante. Qualquer efeito que n\xE3o encaixe na lista acima deve ser decidido pelo mestre.",
    enhancements: []
  },
  {
    name: "Engenho de Mana",
    execution: "padr\xE3o",
    range: "m\xE9dio",
    effect: "disco de energia com 1",
    duration: "sustentada",
    description: "Esta poderosa magia manifesta um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco \xE9 intang\xEDvel, imune a dano e n\xE3o pode ser movido. Enquanto estiver ativo, tenta absorver qualquer magia lan\xE7ada em alcance m\xE9dio dele, como uma a\xE7\xE3o autom\xE1tica de contram\xE1gica, usando seu teste de Misticismo. Caso ven\xE7a o teste, o engenho n\xE3o s\xF3 anula a magia como absorve os PM usados para lan\xE7\xE1-la, acumulando PM tempor\xE1rios. No seu turno, se estiver ao alcance do disco, voc\xEA pode gastar PM guardados nele para lan\xE7ar magias.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "em vez de flutuar no ponto em que foi conjurado, o disco flutua atr\xE1s de voc\xEA, mantendo-se sempre adjacente."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      }
    ]
  },
  {
    name: "F\xFAria do Pante\xE3o",
    execution: "completa",
    range: "longo",
    effect: "nuvem de tempestade com 90m de lado",
    duration: "sustentada",
    description: "Voc\xEA cria uma nuvem de tempestade, com trov\xF5es e rel\xE2mpagos. Enquanto voc\xEA sustenta a magia, ela gera os seguintes efeitos, sempre no in\xEDcio do seu turno.\n\n\n\n''1\xAA rodada (quando voc\xEA lan\xE7a a magia):'' trov\xF5es ribombam. Criaturas na \xE1rea sofrem 6d6 pontos de dano de impacto e ficam surdas por uma rodada.\n\n\n\n''2\xAA rodada'': rel\xE2mpagos caem. At\xE9 seis criaturas a sua escolha na \xE1rea sofrem 10d8 pontos de dano de eletricidade.\n\n\n\n''3\xBA rodada em diante:'' chuva g\xE9lida e ventos causam 6d6 pontos de dano de frio por rodada. Al\xE9m disso, reduzem a visibilidade (como a magia N\xE9voa), transformam toda a \xE1rea em terreno dif\xEDcil e tornam ataques \xE0 dist\xE2ncia imposs\xEDveis. Por fim, a \xE1rea conta como condi\xE7\xE3o terr\xEDvel para conjuradores lan\xE7arem magias.",
    enhancements: []
  },
  {
    name: "Interven\xE7\xE3o Divina",
    execution: "completa",
    range: "veja texto",
    target: "veja texto",
    resistence: "veja texto",
    description: "Voc\xEA pede a sua divindade para interceder diretamente. Voc\xEA pode:\n\n\n\n* Curar todos os PV e condi\xE7\xF5es de at\xE9 10 criaturas em alcance longo.\n\n* Dissipar os efeitos de qualquer magia de 4\xBA c\xEDrculo ou menor.\n\n\n\nNormalmente, ''Interven\xE7\xE3o Divina'' n\xE3o exige sacrif\xEDcio de PM \u2014 mas voc\xEA pode implorar por algo mais poderoso. Nesse caso, a magia requer o sacrif\xEDcio de 2 PM e pode fazer coisas como:\n\n\n\n* Criar um item mundano de at\xE9 T$ 25.000.\n\n* Duplicar os efeitos de qualquer magia de at\xE9 4\xBA c\xEDrculo. Caso a magia precise de um componente material para ser lan\xE7ada, ainda \xE9 necess\xE1rio providenciar o componente.\n\n* Proteger uma cidade de um desastre, como uma erup\xE7\xE3o vulc\xE2nica, enchente ou terremoto.\n\n* Ressuscitar uma criatura em alcance longo que tenha morrido h\xE1 at\xE9 uma rodada. A criatura acorda com 1 PV.\n\n* Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.",
    enhancements: []
  },
  {
    name: "Invulnerabilidade",
    execution: "padr\xE3o",
    range: "pessoal",
    target: "voc\xEA",
    duration: "sustentada",
    resistence: "Vontade anula",
    area: "cubo de at\xE9 90m de lado",
    effect: "s m\xE1gicos n\xE3o s\xE3o dissipados quando entram na esfera",
    description: "Voc\xEA faz um terreno parecer outro, incluindo sons e cheiros. Uma plan\xEDcie pode parecer um p\xE2ntano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movedi\xE7a pode parecer terra firme ou um precip\xEDcio pode parecer um lago. Voc\xEA pode alterar, incluir e esconder estruturas dentro da \xE1rea, mas n\xE3o criaturas (embora elas possam se esconder nas estruturas ilus\xF3rias).",
    enhancements: [
      {
        cost: "+4 PM",
        description: "muda o efeito para afetar magias de at\xE9 3\xBA c\xEDrculo. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "muda o efeito para afetar magias de at\xE9 4\xBA c\xEDrculo. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\xE3o."
      },
      {
        cost: "+3 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      },
      {
        cost: "+3 PM",
        description: "muda o alvo para 1 criatura. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+3 PM",
        description: "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para cena ou at\xE9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\xE7\xE3o livre, voc\xEA pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\xBA C\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, pode alterar a apar\xEAncia de criaturas escolhidas na \xE1rea, como se usando ''Disfarce Ilus\xF3rio''."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, a dura\xE7\xE3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\xEA inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\xE7\xE3o que ativar\xE1 a marca. Normalmente, ser\xE1 cometer um crime (roubar, matar...) ou outra coisa contr\xE1ria \xE0s Obriga\xE7\xF5es & Restri\xE7\xF5es de sua divindade. Sempre que a marca \xE9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \xE9 um estigma por si s\xF3, j\xE1 que esta magia normalmente \xE9 lan\xE7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\xF3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\xE7\xE3o''."
      },
      {
        cost: "+4 PM",
        description: "aumenta a dura\xE7\xE3o para 1 ano ou at\xE9 ser descarregada."
      },
      {
        cost: "+2 PM",
        description: "aumenta o comprimento em +15m e altura em +3m, at\xE9 60m de comprimento e 9m de altura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para sustentada e adiciona uma nova escolha, ''Ess\xEAncia:'' A muralha \xE9 invis\xEDvel e indestrut\xEDvel \u2014 imune a qualquer forma de dano e n\xE3o afetada por nenhuma magia. Ela n\xE3o pode ser atravessada nem mesmo por criaturas incorp\xF3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\xE1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\xE3o, n\xE3o vencem a muralha, mas magias lan\xE7adas diretamente sobre uma criatura ou \xE1rea, como Sono, podem ser lan\xE7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+4 PM",
        description: "sua pele ganha aspecto e dureza do a\xE7o. Voc\xEA recebe resist\xEAncia a dano 10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para toque, o alvo para 1 criatura, a dura\xE7\xE3o para 1d4 rodadas e adiciona Resist\xEAncia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\xE1tua inerte e sem consci\xEAncia. A est\xE1tua possui os mesmos PV da criatura e resist\xEAncia a dano 8; se for quebrada, a criatura morrer\xE1. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "como acima, mas com dura\xE7\xE3o permanente. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em 1d8+4."
      },
      {
        cost: "+2 PM",
        description: "aumenta a resist\xEAncia a dano em +2."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\xE3o seguir a mesma divindade que voc\xEA."
      },
      {
        cost: "+4 PM",
        description: "muda o b\xF4nus para +10. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+9 PM",
        description: "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\xBA C\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa a sua escolha que exija at\xE9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        cost: "+9 PM",
        description: "muda a dura\xE7\xE3o para 1 semana ou at\xE9 ser descarregada. O esp\xEDrito realiza uma tarefa que exija at\xE9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      },
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\xE7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\xE3o ou guardi\xE3o. O resto segue normal."
      },
      {
        cost: "+3 PM",
        description: "muda o componente material para p\xF3 de \xF4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        cost: "+7 PM",
        description: "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\xFAmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\xE3o ou m\xE9dico. O restante da magia segue normal. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta a quantidade de cura em 1d8+2."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, se um aliado estiver com PV negativos, seus PV s\xE3o levados a 0 e ent\xE3o a cura \xE9 aplicada."
      },
      {
        cost: "+4 PM",
        description: "remove todas as condi\xE7\xF5es listadas, em vez de apenas uma."
      },
      {
        cost: "+3 PM",
        description: "aumenta o limite de peso em 100kg."
      },
      {
        cost: "+2 PM",
        description: "aumenta o n\xFAmero de alvos em +5."
      },
      {
        cost: "+2 PM",
        description: "em vez do normal, a magia teletransporta os alvos para seu santu\xE1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\xE2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\xE1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\xEA s\xF3 pode ter um santu\xE1rio por vez."
      },
      {
        cost: "+9 PM",
        description: "muda a execu\xE7\xE3o para a\xE7\xE3o completa, a dura\xE7\xE3o para cena e adiciona sacrif\xEDcio de 1 PM. Em vez do normal, voc\xEA cria um c\xEDrculo de 1,5m de di\xE2metro no ch\xE3o, que transporta qualquer criatura que pisar nele. O destino \xE9 escolhido quando a magia \xE9 lan\xE7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\xEA. O c\xEDrculo \xE9 t\xEAnue e praticamente invis\xEDvel. Voc\xEA pode marc\xE1-lo de alguma forma (por exemplo, lan\xE7ando-o sobre uma plataforma elevada). Se n\xE3o fizer isso, algu\xE9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\xEA ter\xE1 uma armadilha bastante eficaz! Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "aumenta o raio da \xE1rea em +3m."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano dos tent\xE1culos em +2d6."
      },
      {
        cost: "+2 PM",
        description: "aumenta os b\xF4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\xE1rios em +10."
      },
      {
        cost: "+2 PM",
        description: "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\xE1lico e sem express\xF5es. Voc\xEA recebe resist\xEAncia a dano 15/adamante e imunidade a atordoamento, dano n\xE3o letal, doen\xE7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\xE3o precisa respirar."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para toque, o alvo para at\xE9 cinco criaturas e a dura\xE7\xE3o para instant\xE2nea. Os alvos entram em uma planta (de tamanho M\xE9dio ou maior) e saem em outra planta do mesmo tamanho a at\xE9 100km de dist\xE2ncia, especificada em dire\xE7\xE3o e dist\xE2ncia aproximadas (como \u201C50km ao norte\u201D)."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia. Requer 4\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 10 criaturas. Requer 4\xB0 c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para cone de 4,5m e o alvo para criaturas na \xE1rea."
      },
      {
        cost: "+2 PM",
        description: "aumenta a regenera\xE7\xE3o de PV em 1d8+1."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        cost: "+2 PM",
        description: "aumenta a \xE1rea em +6m de raio."
      },
      {
        cost: "+5 PM",
        description: "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \xE1rea. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+5 PM",
        description: "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        cost: "+5 PM",
        description: "voc\xEA convoca um elemental de cada tipo. Voc\xEA pode ordenar que cada elemental auxilie voc\xEA ou seus aliados. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "como normal, mas voc\xEA pode escolher um tipo de criaturas sem limita\xE7\xE3o (todos os animais, todos os monstros etc.)."
      },
      {
        cost: "+8 PM",
        description: "muda a dura\xE7\xE3o para sustentada. Al\xE9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \xE9 desviado pelo efeito e n\xE3o o atinge. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+4 PM",
        description: "aumenta o dano total em +2d12 e o dano m\xEDnimo em +1d12."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para toque e o alvo para at\xE9 5 criaturas volunt\xE1rias que estejam de m\xE3os dadas. Depois que a magia \xE9 lan\xE7ada, as criaturas podem soltar as m\xE3os. Requer 5\xBA c\xEDrculo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode caminhar sobre a \xE1gua ou outros l\xEDquidos com seu deslocamento normal. Entretanto, isso n\xE3o protege contra qualquer efeito que o l\xEDquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\xEDcia mesmo sem treinamento."
      },
      {
        cost: "+5 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 5 criaturas."
      },
      {
        cost: "+5 PM",
        description: "pode dissipar ''Aprisionamento''."
      },
      {
        cost: "+5 PM",
        description: "al\xE9m do normal, o alvo tamb\xE9m pode morrer por perda de PV ou se voc\xEA morrer (um teste de Fortitude anula a morte)."
      },
      {
        cost: "+3 PM",
        description: "aumenta o b\xF4nus dos testes em +5, e o dano de impacto em +1d6+6."
      },
      {
        cost: "+5 PM",
        description: "o muro \xE9 feito de uma massa de esqueletos animados. Quando voc\xEA lan\xE7a a magia e no in\xEDcio de cada um de seus turnos, todos os inimigos adjacentes \xE0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\xE3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\xE7\xE3o padr\xE3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      },
      {
        cost: "+3 PM",
        description: "muda a execu\xE7\xE3o para rea\xE7\xE3o, o alcance para curto, o alvo para 1 criatura e a dura\xE7\xE3o para instant\xE2nea. Esta magia s\xF3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\xE1rias t\xEAm direito a um teste de Vontade para negar o efeito."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para \xE1rea de explos\xE3o de 6m de raio. Em vez de um raio, voc\xEA dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \xE1rea."
      },
      {
        cost: "+4 PM",
        description: "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12."
      },
      {
        cost: "+2 PM",
        description: "transforma o sonho do alvo em um pesadelo. A v\xEDtima deve fazer um teste de Vontade. Se falhar, n\xE3o recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A v\xEDtima recebe b\xF4nus ou penalidades em seu teste de resist\xEAncia, dependendo do conhecimento que voc\xEA tiver dela. Use os mesmos modificadores da magia ''Vid\xEAncia''."
      },
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com voc\xEA."
      },
      {
        cost: "+2 PM",
        description: "aumenta o dano em +2d8."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para voc\xEA e a dura\xE7\xE3o para sustentada. Uma vez por rodada, como uma a\xE7\xE3o padr\xE3o, voc\xEA pode disparar uma l\xE2mina de ar contra um alvo em alcance m\xE9dio, causando 6d8 pontos de dano de corte (Fortitude reduz \xE0 metade)."
      },
      {
        cost: "+2 PM",
        description: "muda o alvo para at\xE9 cinco criaturas volunt\xE1rias que voc\xEA esteja tocando."
      },
      {
        cost: "+1 PM",
        description: "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        cost: "+1 PM",
        description: "al\xE9m do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percep\xE7\xE3o."
      },
      {
        cost: "+2 PM",
        description: "al\xE9m do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intui\xE7\xE3o."
      },
      {
        cost: "+4 PM",
        description: "al\xE9m do normal, o alvo enxerga atrav\xE9s de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem transl\xFAcidas)."
      },
      {
        cost: "+5 PM",
        description: "aumenta o dano de cada esfera em +2d6."
      },
      {
        cost: "+5 PM",
        description: "muda o tipo de dano de todas as esferas para ess\xEAncia (mas elas ainda causam os outros efeitos como se seu tipo de dano n\xE3o mudasse)."
      },
      {
        cost: "+5 PM",
        description: "muda o efeito para que voc\xEA n\xE3o seja afetado."
      },
      {
        cost: "+2 PM",
        description: "criaturas que falhem no teste de resist\xEAncia ficam ca\xEDdas e presas sob os escombros (agarradas). Uma criatura agarrada pode escapar gastando uma a\xE7\xE3o padr\xE3o e passando em um teste de Atletismo. Toda a \xE1rea afetada fica coberta de escombros, sendo considerada terreno dif\xEDcil."
      },
      {
        cost: "+1 PM",
        description: "aumenta o dano em 10."
      },
      {
        cost: "+5 PM",
        description: "afeta apenas criaturas a sua escolha."
      },
      {
        cost: "+1 PM",
        description: "em vez de flutuar no ponto em que foi conjurado, o disco flutua atr\xE1s de voc\xEA, mantendo-se sempre adjacente."
      },
      {
        cost: "+4 PM",
        description: "muda a dura\xE7\xE3o para 1 dia."
      },
      {
        cost: "+2 PM",
        description: "muda a \xE1rea para c\xEDrculo de 6m de raio e o alvo para criaturas escolhidas."
      },
      {
        cost: "+5 PM",
        description: "muda a execu\xE7\xE3o para 1 dia e adiciona custo adicional (sacrif\xEDcio de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execu\xE7\xE3o. Ao t\xE9rmino, faz um teste de Vontade. Se falhar, perde a habilidade de lan\xE7ar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal \xE9 capaz de reverter essa perda. Os cl\xE9rigos da Deusa da Magia dizem que ela chora cada vez que este ritual \xE9 realizado."
      }
    ]
  },
  {
    name: "Legi\xE3o",
    range: "m\xE9dio",
    target: "at\xE9 10 criaturas na \xE1rea",
    duration: "sustentada",
    description: "Voc\xEA domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada enquanto recuperam a consci\xEAncia.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o n\xFAmero de alvos em +1."
      }
    ]
  },
  {
    name: "Mata-Drag\xE3o",
    execution: "duas rodadas",
    range: "pessoal",
    area: "explos\xE3o em cone de 30m",
    duration: "instant\xE2nea",
    description: "Esta \xE9 uma das mais poderosas magias de destrui\xE7\xE3o existentes. Ap\xF3s entoar longos c\xE2nticos, o conjurador dispara uma carga de energia que varre uma enorme \xE1rea \xE0 sua frente, causando 20d12 pontos de dano de ess\xEAncia em todas as criaturas, constru\xE7\xF5es e objetos livres atingidos. Apesar de seu poder destrutivo, esta magia \xE9 lenta, tornando seu uso dif\xEDcil em combate. Al\xE9m disso, pode causar tantos danos colaterais que poucos conjuradores se arriscam a utiliz\xE1-la.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta o dano em 1d12."
      }
    ]
  },
  {
    name: "Palavra Primordial",
    execution: "padr\xE3o",
    target: "1 criatura com menos n\xEDveis que voc\xEA",
    duration: "instant\xE2nea",
    resistence: "Vontade parcial",
    description: "Voc\xEA pronuncia uma palavra do idioma primordial da Cria\xE7\xE3o, que causa um dos efeitos abaixo, a sua escolha.\n\n\n\n''Atordoar'': a criatura fica atordoada por 2d4 rodadas. Se passar no teste de resist\xEAncia, fica desprevenida por 1d4 rodadas.\n\n\n\n''Cegar:'' a criatura fica cega. Se passar no teste de resist\xEAncia, fica ofuscada por 1d4 rodadas.\n\n\n\n''Matar:'' a criatura morre. Al\xE9m do teste de Vontade, a criatura tem direito a um teste de Fortitude. Se passar em qualquer um deles, sofre 10d8 pontos de dano e fica sangrando.",
    enhancements: []
  },
  {
    name: "Possess\xE3o",
    execution: "padr\xE3o",
    range: "longo",
    target: "1 criatura",
    resistence: "Vontade anula",
    description: "Voc\xEA projeta sua consci\xEAncia no corpo do alvo. Enquanto possuir uma criatura, voc\xEA assume o controle total do corpo dela. O seu pr\xF3prio corpo fica inconsciente e a consci\xEAncia do alvo fica inerte. Em termos de jogo, voc\xEA continua usando a sua ficha, mas com os atributos f\xEDsicos e deslocamento da criatura. Se o alvo passar no teste de resist\xEAncia, sabe que voc\xEA tentou possu\xED-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto voc\xEA a possui, a criatura morre e voc\xEA deve fazer um teste de Vontade contra a CD da sua pr\xF3pria magia. Se passar, sua consci\xEAncia retorna para o seu corpo (contanto que esteja dentro do alcance). Do contr\xE1rio, voc\xEA tamb\xE9m morre. Retornar para o seu corpo voluntariamente \xE9 uma a\xE7\xE3o livre",
    enhancements: [
      {
        cost: "+5 PM",
        description: "voc\xEA ganha acesso \xE0s habilidades de ra\xE7a e classe da criatura."
      },
      {
        cost: "+5 PM",
        description: "enquanto a magia durar e voc\xEA estiver dentro do alcance do seu corpo original, pode \u201Csaltar\u201D de uma criatura possu\xEDda para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, voc\xEA assume o controle do corpo dele e o alvo anterior recobra a consci\xEAncia."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para permanente, mas destr\xF3i seu corpo original no processo. Uma criatura possu\xEDda pode fazer um teste de Vontade no come\xE7o do dia para retomar seu corpo. Se passar, recobra a consci\xEAncia (e a sua pr\xF3pria consci\xEAncia fica inerte). O teste se repete no in\xEDcio de cada dia. Se o corpo de uma criatura possu\xEDda morrer e houver outra criatura em alcance curto, voc\xEA pode tentar possu\xED-la como uma rea\xE7\xE3o. Enquanto houver novos corpos para possuir, voc\xEA \xE9 imortal!"
      }
    ]
  },
  {
    name: "Projetar Consci\xEAncia",
    range: "ilimitado",
    target: "local ou criatura conhecidos",
    duration: "sustentada",
    description: "Esta magia faz com que sua consci\xEAncia deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por voc\xEA. Se escolher uma criatura, voc\xEA transporta sua consci\xEAncia at\xE9 onde a criatura estiver, contanto que estejam no mesmo plano.\n\n\n\nVoc\xEA adquire uma forma fantasmag\xF3rica invis\xEDvel, mas pode se mostrar usando uma a\xE7\xE3o de movimento. Pode se mover em qualquer dire\xE7\xE3o com deslocamento de voo 18m e, por ser incorp\xF3reo, \xE9 capaz de atravessar objetos s\xF3lidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Voc\xEA pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.\n\n\n\n'''+10 PM:''' al\xE9m do normal, sua proje\xE7\xE3o \xE9 capaz de lan\xE7ar magias que n\xE3o precisem de componentes materiais e tenham dura\xE7\xE3o diferente de sustentada. Sua forma fantasmag\xF3rica funciona como na magia ''Forma Et\xE9rea'', sendo afetada por magias de abjura\xE7\xE3o e ess\xEAncia, mas as magias que ela lan\xE7a podem afetar criaturas corp\xF3reas.",
    enhancements: []
  },
  {
    name: "Reanima\xE7\xE3o Impura",
    execution: "completa",
    range: "toque",
    target: "1 criatura",
    duration: "cena",
    description: "Voc\xEA reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma for\xE7ada. O tipo da criatura muda para morto-vivo, mas ela ret\xE9m suas mem\xF3rias e habilidades de quando estava viva, podendo inclusive lan\xE7ar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos cl\xE9rigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necess\xE1rio. Se for destru\xEDda, a criatura n\xE3o pode ser reanimada novamente com esta magia.",
    enhancements: []
  },
  {
    name: "R\xE9quiem",
    range: "curto",
    target: "criatura escolhidas",
    duration: "sustentada",
    resistence: "Vontade parcial",
    description: "Esta magia cria uma ilus\xE3o particular para cada uma das criaturas que atingir. Enquanto a magia durar, no in\xEDcio de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que n\xE3o tomou as a\xE7\xF5es que realmente fez no turno anterior e \xE9 obrigada a repetir as mesmas a\xE7\xF5es neste turno, com uma penalidade cumulativa de \u20135 em todos os testes para cada vez que se repetir (a penalidade n\xE3o se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A a\xE7\xE3o repetida consome PM e recursos normalmente e, caso exija um teste de resist\xEAncia, qualquer alvo faz esse teste com um b\xF4nus igual ao da penalidade desta magia.",
    enhancements: []
  },
  {
    name: "Roubar a Alma",
    execution: "padr\xE3o",
    range: "curto",
    resistence: "Vontade parcial",
    description: "Voc\xEA rouba a alma da v\xEDtima, armazenando-a em um objeto. Se o alvo passar no teste de resist\xEAncia, sente o impacto de sua alma ser puxada para fora do corpo e fica pasmo por 1 rodada. Se falhar, seu corpo fica ca\xEDdo, inconsciente e inerte, enquanto sua alma \xE9 transportada para dentro do objeto. O corpo n\xE3o envelhece nem se decomp\xF5e, permanecendo em estase. Ele pode ser atacado e destru\xEDdo normalmente. O objeto escolhido deve custar T$ 1.000 por n\xEDvel da criatura. Um objeto que n\xE3o seja valioso o bastante se quebrar\xE1 quando a magia for lan\xE7ada (embora personagens n\xE3o conhe\xE7am o conceito de \u201Cn\xEDvel\u201D dentro do mundo de jogo, podem ter no\xE7\xE3o do poder geral de uma criatura espec\xEDfica, estimando assim o valor do objeto). Se o objeto for destru\xEDdo, a magia se esvai. Se o corpo ainda estiver dispon\xEDvel, a alma retorna para ele. Caso contr\xE1rio, escapa para os Reinos dos Deuses.\n\n\n\n''Custo adicional:'' sacrif\xEDcio de 1 PM.",
    enhancements: [
      {
        cost: "+5 PM",
        description: "o objeto que abriga a alma det\xE9m os mesmos PM totais que o alvo. Se estiver empunhando o objeto, voc\xEA pode usar esses PM para lan\xE7ar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal."
      }
    ]
  },
  {
    name: "Segunda Chance",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    description: "Um brilho alaranjado, na forma de asas de f\xEAnix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condi\xE7\xF5es: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    enhancements: [
      {
        cost: "+1 PM",
        description: "aumenta a cura em +20 PV."
      },
      {
        cost: "+2 PM",
        description: "muda o alcance para curto e o alvo para at\xE9 5 criaturas."
      },
      {
        cost: "+5 PM",
        description: "muda o alvo para uma criatura que tenha morrido a at\xE9 uma rodada. Esta magia pode cur\xE1-la."
      }
    ]
  },
  {
    name: "Semiplano",
    execution: "completa",
    range: "curto",
    effect: "semiplano com 30m de lado",
    duration: "1 dia",
    description: "Voc\xEA cria um semiplano \u2014 uma dimens\xE3o particular. Voc\xEA pode entrar no semiplano gastando uma a\xE7\xE3o padr\xE3o e 1 PM, desaparecendo do plano material como se tivesse se teletransportado. Voc\xEA pode levar criaturas volunt\xE1rias que esteja tocando, ao custo de 1 PM por criatura extra. Voc\xEA tamb\xE9m pode levar objetos que esteja tocando, ao custo de 1 PM por 200kg. Uma vez no semiplano, voc\xEA pode gastar uma a\xE7\xE3o completa para voltar ao plano material, no mesmo local onde estava. Caso conhe\xE7a a magia ''Viagem Planar'', pode lan\xE7\xE1-la para voltar ao plano material em outro local.\n\n\n\nVoc\xEA escolhe a forma e a apar\xEAncia do semiplano \u2014 uma caverna, um asteroide que singra o \xE9ter, um palacete de cristal etc. Ele cont\xE9m ar, luz e calor, mas al\xE9m disso \xE9 vazio. Entretanto, voc\xEA pode levar itens (mob\xEDlia, ferramentas etc.) a cada viagem.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "adiciona alvo (1 criatura). Voc\xEA cria uma semiplano labir\xEDntico e expulsa o alvo para ele. A cada rodada, a v\xEDtima tem direito a um teste de Intelig\xEAncia (CD 30), com b\xF4nus cumulativo de +1 para cada teste j\xE1 realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lan\xE7ada. Magias como ''Salto Dimensional'' e ''Teletransporte'' n\xE3o ajudam a escapar do labirinto, mas ''Viagem Planar'', sim."
      },
      {
        cost: "+5 PM",
        description: "muda a dura\xE7\xE3o para permanente e adiciona componente material (diorama do semiplano feito de materiais preciosos no valor de T$ 5.000). Voc\xEA pode lan\xE7ar a magia diversas vezes para aumentar as dimens\xF5es do semiplano em +30m de lado a cada vez."
      }
    ]
  },
  {
    name: "Sombra Assassina",
    execution: "padr\xE3o",
    range: "curto",
    target: "1 criatura",
    duration: "cena",
    resistence: "Vontade parcial",
    description: "Esta magia cria uma duplicata ilus\xF3ria do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifesta\xE7\xE3o s\xF3lida de sua pr\xF3pria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma a\xE7\xE3o hostil \u2014 fazer um ataque, usar uma habilidade, lan\xE7ar uma magia \u2014 a sombra imediatamente realiza a mesma a\xE7\xE3o contra o alvo, usando as mesmas estat\xEDsticas e rolagens. A sombra pode ser atacada, tem as mesmas estat\xEDsticas do alvo e \xE9 destru\xEDda quando chega a 0 PV. Se o alvo passar no teste de resist\xEAncia, a sombra desaparece no final do turno do alvo, depois de copiar sua a\xE7\xE3o dessa rodada.\n\n\n\n'''+10 PM:''' muda o alvo para criaturas escolhidas na \xE1rea.",
    enhancements: []
  },
  {
    name: "Toque da Morte",
    execution: "padr\xE3o",
    range: "toque",
    target: "1 criatura",
    duration: "instant\xE2nea",
    resistence: "Fortitude parcial",
    description: "Sua m\xE3o exala energias letais. Se a criatura tocada falhar no teste de Fortitude, seus PV s\xE3o reduzidos a \u201310; se passar, sofre 10d8 pontos de dano de trevas.",
    enhancements: [
      {
        cost: "+2 PM",
        description: "muda o alcance para curto. Em vez de tocar no alvo, voc\xEA dispara um raio p\xFArpura da ponta de seu dedo indicador."
      }
    ]
  }
];

// src/routes/spells.ts
var import_zod = require("zod");
var SpellsRoute = async (app) => {
  app.get("/spells", async () => {
    return spells_default;
  });
  app.get("/spells/:name", async (request, reply) => {
    const paramsSchema = import_zod.z.object({
      name: (0, import_zod.string)()
    });
    const { name } = paramsSchema.parse(request.params);
    const spellFound = spells_default.find(
      (spell) => spell.name === name || spell.name.toLowerCase() === name || spell.name.toUpperCase() === name || spell.name.split(/\s+/).join("-").toLowerCase() === name
    );
    if (!spellFound) {
      reply.status(404).send({
        message: "Magia n\xE3o encontrada"
      });
    }
    return spellFound;
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SpellsRoute
});
