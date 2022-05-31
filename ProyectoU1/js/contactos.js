class Contactos extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadowRoot=this.attachShadow({mode:'open'});

    }
}

window.customElements.define('contactos-mascotas', Contactos);