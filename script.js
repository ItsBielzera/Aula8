// Defina o construtor do objeto Empréstimo
function Empréstimo(valor, parcelas, juros) {
  this.valorEmprestimo = valor;
  this.numParcelas = parcelas;
  this.taxaJuros = juros;
}

// Adicione um método para calcular as parcelas do empréstimo
Empréstimo.prototype.calcularParcelas = function() {
  var parcelas = [];
  var valorRestante = this.valorEmprestimo;
  for (var parcela = 1; parcela <= this.numParcelas; parcela++) {
    var valorParcela = valorRestante * this.taxaJuros;
    parcelas.push({
      numero: parcela,
      valor: valorParcela.toFixed(2),
    });
    valorRestante -= valorParcela;
  }
  return parcelas;
};

// Crie uma função para iniciar o simulador
function iniciarSimulador() {
  var valor = parseFloat(prompt("Digite o valor do empréstimo:"));
  var parcelas = parseInt(prompt("Digite o número de parcelas desejadas:"));
  var juros = parseFloat(prompt("Digite a taxa de juros (em formato decimal, por exemplo, 0.05 para 5%):"));

  if (!isNaN(valor) && !isNaN(parcelas) && !isNaN(juros)) {
    var emprestimo = new Empréstimo(valor, parcelas, juros);
    var resultado = emprestimo.calcularParcelas();

    var mensagem = "Simulador de Empréstimo\n\n";
    for (var i = 0; i < resultado.length; i++) {
      mensagem += "Parcela " + resultado[i].numero + ": R$" + resultado[i].valor + "\n";
    }

    mensagem += "\nEmpréstimo quitado!";
    alert(mensagem);
  } else {
    alert("Valores inválidos. Por favor, insira valores numéricos válidos.");
  }
}