class ClienteEspecial extends Cliente {
    dependentes;
    constructor(nome, cpf) {
        super(nome, cpf);
        this.dependentes = new Array();
    }
}
