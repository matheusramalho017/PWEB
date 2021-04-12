
//função para calculo de area de retangulo


function calculateRectangleArea(x, y) 
{
    return x * y
  }

  var Retangulo = new calculateRectangleArea("10", "2");
  Retangulo.teste = "Calculo de 10 x 2";

  alert(x + y);
  

// Conta Corrente e poupança

function Conta() 
{
    var nome;
    var banco;
    var numeroconta;
    var saldo;

    this.getNome = function () 
    {
        return nome;
    };
    this.setNome = function (value)
     {
        nome = value;
    };

    this.getBanco = function () 
    {
        return banco;
    };
    this.setBanco = function (value)
     {
        banco = value;
    };

    this.getNumeroConta = function () 
    {
        return numeroconta;
    };
    this.setNumeroConta = function (value)
     {
        numeroconta = value;
    };

    this.getSaldo = function () 
    {
        return saldo;
    };
    this.setSaldo = function (value)
     {
        saldo = value;
    };
}

function ContaCorrente() 
{
    var saldoespecial;
    this.getSaldoEspecial = function () 
    {
        return saldoespecial;
    };
    this.setSaldoEspecial = function (value) 
    {
        saldoespecial = value;
    };
}

function ContaPoupança() 
{
    var juros;
    this.getJuros = function ()
     {
        return juros;
    };
    this.setJuros = function (value)
     {
        juros = value;
    };

    var dtvenc;
    this.getDtVencimento = function ()
     {
        return dtvenc;
    };
    this.setDtVencimento = function (value)
     {
        dtvenc = value;
    };
}


ContaCorrente.prototype = new Conta();
ContaPoupança.prototype = new Conta();


nContaCorrente = new ContaCorrente();
nContaPoupança = new ContaPoupança();

nContaCorrente.setNome('Matheus Ramalho');
nContaCorrente.setBanco('Nubank');
nContaCorrente.setNumeroConta('341313.34');
nContaCorrente.setSaldo('R$2500.00');
nContaCorrente.setSaldoEspecial('R$280.00');

nContaPoupança.setNome('João Paulo');
nContaPoupança.setBanco('Bradesco');
nContaPoupança.setNumeroConta('2312183.35');
nContaPoupança.setSaldo('R$1000.00');
nContaPoupança.setJuros('R$1014.00');
nContaPoupança.setDtVencimento('01/01/2035');

alert(nContaCorrente.getNome() + '\n' + nContaCorrente.getBanco() + '\n' + nContaCorrente.getNumeroConta() + '\n' + nContaCorrente.getSaldo() + '\n' + nContaCorrente.getSaldoEspecial() + '\n' + nContaCorrente.getNumeroConta() + '\n' + nContaCorrente.getSaldo() + '\n' + nContaPoupança.getNome() + '\n' + nContaPoupança.getBanco() + '\n' + nContaPoupança.getNumeroConta() + '\n' + nContaPoupança.getSaldo() + '\n' + nContaPoupança.getJuros()  + '\n' + nContaPoupança.getDtVencimento());



