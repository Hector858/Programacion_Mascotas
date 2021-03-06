const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="pet-card/styles.css"/>
    <div class="pet-card">
      <div class="avatar">
        <img />
      </div>
      <div class="details">
        <h2></h2>
        <div class="info">
          <p>Raza: <slot name="breed" /></p>
          <p>Edad: <slot name="age" /></p>
        </div>
        <div class="actions">
            <button id="greet">Di Hola!</button>
            <button id="toggle">Ver Detalles</button>
        </div>
      </div>
    </div>
`;
class PetCard extends HTMLElement {
  //constructor, se llama cuando se crea o actualiza una instancia del elemento
  constructor() {
    super();
    this.showInfo = false;
    //visualizar la pagina
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleInfo = () => {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".info").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Ocultar Detalles"
      : "Ver Detalles";
  };

  static get observedAttributes() {
    return ["name", "avatar"];
  }

  //AttributeChangedCallback, se llama cuando se agrega, 
  //elimina, actualiza o reemplaza un atributo
  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector(".details h2").innerText =
      this.getAttribute("name");
    this.shadowRoot.querySelector(".avatar img").src =
      this.getAttribute("avatar");
    this.shadowRoot.querySelector(".avatar img").alt =
      this.getAttribute("name");
  }

  //connectedCallback, se llama cada vez que el elemento se inserta en el DOM
  //alerata
  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`¡Hola humano! Soy ${this.getAttribute("name")}`)
      );
  }

  //disabled Callback, se llama cada vez que el elemento se elimina del DOM
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .removeEventListener("click", () =>
        window.alert(`¡Hola humano! Soy ${this.getAttribute("name")}`)
      );
  }
}

export default PetCard;
