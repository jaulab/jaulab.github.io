function saberMas(id){
  switch(id){
    case 'saber-Inv':
      window.open("https://www.unavarra.es/nocheinvestiga", '_blank');
      break;
    case 'saber-Nak':
      window.open("https://nakfestival.com/", '_blank');
      break;
    case 'saber-Semana':
      window.open("https://www.unavarra.es/unidadculturacientifica/semana-de-la-ciencia?contentId=262160", '_blank');
      break;
    case 'saber-Pharus':
      window.open("https://www.unavarra.es/jornadas-pharus", '_blank');
      break;
    default:
      break;
  }
}

function enviarFormulario(){

}

function download(id){
  window.open("https://github.com/jaulab/AmbisonicsEnergiesComparer", '_blank');
}

function recursosClicked(){

  fetch('./recursos.html')
  .then((response) => response.json())
  .then((data) => document.getElementById('content').innerHTML = data);

  //var xhr= new XMLHttpRequest();
  //xhr.open('GET', '../recursos.html', true);
  //xhr.onreadystatechange= function() {
  //    if (this.readyState!==4) return;
  //    if (this.status!==200) return; // or whatever error handling you want
  //    document.getElementById('content').innerHTML= this.responseText;
  //};
  //xhr.send();


  //const mainBody = document.getElementById("content");
  //mainBody.innerHTML = "./recursos.html";
}