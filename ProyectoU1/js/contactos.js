const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="css/contactos.css">
<p class="block">
    <center>
    <button type="submit" id="greet" onclick=" return validar(); ">ENVIAR</button>
    </center>
    </p>
`;

/*class Contactos extends HTMLElement{
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
        window.alert(`¡Hola! Haz sido registrado ${document.getElementsByName('fullname')[0].value}`)
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

window.customElements.define('contactos-mascotas', Contactos);*/

function validar(){
  formulario.reset();
  return true;
}

class Informacion extends HTMLElement{
  constructor(){
    super();

    let shadowEl=this.attachShadow({mode:'open'});

    let elementRoot=document.createElement('div');
    let elementRoot2=document.createElement('form');
    elementRoot2.innerHTML= `<link rel="stylesheet" href="css/contactos.css">`;
    let nNamelabel=document.createElement('label');
    nNamelabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Nombre Completo`;
    let nNameEl=document.createElement('input');
    nNameEl.innerHTML= `<link rel="stylesheet" href="css/contactos.css">`;
    let nEmaillabel=document.createElement('label');
    nEmaillabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Email`;
    let nEmailEl=document.createElement('input');
    nEmailEl.innerHTML= `<link rel="stylesheet" href="css/contactos.css">`;
    let nNumerlabel=document.createElement('label');
    nNumerlabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Número del teléfono`;
    let nNumerEl=document.createElement('input');

    let nDireclabel=document.createElement('label');
    nDireclabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Dirección`;
    let nDirecEl=document.createElement('input');
    let nCedulabel=document.createElement('label');
    nCedulabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Cédula`;
    let nCedulEl=document.createElement('input');
    let nRazalabel=document.createElement('label');
    nRazalabel.innerHTML= `<link rel="stylesheet" href="css/contactos.css">Raza de perro que desea adoptar`;
    let nRazaEl=document.createElement('input');


    let parr1=document.createElement('p');
    let parr2=document.createElement('p');
    let parr3=document.createElement('p');
    let parr4=document.createElement('p');
    let parr5=document.createElement('p');
    let parr6=document.createElement('p');
    /*elementRoot2.append(document.createElement('p'));*/
    parr1.append(nNamelabel);
    parr1.append(nNameEl);
    /*elementRoot2.append(document.createElement('p'));*/
    parr2.append(nEmaillabel);
    parr2.append(nEmailEl);
    /*elementRoot2.append(document.createElement('p'));*/
    parr3.append(nNumerlabel);
    parr3.append(nNumerEl);

    /*elementRoot2.append(document.createElement('p'));*/
    parr4.append(nDireclabel);
    parr4.append(nDirecEl);
    /*elementRoot2.append(document.createElement('p'));*/
    parr5.append(nCedulabel);
    parr5.append(nCedulEl);
    /*elementRoot2.append(document.createElement('p'));*/
    parr6.append(nRazalabel);
    parr6.append(nRazaEl);

    elementRoot2.append(parr1);
    elementRoot2.append(parr2);
    elementRoot2.append(parr3);
    elementRoot2.append(parr4);
    elementRoot2.append(parr5);
    elementRoot2.append(parr6);

    let elementRoot1=document.createElement('div');

    this.nameElChage = () =>{
      elementRoot1.innerHTML=`
            
      <link rel="stylesheet" href="css/contactos.css">

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <h4>Mas Info</h4>
        <ul>
            <li><i class="fas fa-map-marker-alt"></i> ${nNameEl.value}</li>
            <li><i class="fas fa-phone"></i> ${nNumerEl.value}</li>
            <li><i class="fas fa-envelope-open-text"></i> ${nEmailEl.value} </li>
        </ul>
      
        `;
    }

    nNameEl.addEventListener('change', this.nameElChage);
    nNumerEl.addEventListener('change', this.nameElChage);
    nEmailEl.addEventListener('change', this.nameElChage);

    elementRoot.append(elementRoot2);
    shadowEl.append(elementRoot);
    shadowEl.append(elementRoot1);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
  }

  connectedCallback(){
        
    //let elementRoot=document.createElement('div');

    this.shadowRoot
  .querySelector("#greet")
  .addEventListener("click", () =>
    window.alert(`¡Hola! Haz sido registrado`)
  )
  .addEventListener("click", () =>
  formlario.reset()
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

window.customElements.define('informacion-resgistro', Informacion);