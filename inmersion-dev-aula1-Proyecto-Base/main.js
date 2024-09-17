let cantidadCaracteres = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena")

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";



function generar(){
    let numeroDigitado = parseInt(cantidadCaracteres.value)
    console.log(numeroDigitado);


    if (numeroDigitado < 8){
        alert("La contraseña debe tener mas de 8 caracteres")
    }

    let password = ``;

    for(let i = 0; i < numeroDigitado; i++ ){

        let caracterAleatorio =  cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contraseña.value = password;

    if (!validarContraseña(password)){
        limpiarCampo();
    }

    
}

function validarContraseña(password){
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    
    if (!tieneMayuscula || !tieneNumero){
        alert("La contraseña es debil, debe tener un numero y mayuscula")
        return false;
    }
    return true;
}

function limpiarCampo(){
    document.getElementById("contrasena").value = "";

}






