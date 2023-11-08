function simularEmprestimo() {
  var valorEmprestimo = parseFloat(document.getElementById("valorEmprestimo").value);
  var numParcelas = parseInt(document.getElementById("numParcelas").value);
  var taxaJuros = parseFloat(document.getElementById("taxaJuros").value);

  if (isNaN(valorEmprestimo) || isNaN(numParcelas) || isNaN(taxaJuros)) {
    document.getElementById("resultado").innerHTML = "Valores inválidos. Por favor, insira valores numéricos válidos.";
    return;
  }

  var mensagem = "Simulador de Empréstimo\n\n";
  var valorRestante = valorEmprestimo;

  for (var parcela = 1; parcela <= numParcelas; parcela++) {
    var valorParcela = valorRestante * taxaJuros;
    mensagem += "Parcela " + parcela + ": R$" + valorParcela.toFixed(2) + "<br>";
    valorRestante -= valorParcela; // Reduz o valor do empréstimo
  }

  mensagem += "<br>Empréstimo quitado!";
  document.getElementById("resultado").innerHTML = mensagem;
}