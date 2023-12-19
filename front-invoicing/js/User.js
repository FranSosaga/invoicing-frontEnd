class User {


        // Constructor con atributos y valores predeterminados
    constructor(nombre = "Fran", apellido = "Sosa",rut = "123", tipoDocumento = "Ci", documento = 48828913, pais = "Uruguay", localidad = "Montevideo",
     direccion = "Mercedes 1482", codigoPostal = 1100, email = "fran-sosaaa@hotmail.com", telefono = "099596648") {
      this.apellido= apellido;
      this.nombre = nombre;
      this.rut = rut;
      this.tipoDocumento = tipoDocumento;
      this.documento = documento;
      this.pais = pais;
      this.localidad = localidad;
      this.direccion = direccion;
      this.codigoPostal = codigoPostal;
      this.email = email;
      this.telefono = telefono;
    }  
   
  }

  let buton = document.getElementById("registerUser");

  buton.addEventListener("click", evnto => {
    saveUser();
  });
  
  function saveUser() {
    try {
      var userDTO = new UserDTO(
        document.getElementById('nombre').value,
        document.getElementById('apellido').value, 
        document.getElementById('tipoDocumento').value,
        document.getElementById('documento').value,
        document.getElementById('pais').value,
        document.getElementById('localdidad').value,
        document.getElementById('direccion').value,
        document.getElementById('codigoPostal').value,
        document.getElementById('email').value,
        document.getElementById('telefono').value
      );
      saveUser(userDTO);


      console.log('Datos guardados en UserDTO:', userDTO);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  