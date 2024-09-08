class RecintosZoo {
    constructor() {
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
                restricao: 'savanaerio'
            },
        };

        this.recintos = [
            { nome: 'Recinto 1', bioma: 'savana', totalEspaco: 10, espacoOcupado: 5, tipo: 'herbivoro' },
            { nome: 'Recinto 2', bioma: 'floresta', totalEspaco: 5, espacoOcupado: 2, tipo: 'herbivoro' },
            { nome: 'Recinto 3', bioma: 'savana', totalEspaco: 7, espacoOcupado: 5, tipo: 'herbivoro' },
            { nome: 'Recinto 4', bioma: 'rio', totalEspaco: 8, espacoOcupado: 3, tipo: 'carnivoro' }
        ];
    }

    // Função para validar o animal
    validaAnimal(animal) {
        if (!this.animaisConfig[animal]) {
            return { erro: 'Animal inválido', recintosViaveis: false };
        }
        return null;
    }

    // Função para validar a quantidade
    validaQuantidade(quantidade) {
        if (quantidade <= 0) {
            return { erro: 'Quantidade inválida', recintosViaveis: false };
        }
        return null;
    }

    // Função para verificar se o bioma do recinto é compatível com o animal
    verificaCompatibilidadeBioma(animal, recinto) {
        const biomasValidos = this.animaisConfig[animal].biomas;
        return biomasValidos.includes(recinto.bioma);
    }

    // Função para verificar se o tipo do recinto é compatível com o tipo do animal (carnívoro/herbívoro)
    verificaCompatibilidadeTipo(animal, recinto) {
        const tipoAnimal = this.animaisConfig[animal].tipo;
        return tipoAnimal === recinto.tipo;
    }

    // Função para encontrar recintos viáveis para o animal e quantidade
    encontraRecintosViaveis(animal, quantidade) {
        const tamanhoAnimal = this.animaisConfig[animal].tamanho;
        const recintosViaveis = this.recintos
            .filter(recinto => this.verificaCompatibilidadeBioma(animal, recinto) && this.verificaCompatibilidadeTipo(animal, recinto))
            .map(recinto => {
                const espacoLivre = recinto.totalEspaco - recinto.espacoOcupado;
                return espacoLivre >= tamanhoAnimal * quantidade
                    ? `${recinto.nome} (espaço livre: ${espacoLivre} total: ${recinto.totalEspaco})`
                    : null;
            })
            .filter(recinto => recinto !== null);

        return recintosViaveis.length ? recintosViaveis : null;
    }

    // Função principal que analisa os recintos
    analisaRecintos(animal, quantidade) {
        // Valida animal
        const erroAnimal = this.validaAnimal(animal);
        if (erroAnimal) {
            return erroAnimal;
        }

        // Valida quantidade
        const erroQuantidade = this.validaQuantidade(quantidade);
        if (erroQuantidade) {
            return erroQuantidade;
        }

        // Encontra recintos viáveis
        const recintosViaveis = this.encontraRecintosViaveis(animal, quantidade);
        if (!recintosViaveis) {
            return { erro: 'Não há recinto viável', recintosViaveis: false };
        }

        return { erro: false, recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };