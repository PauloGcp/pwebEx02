class ClienteEspecial extends Cliente {
    private dependentes: Array<Cliente>

    constructor(nome: string, cpf: string){
        super(nome, cpf)
        this.dependentes = new Array<Cliente>()
    }
}