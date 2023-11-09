var SimuladorEmprestimo = {
  valorEmprestimo: 0,
  numParcelas: 0,
  taxaJuros: 0,

  init: function() {
    this.valorEmprestimo = parseFloat(document.getElementById("valorEmprestimo").value);
    this.numParcelas = parseInt(document.getElementById("numParcelas").value);
    this.taxaJuros = parseFloat(document.getElementById("taxaJuros").value);

    if (isNaN(this.valorEmprestimo) || isNaN(this.numParcelas) || isNaN(this.taxaJuros)) {
      document.getElementById("resultado").innerHTML = "Valores inválidos. Por favor, insira valores numéricos válidos.";
      return;
    }

    this.simular();
  },

  simular: function() {
    var mensagem = "Simulador de Empréstimo\n\n";
    var valorRestante = this.valorEmprestimo;

    for (var parcela = 1; parcela <= this.numParcelas; parcela++) {
      var valorParcela = valorRestante * this.taxaJuros;
      mensagem += "Parcela " + parcela + ": R$" + valorParcela.toFixed(2) + "<br>";
      valorRestante -= valorParcela; // Reduz o valor do empréstimo
    }

    mensagem += "<br>Empréstimo quitado!";
    document.getElementById("resultado").innerHTML = mensagem;
  }
};

// Uso do objeto para iniciar a simulação
SimuladorEmprestimo.init();