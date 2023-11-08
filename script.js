var valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
var numParcelas = parseInt(prompt("Digite o número de parcelas desejadas:"));
var taxaJuros = parseFloat(prompt("Digite a taxa de juros (em formato decimal, por exemplo, 0.05 para 5%):"));

if (!isNaN(valorEmprestimo) && !isNaN(numParcelas)) {
  var mensagem = "Simulador de Empréstimo\n\n";

  for (var parcela = 1; parcela <= numParcelas; parcela++) {
    var valorParcela = valorEmprestimo * taxaJuros;
    mensagem += "Parcela " + parcela + ": R$" + valorParcela.toFixed(2) + "\n";
    valorEmprestimo -= valorParcela; // Reduz o valor do empréstimo
  }

  mensagem += "\nEmpréstimo quitado!";
  alert(mensagem);
} else {
  alert("Valores inválidos. Por favor, insira valores numéricos válidos.");
}