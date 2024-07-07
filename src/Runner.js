
module.exports = class Runner {
    constructor(nome, velocidade, manobrabilidade, poder, pontos = 0) {
        this.NOME = nome;
        this.VELOCIDADE = velocidade;
        this.MANOBRABILIDADE = manobrabilidade;
        this.PODER = poder;
        this.PONTOS = pontos;
    }

    // Método para exibir informações do corredor
    displayInfo() {
        console.log(`Nome: ${this.NOME},
                    Velocidade: ${this.VELOCIDADE}, 
                    Manobrabilidade: ${this.MANOBRABILIDADE},
                    Poder: ${this.PODER},
                    Pontos: ${this.PONTOS}`);
    }
};
