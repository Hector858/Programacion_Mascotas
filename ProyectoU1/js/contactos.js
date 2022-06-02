class Contactos extends HTMLElement{
    constructor(){
        super();

    }
    

    connectedCallback(){
        this.attachShadow({mode:"open"});
        //let elementRoot=document.createElement('div');

        this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`¡Hola! Haz sido registrado`)
      );
    }
}

window.customElements.define('contactos-mascotas', Contactos);