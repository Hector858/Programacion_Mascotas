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

class Informacion extends HTMLElement{
  constructor(){
    super();
    let shadowEl=this.attachShadow({mode:'closed'});

    let elementRoot=document.getElementsByClassName("contact-info");
    /*let nNamelabel=document.createElement('label');
    nNamelabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Nombre Completo`;*/
    let nNameEl=document.getElementsByName('fullname');
    
    /*let nEmaillabel=document.createElement('label');
    nEmaillabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Email`;*/
    let nEmailEl=document.getElementsByName('email');
    
    /*let nNumerlabel=document.createElement('label');
    nNumerlabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Numero`;
    */let nNumerEl=document.getElementsByName('phone');


    /*elementRoot.append(document.createElement('p'));
    /*elementRoot.append(nNamelabel);*/
    elementRoot.append(nNameEl);
    /*elementRoot.append(document.createElement('p'));
    /*elementRoot.append(nEmaillabel);*/
    elementRoot.append(nNumerEl);
    /*elementRoot.append(document.createElement('p'));
    /*elementRoot.append(nNumerlabel);*/
    elementRoot.append(nEmailEl);

    let spanOutput=document.createElement('span');
    /*elementRoot.append(document.createElement('br'));*/
    elementRoot.append(spanOutput);

    this.nameElChage = () =>{
      spanOutput.innerHTML=`
            
      <link rel="stylesheet" href="css/contactos.css">
      <div class="contact-info">

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <h4>Mas Info</h4>
        <ul>
            <li><i class="fas fa-map-marker-alt"></i> ${nNameEl.value}</li>
            <li><i class="fas fa-phone"></i> ${nNumerEl.value}</li>
            <li><i class="fas fa-envelope-open-text"></i> ${nEmailEl.value} </li>
        </ul>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                    <p>Novicompu.com</p></div>
        <div>`;
    }

    nNameEl.addEventListener('change', this.nameElChage);
    nNumerEl.addEventListener('change', this.nameElChage);
    nEmailEl.addEventListener('change', this.nameElChage);

    shadowEl.append(elementRoot);
  }

}

window.customElements.define('informacion-resgistro', Informacion);