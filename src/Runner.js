
module.exports = class Runner {
    constructor(nome, velocidade, manobrabilidade, poder, pontos = 0) {
        this.NOME = nome;
        this.VELOCIDADE = velocidade;
        this.MANOBRABILIDADE = manobrabilidade;
        this.PODER = poder;
        this.PONTOS = pontos;
    }

};
