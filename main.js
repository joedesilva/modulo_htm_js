function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
      alert("Formulário válido! B é maior que A.");
    } else {
      alert("Formulário inválido! B deve ser maior que A.");
    }
  }