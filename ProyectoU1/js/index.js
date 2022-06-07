class MyContent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = ` <style src="css/estilos1.css">
        </style>
        <div class="slider">
            <ul>
                <li><img src="img/ima1.jpg"></li>
                <li><img src="img/ima2.jpg"></li>
                <li><img src="img/ima4.jpg"></li>
                <li><img src="img/ima3.jpg"></li>
            </ul>
        </div>
        `
    }
}
customElements.define('my-content', MyContent);

class Atributo extends HTMLElement {
    connectedCallback() {
    const entrenamiento = this.getAttribute('entrenamiento');
    const qs=entrenamiento!==null ? 'img/index/Entranamiento.svg': 'img/index/pet.svg';
    this.innerHTML = `<img src="${qs}"`;
    }
    
}
window.customElements.define('imagenes-redes', Atributo);