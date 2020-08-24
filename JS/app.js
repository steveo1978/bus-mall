'use strict';


var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');

var imgArray = [];

function Picture(image, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.image = image;

  imgArray.push(this);
}

new Picture('image-one', './imgs/bag.jpg');
new Picture('image-two', './imgs/banana.jpg');
new Picture('image-three', './imgs/bathroom.jpg');
new Picture('image-four', './imgs/boots.jpg');
new Picture('image-five', './imgs/breakfast.jpg');
new Picture('image-six', './imgs/bubblegum.jpg');
new Picture('image-seven', './imgs/chair.jpg');
new Picture('image-eight', './imgs/cthulhu.jpg');
new Picture('image-nine', './imgs/dog-duck.jpg');
new Picture('image-ten', './imgs/dragon.jpg');
new Picture('image-eleven', './imgs/pen.jpg');
new Picture('image-twelve', './imgs/pet-sweep.jpg');
new Picture('image-thirteen', './imgs/scissors.jpg');
new Picture('image-fourteen', './imgs/shark.jpg');
new Picture('image-fifteen', './imgs/sweep.png');
new Picture('image-sixteen', './imgs/tauntaun.jpg');
new Picture('image-seventeen', './imgs/unicorn.jpg');
new Picture('image-eighteen', './imgs/usb.gif');
new Picture('image-nineteen', './imgs/water-can.jpg');
new Picture('image-twenty', './imgs/wine-glass.jpg');

function renderImages() {
  var imgElOne = imgArray[(randomNumber(imgArray.length))];
  var imgElTwo = imgArray[(randomNumber(imgArray.length))];
  var imgElThree = imgArray[(randomNumber(imgArray.length))];

  imgElOne.src = imgArray[0].src;
  imgElTwo.src = imgArray[1].src;
  imgElThree.src = imgArray[2].src;

  function randomNumber(max) {
    return Math.floor(Math.random() * max.length);
  }
}

renderImages();

var imgOne = imgArray[randomNumber(imgArray.length)];
var imgTwo = imgArray[randomNumber(imgArray.length)];
var imgThree = imgArray[randomNumber(imgArray.length)];

while(imgOne === imgTwo) {
  imgTwo === imgArray[randomNumber(imgArray.length)];
  imgThree === imgArray[randomNumber(imgArray.length)];
}

imgElOne.alt = imgOne.src;
imgElOne.src = imgOne.image;

imgElTwo.alt = imgTwo.src;
imgElTwo.src = imgTwo.image;

imgElThree.alt = imgThree.src;
imgElThree.src = imgThree.image;

imgOne.viewed++;
imgTwo.viewed++;
imgThree.viewed++;

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);

function eventHandler(e) {
  for(var i = 0; i < imgArray.length; i++) {
    console.log(e.target.alt);
    if(imgArray[i].image === e.target.alt) {
      imgArray[i].clicked++;
    }
  }
}

