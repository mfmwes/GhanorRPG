// src/jsons/racas.json
var racas_default = [
  {
    id: 1,
    nome: "Humano",
    bonus: {
      for: 0,
      des: 0,
      con: 0,
      int: 0,
      sab: 0,
      car: 0
    },
    habilidades_de_raca: [
      { nome: "+1 em Tr\xEAs Atributos Diferentes" },
      {
        nome: "Vers\xE1til",
        descricao: "Voc\xEA se torna treinado em duas per\xEDcias a sua escolha (n\xE3o precisam ser da sua classe). Voc\xEA pode trocar uma dessas per\xEDcias por um poder geral a sua escolha."
      }
    ]
  },
  {
    id: 2,
    nome: "An\xE3o",
    bonus: {
      for: 0,
      des: 0,
      con: 2,
      int: 1,
      sab: 0,
      car: -1
    },
    habilidades_de_raca: [
      {
        nome: "Busca pela perfei\xE7\xE3o",
        descricao: "Voc\xEA recebe +2 em Of\xEDcio e, se for treinado nesta per\xEDcia, pode fabricar itens superiores com uma melhoria (cumulativo com outras habilidades que permitam fabricar itens superiores)."
      },
      {
        nome: "Devagar e Sempre",
        descricao: "Seu deslocamento \xE9 6m (em vez de 9m).\n   Por\xE9m, seu deslocamento n\xE3o \xE9 reduzido por uso de armadura ou excesso de carga."
      },
      {
        nome: "Moldado nas rochas",
        descricao: "Voc\xEA recebe vis\xE3o no escuro e +1 ponto de vida por n\xEDvel."
      }
    ]
  },
  {
    id: 3,
    nome: "Elfo",
    bonus: {
      for: 0,
      des: 1,
      con: -1,
      int: 0,
      sab: 2,
      car: 0
    },
    habilidades_de_raca: [
      {
        nome: "Armas da Floresta",
        descricao: "Para voc\xEA, todos os arcos s\xE3o armas simples, e voc\xEA recebe +2 em rolagens de dano com estas armas."
      },
      {
        nome: "Magia Antiga",
        descricao: "Voc\xEA recebe +1 ponto de mana por n\xEDvel e usa Sabedoria como atributo-chave de Misticismo e de magias arcanas (em vez de Intelig\xEAncia)."
      },
      {
        nome: "Passo Leve",
        descricao: "Voc\xEA recebe +2 em Furtividade e seu deslocamento \xE9 12m (em vez de 9m)."
      },
      {
        nome: "Sentidos \xC9lficos",
        descricao: "Voc\xEA recebe vis\xE3o na penumbra e +2 em Percep\xE7\xE3o."
      },
      {
        nome: "Sentimentos Conflitantes",
        descricao: "Voc\xEA sofre \u20135 em Diplomacia e Vontade. Consumir uma dose de de turlin (veja o Cap\xEDtulo 3) anula esta penalidade por uma cena"
      }
    ]
  },
  {
    id: 4,
    nome: "Gigante",
    bonus: {
      for: 3,
      des: 0,
      con: 2,
      int: -2,
      sab: -1,
      car: -1
    },
    habilidades_de_raca: [
      {
        nome: "Grand\xE3o",
        descricao: "Seu tamanho \xE9 Grande (veja a p\xE1gina 71) e voc\xEA soma sua For\xE7a em seu total de pontos de vida.\n Voc\xEA pode usar armas normais ou aumentadas, mas s\xF3 pode vestir armaduras especialmente feitas para seu tamanho"
      },
      {
        nome: "Primitivo",
        descricao: "Voc\xEA sofre \u20135 em Diplomacia, Intui\xE7\xE3o e Of\xEDcio e em testes de ataque com armas marciais ou ex\xF3ticas."
      }
    ]
  }
];
