let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();

const clientes = new Clientes()
const cli1Conta01 = new Conta('01', 0)
const cli2Conta02 = new Conta('02', 0)
const cli1 = new Cliente('Jose', '001', cli1Conta01)
const cli2 = new Cliente('Maria', '002', cli2Conta02)
clientes.inserir(cli1)
clientes.inserir(cli2)
const listaDeclientes = clientes.listar()
//remover jose
clientes.remover('001')
//pesquisar maria
console.log(clientes.pesquisar('002'))

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
