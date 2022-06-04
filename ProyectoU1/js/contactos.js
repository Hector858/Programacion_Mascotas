const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="css/contactos.css">
    <center>
    <button type="submit" id="greet" onclick=" return validar(); ">ENVIAR</button>
    </center>
    
`;

class Contactos extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    

    connectedCallback(){
        
        //let elementRoot=document.createElement('div');

        this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`¡Hola! Haz sido registrado`)
      )
      ;
    }

    disconnectedCallback() {
      this.shadowRoot
        .querySelector("#greet")
        .removeEventListener("click", () =>
          window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
        );
    }
}

window.customElements.define('contactos-mascotas', Contactos);

function validar(){
  formulario.reset();
  return false;
}

