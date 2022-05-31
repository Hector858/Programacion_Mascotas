let elem = document.createElement('div');

// Clona el contenido de la plantilla para reutilizarlo múltiples veces
elem.append(tmpl.content.cloneNode(true));

document.body.append(elem);
// Ahora el script de <template> se ejecuta