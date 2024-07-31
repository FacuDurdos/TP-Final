let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let box = document.getElementById("boxArea");
let enviar = document.getElementById("enviar");
let informacion = [];


enviar.addEventListener("click", (e) => {
    e.preventDefault();
    if (nombre.value === "" || apellido.value === "" || email.value === "" || telefono.value === "" || box.value === "") {
        alert("Por favor complete todos los campos para continuar.");
        return;
    }
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = box.value;
    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "contacto.txt");
});