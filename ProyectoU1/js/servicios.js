//CREA EL ELEMNTO 
let elem1 = document.createElement('h3');
// Clona el contenido de la plantilla para reutilizarlo múltiples veces
//templateInicio es el ID
elem1.append(templateInicio.content.cloneNode(true));
// Ahora el script de <template> se ejecuta
document.body.append(elem1);


elem.onclick = function() {
    elem.attachShadow({mode: 'open'});

    elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)

    elem.shadowRoot.getElementById('message').innerHTML = "¡Saludos desde las sombras!";
};

//PARA CUANDO DE CLIC EN EL BOTON ENVIAR
function enviar(){
    alert("Servicio solicitado correctamente");

}

//PARA EL TEMPLATE DE LA FOTO
function showContent() {
    class SellButton extends HTMLElement{
    constructor(){
    super();
    }
      connectedCallback(){
      let shadowRoot = this.attachShadow({mode:'open'});
      const t = document.querySelector('#fotomascota');
      const instancia = t.content.cloneNode(true);
      shadowRoot.appendChild(instancia);
      
    }
  }
  window.customElements.define('aqui-mascota', SellButton);
  }