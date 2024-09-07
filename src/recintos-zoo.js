class RecintosZoo {
    constructor() {
      this.recintos = [
        { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: ['MACACO', 'MACACO', 'MACACO'] },
        { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
        { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: ['GAZELA'] },
        { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
        { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: ['LEAO'] },
      ];
      this.animaisConfig = {
        LEAO: { tamanho: 3, biomas: ['savana'], tipo: 'carnivoro' },
        LEOPARDO: { tamanho: 2, biomas: ['savana'], tipo: 'carnivoro' },
        CROCODILO: { tamanho: 3, biomas: ['rio'], tipo: 'carnivoro' },
        MACACO: { tamanho: 1, biomas: ['savana', 'floresta'], tipo: 'herbivoro' },
        GAZELA: { tamanho: 2, biomas: ['savana'], tipo: 'herbivoro' },
        HIPOPOTAMO: {
          tamanho: 4,
          biomas: ['savana', 'rio'],
          tipo: 'herbivoro',
          restricao: 'savanaerio',
        },
      };
    }
  }
  
  export { RecintosZoo as RecintosZoo };
