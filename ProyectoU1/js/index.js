class MyContent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` <style src="css/estilos1.css">
        </style>
        <div class="slider">
            <ul>
                <li><img src="img/index/ima1.jpg"></li>
                <li><img src="img/index/ima2.jpg"></li>
                <li><img src="img/index/ima4.jpg"></li>
                <li><img src="img/index/ima3.jpg"></li>
            </ul>
        </div>
        `
    }
}
customElements.define('my-content', MyContent);

class Burbujas extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <style src="css/estilos1.css">
        </style>
        <div class="burbujas">
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
        </div>
        `
    }
}
customElements.define('my-bubble', Burbujas);

class Atributo extends HTMLElement {
    connectedCallback() {
    const icono = this.getAttribute('icono');
    const qs=icono!==null ? 'img/index/icono1.png': 'img/index/icono1.png';
    this.innerHTML = `<img src="${qs}"></img>`;
    }
    
}
window.customElements.define('my-atribute', Atributo);