class UserDTO {
  // Constructor con atributos y valores predeterminados
  constructor(
    name,
    surname,
    typeDoc,
    document,
    country,
    location,
    address,
    postalCode,
    email,
    phone
  ) {
    this.name = name;
    this.surname = surname;
    this.typeDoc = typeDoc;
    this.document = document;
    this.country = country;
    this.location = location;
    this.address = address;
    this.postalCode = postalCode;
    this.email = email;
    this.phone = phone;
  }
}

let buttonRegisterUser = document.getElementById("buttonRegisterUser");

buttonRegisterUser.addEventListener("click", function (event) {
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
  const response = await fetch("http://localhost:8080/users/saveUser", {
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
