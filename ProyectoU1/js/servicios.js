let elem1 = document.createElement('h3');

// Clona el contenido de la plantilla para reutilizarlo múltiples veces
elem1.append(templateInicio.content.cloneNode(true));

document.body.append(elem1);
// Ahora el script de <template> se ejecuta

elem.onclick = function() {
    elem.attachShadow({mode: 'open'});

    elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)

    elem.shadowRoot.getElementById('message').innerHTML = "¡Saludos desde las sombras!";
};

function enviar(){
    alert("Servicio solicitado correctamente");

}