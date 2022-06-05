//CREA EL ELEMNTO 
let elem1 = document.createElement('h3');
// Clona el contenido de la plantilla para reutilizarlo
//templateInicio es el ID
elem1.append(templateInicio.content.cloneNode(true));
// Ahora el script de <template> se ejecuta
document.body.append(elem1);


//PARA CUANDO DE CLIC EN EL BOTON ENVIAR
function enviar(){
    alert("Servicio solicitado correctamente");
}

//PARA EL TEMPLATE DE LA FOTO
function mirarFoto() {
    class claseMascota extends HTMLElement{
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
  window.customElements.define('aqui-mascota', claseMascota);
  }