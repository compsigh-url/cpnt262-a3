'use strict';

let fetchLink;
let currentObject;
let outputHTML;

const fetchRequest = function(callback) {
   fetchLink = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + Math.floor(Math.random() * 999);
   fetch(fetchLink).then(response => {
      if (response.ok) {
         return response.json();
      } else {
         throw Error(response.statusText);
      }
   }).then(response => {
      currentObject = response;
   }).then(response => {
      callback(currentObject);
   }).catch(e => {
      console.log(e)
      outputHTML = `<p class="description-text">This museum item does not exist! Press the button below to try again.</p>`;
  document.querySelector(".item").innerHTML = outputHTML;
   });
}
const objectToHTML = function(currentObject) {
   outputHTML = `<img src="${currentObject.primaryImageSmall}" alt="${currentObject.title}" class="img">
   <p class="description-text">${currentObject.title}</p>`;
  document.querySelector(".item").innerHTML = outputHTML;
}

const newItem= function() {
   fetchRequest(objectToHTML);
}

document.querySelector(".btn").addEventListener("click", newItem);








