class UserDTO {

    // Constructor con atributos y valores predeterminados
    constructor(name, surname, typeDoc, document, country, location,
        address, postalCode, email, phone) {
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

    


    // Método para obtener el usuario
    mostrarDatos() {

        var formulario = document.getElementById('clienteForm');

        const user = new UserDTO(
            formulario.elements['name'].value,
            formulario.elements['surname'].value,
            formulario.elements['typeDoc'].value,
            formulario.elements['document'].value,
            formulario.elements['country'].value,
            formulario.elements['location'].value,
            formulario.elements['address'].value,
            formulario.elements['codePostal'].value,
            formulario.elements['email'].value,
            formulario.elements['phone'].value
        );
        saveUser(user);
        console.log(user);
    }
}


async function saveUser(user) {
    const response = await fetch("http://localhost:8080/users/saveUser", {
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
       mode: "no-cors",
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
       mode: "no-cors",
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