//1. Desenvolver a classe Cliente, contendo como atributos:
//nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set;
class Cliente {
    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta = undefined){
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }

    getNome(): string{
        return this.nome;
    }
    getCpf(): string{
        return this.cpf;
    }
    getConta(): Conta{
        return this.conta;
    }
    setNome(newName: string): void{
        this.nome = newName;
    }
}