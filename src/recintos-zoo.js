class RecintosZoo {
    constructor() {
        this.recintos = [
            { nome: 'Recinto 1', tipoAnimal: 'MACACO', totalEspaco: 10, espacoOcupado: 5 },
            { nome: 'Recinto 2', tipoAnimal: 'MACACO', totalEspaco: 5, espacoOcupado: 2 },
            { nome: 'Recinto 3', tipoAnimal: 'MACACO', totalEspaco: 7, espacoOcupado: 5 },
            { nome: 'Recinto 4', tipoAnimal: 'CROCODILO', totalEspaco: 8, espacoOcupado: 3 }
        ];
    }

    validaAnimal(animal) {
        const animaisValidos = ['MACACO', 'CROCODILO'];
        if (!animaisValidos.includes(animal)) {
            return { erro: 'Animal inválido', recintosViaveis: false };
        }
        return null;
    }

    validaQuantidade(quantidade) {
        if (quantidade <= 0) {
            return { erro: 'Quantidade inválida', recintosViaveis: false };
        }
        return null;
    }

    encontraRecintosViaveis(animal, quantidade) {
        const recintosViaveis = this.recintos.filter(recinto => recinto.tipoAnimal === animal)
            .map(recinto => {
                const espacoLivre = recinto.totalEspaco - recinto.espacoOcupado;
                return espacoLivre >= quantidade
                    ? `${recinto.nome} (espaço livre: ${espacoLivre} total: ${recinto.totalEspaco})`
                    : null;
            })
            .filter(recinto => recinto !== null);

        return recintosViaveis.length ? recintosViaveis : null;
    }

    analisaRecintos(animal, quantidade) {
        const erroAnimal = this.validaAnimal(animal);
        if (erroAnimal) {
            return erroAnimal;
        }

        const erroQuantidade = this.validaQuantidade(quantidade);
        if (erroQuantidade) {
            return erroQuantidade;
        }

        const recintosViaveis = this.encontraRecintosViaveis(animal, quantidade);
        if (!recintosViaveis) {
            return { erro: 'Não há recinto viável', recintosViaveis: false };
        }

        return { erro: false, recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };