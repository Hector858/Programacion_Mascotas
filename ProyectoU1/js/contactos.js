
let template = document.createElement("template");

  template.innerHTML = `
  <link rel="stylesheet" href="css/contactos.css">
  <p class="block">
  <center>
    <a href="contactos.html"><button type="submit" id="greet"><b>ENVIAR</b></button></a>
    </center>
  </p>
  `;

class Informacion extends HTMLElement{
  constructor(){
    super();

    let shadowEl=this.attachShadow({mode:'open'});

    let elementRoot=document.createElement('div');
    let elementRoot2=document.createElement('form'); 
    let nNamelabel=document.createElement('label');
    nNamelabel.innerHTML= `Nombre Completo`;
    let nNameEl=document.createElement('input');
    nNameEl.setAttribute('type', 'text');
    let nEmaillabel=document.createElement('label');
    nEmaillabel.innerHTML= `Email`;
    let nEmailEl=document.createElement('input');
    nEmailEl.setAttribute('type', 'Email');
    let nNumerlabel=document.createElement('label');
    nNumerlabel.innerHTML= `Número del teléfono`;
    let nNumerEl=document.createElement('input');
    nNumerEl.setAttribute('type', 'text');

    let nDireclabel=document.createElement('label');
    nDireclabel.innerHTML= `Dirección`;
    let nDirecEl=document.createElement('input');
    nDirecEl.setAttribute('type', 'text');
    let nCedulabel=document.createElement('label');
    nCedulabel.innerHTML= `Cédula`;
    let nCedulEl=document.createElement('input');
    nCedulEl.setAttribute('type', 'text');
    let nRazalabel=document.createElement('label');
    nRazalabel.innerHTML= `Raza de perro que desea adoptar`;
    let nRazaEl=document.createElement('input');
    nRazaEl.setAttribute('type', 'text');


    let parr1=document.createElement('p');
    let parr2=document.createElement('p');
    let parr3=document.createElement('p');
    let parr4=document.createElement('p');
    let parr5=document.createElement('p');
    let parr6=document.createElement('p');

    parr1.append(nNamelabel);
    parr1.append(nNameEl);
    
    parr2.append(nEmaillabel);
    parr2.append(nEmailEl);
    
    parr3.append(nNumerlabel);
    parr3.append(nNumerEl);

    
    parr4.append(nDireclabel);
    parr4.append(nDirecEl);
   
    parr5.append(nCedulabel);
    parr5.append(nCedulEl);
   
    parr6.append(nRazalabel);
    parr6.append(nRazaEl);

    elementRoot2.append(parr1);
    elementRoot2.append(parr2);
    elementRoot2.append(parr3);
    elementRoot2.append(parr4);
    elementRoot2.append(parr5);
    elementRoot2.append(parr6);
    elementRoot2.append(template);

    let elementRoot1=document.createElement('div');

    this.nameElChage = () =>{
      elementRoot1.innerHTML=`
            
      <link rel="stylesheet" href="css/contactos.css">

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
      <h3 style="font-family: 'Quicksand', sans-serif;">Su Información</h3>
        <ul> 
            <li><i class="fa fa-user"></i> ${nNameEl.value}</li>
            <li><i class="fas fa-envelope-open-text"></i> ${nEmailEl.value} </li>
            <li><i class="fas fa-phone"></i> ${nNumerEl.value}</li>
            <li><i class="fas fa-map-marker-alt"></i> ${nDirecEl.value}</li>
            <li><i class="fa fa-id-card"></i> ${nCedulEl.value}</li>
            <li><i class="fa fa-paw"></i> ${nRazaEl.value} </li>
        </ul>
      
        `;
    }

    nNameEl.addEventListener('change', this.nameElChage);
    nNumerEl.addEventListener('change', this.nameElChage);
    nEmailEl.addEventListener('change', this.nameElChage);
    nDirecEl.addEventListener('change', this.nameElChage);
    nCedulEl.addEventListener('change', this.nameElChage);
    nRazaEl.addEventListener('change', this.nameElChage);

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
  );
}

disconnectedCallback() {
  this.shadowRoot
    .querySelector("#greet")
    .removeEventListener("click", () =>
      window.alert(`Hey there! I'm User`)
    );
}

}

window.customElements.define('informacion-resgistro', Informacion);