class ClienteController {
    inputNome;
    inputCpf;
    inputConta;
    clientes;
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputConta.value);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        //console.log('cliente',  `${cliente.getNome()} - ${cliente.getCpf()} - ${cliente.getConta().toString()}`);
        elementoP.textContent = `${cliente.getNome()} - ${cliente.getCpf()} - ${cliente.getConta().toString()}`;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.getCpf());
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
