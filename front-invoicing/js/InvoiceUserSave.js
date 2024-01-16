let userNoRegister = document.getElementById("buttonRegisterUserInvoice");

userNoRegister.addEventListener("click", function (event) {
  event.preventDefault();
  registerUser();
});

function registerUser() {
  try {
    var userDTO = new UserDTO(
      document.getElementById("nombre").value,
      document.getElementById("apellido").value,
      document.getElementById("tipoDocumento").value,
      document.getElementById("documento").value,
      document.getElementById("pais").value,
      document.getElementById("localdidad").value,
      document.getElementById("direccion").value,
      document.getElementById("codigoPostal").value,
      document.getElementById("email").value,
      document.getElementById("telefono").value
    );
    saveUser(userDTO);

    console.log("Datos guardados en UserDTO:", userDTO);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function saveUser(user) {
  const response = await fetch("https://app-invoice-a935d1e604c9.herokuapp.com/users/saveUser", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(user),
  });
  return response;
}
