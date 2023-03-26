//2. Desenvolver a classe Clientes, que armazenará todos os clientes do banco
//num array de clientes (atributo da classe), e terá os seguintes métodos:
//2.1 inserir, que recebe um parâmetro do tipo Cliente inserirá um cliente no array de clientes da classe Clientes
//2.2 remover, que recebe um cpf e removerá o cliente daquele cpf, se existir
//2.3 listar, que devolverá um array de Cliente
//2.4 pesquisar, que receberá o cpf do cliente e devolverá o cliente encontrado (se encontrar)
class Clientes {
    clientes;
    constructor() {
        this.clientes = new Array();
    }
    inserir(newClient) {
        this.clientes.push(newClient);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getCpf() === cpf);
    }
}
