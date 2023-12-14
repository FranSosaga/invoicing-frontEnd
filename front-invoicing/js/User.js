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
  
    // Método para obtener el usuario
    getUser() {
      const apiUrl = 'https://ejemplo.com/api/usuario';
  
      // Realizar la solicitud Fetch
      return fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
  
          // Parsear la respuesta JSON
          return response.json();
        })
        .then(usuario => {
          // Asignar los valores obtenidos a los atributos
          this.nombre = usuario.nombre;
          this.rut = usuario.rut;
          this.tipoDocumento = usuario.tipoDocumento;
          this.documento = usuario.documento;
          this.pais = usuario.pais;
          this.localidad = usuario.localidad;
          this.direccion = usuario.direccion;
          this.email = usuario.email;
          this.telefono = usuario.telefono;
        })
        .catch(error => {
          console.error('Error en la solicitud:', error.message);
        });
    }
  
    // Método para obtener un usuario de prueba
    getUserPrueba() {
      // Llamando al constructor con valores predeterminados
      const userPrueba = new User();
      console.log(userPrueba);
      return userPrueba;
    }
  }

  const userr =  new User();
  
  document.getElementById("nombreCompleto").innerHTML = userr.nombre + " " + userr.apellido;
  document.getElementById("ubicacion").innerHTML = userr.pais + ", " + userr.localidad;
  document.getElementById("rut").innerHTML = userr.rut;
  document.getElementById("nombre").innerHTML = userr.nombre;
  document.getElementById("tipoDocumento").innerHTML = userr.tipoDocumento;
  document.getElementById("documento").innerHTML = userr.documento;
  document.getElementById("apellido").innerHTML = userr.apellido;
  document.getElementById("pais").innerHTML = userr.pais;
  document.getElementById("localidad").innerHTML = userr.localidad;
  document.getElementById("direccion").innerHTML = userr.direccion;
  document.getElementById("codigoPostal").innerHTML = userr.codigoPostal;
  document.getElementById("email").innerHTML = userr.email;
  document.getElementById("telefono").innerHTML = userr.telefono;


  