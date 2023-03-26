//1. Desenvolver a classe Cliente, contendo como atributos:
//nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set;
class Cliente {
    nome;
    cpf;
    conta;
    constructor(nome, cpf, conta = undefined) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getConta() {
        return this.conta;
    }
    setNome(newName) {
        this.nome = newName;
    }
}
