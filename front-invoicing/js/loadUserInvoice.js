function getValueURL() {
  var parametros = {};
  var url = window.location.href;
  var partes = url.slice(url.indexOf("?") + 1).split("&");

  partes.forEach(function (parte) {
    var claveValor = parte.split("=");
    parametros[claveValor[0]] = decodeURIComponent(claveValor[1] || "");
  });

  console.log(parametros);
  return parametros;
}

function loadDataInForm() {
  var formulario = document.getElementById("createInvoice");
  var parametros = obtenerParametrosUrl();

  for (var clave in parametros) {
    if (parametros.hasOwnProperty(clave)) {
      var input = formulario.getElementById(clave);
      if (input) {
        input.value = parametros[clave];
      }
    }
    console.log(formulario);
  }
}
