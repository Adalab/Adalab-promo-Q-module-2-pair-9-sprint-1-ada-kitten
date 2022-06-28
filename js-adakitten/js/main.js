'use strict';

console.log('holis');




const dataList = document.querySelector('.js-list');

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const kittenImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName = "Anastacio";
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace = "British Shorthair";

const kittenDesc2 =
  "cariñoso, acariciarle!";

  const kittenDesc3 =
  "Ruiseño, cariñoso";

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
    ${kittenDesc2}
  </p>
</article>
</li>`;




const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`


 



const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
 dataList.innerHTML += kittenOne;
  }
  
  if( kittenDesc3.includes(descrSearchText) ) {
  //Completa el código
  dataList.innerHTML += kittenTwo;
  }
  
  if( kittenDesc3.includes(descrSearchText) ) {
  //Completa el código
  dataList.innerHTML += kittenThree;
  }
  else {
    dataList.innerHTML = 'No hay ningun gatito con ese atributo :( '
  }



  const iconMenu = document.querySelector('.fa-plus-circle');

  iconMenu.addEventListener ("click", ()=> {
    event.preventDefault();
    const newForm = document.querySelector('.js_new-form');
    console.log(newForm);
        if (newForm.classList.contains('collapsed')){ 
          newForm.classList.remove('collapsed');
          iconMenu.classList.remove('un-rotate');
          iconMenu.classList.add('rotate');
          
        } else {
          newForm.classList.add('collapsed');
          iconMenu.classList.remove('rotate');
          iconMenu.classList.add('un-rotate');
        }
   });

   const addButton = document.querySelector(".js-btn-add");

   addButton.addEventListener ("click", () => {
      event.preventDefault();

      const inputDesc = document.querySelector('.js-input-desc');
      const inputPhoto = document.querySelector('.js-input-photo');
      const inputName = document.querySelector('.js-input-name');
      const labelMesageError = document.querySelector('.js-label-error');


      const valueDesc = inputDesc.value;
      const valuePhoto = inputPhoto.value;
      const valueName = inputName.value;

      if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMesageError.innerHTML =  "Debe rellenar todos los valores";
      } else {
        console.log("Funciona");
      }
   });