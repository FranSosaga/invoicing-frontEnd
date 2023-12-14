class UserDTO {

    // Constructor con atributos y valores predeterminados
    constructor(nombre, apellido, tipoDocumento, documento, pais, localidad, direccion, codigoPostal, email, telefono) {
        this.apellido = apellido;
        this.nombre = nombre;
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
    weriteUser() {

        var formulario = document.getElementById('clienteForm');

        const user = new UserDTO(
            formulario.elements['nombre'].value,
            formulario.elements['apellido'].value,
            formulario.elements['tipoDocumento'].value,
            formulario.elements['documento'].value,
            formulario.elements['pais'].value,
            formulario.elements['localidad'].value,
            formulario.elements['direccion'].value,
            formulario.elements['codigoPostal'].value,
            formulario.elements['email'].value,
            formulario.elements['telefono'].value
        );
        console.log(user);
    }
}


async function saveUser(user) {
    const response = await fetch("url", {
       method: "POST",
       mode: "cors",
       cache: "no-cache",
       credentials: "same-origin",
       headers: {
           "Content-Type": "application/json"
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
       body: JSON.stringify(user),
    }); 
    return response;   

}

async function getUserRUT(rut) {
    const response = await fetch("url", {
       method: "POST",
       mode: "cors",
       cache: "no-cache",
       credentials: "same-origin",
       headers: {
           "Content-Type": "application/json"
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
       body: JSON.stringify(rut),
    }); 
    return response;   

}

async function getUserCI(ci) {
    const response = await fetch("url", {
       method: "POST",
       mode: "cors",
       cache: "no-cache",
       credentials: "same-origin",
       headers: {
           "Content-Type": "application/json"
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
       body: JSON.stringify(ci),
    }); 
    return response;   

}

async function getUserPASSPORT(passport) {
    const response = await fetch("url", {
       method: "POST",
       mode: "cors",
       cache: "no-cache",
       credentials: "same-origin",
       headers: {
           "Content-Type": "application/json"
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
       body: JSON.stringify(passport),
    }); 
    return response;   

}