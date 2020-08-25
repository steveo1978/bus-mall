'use strict';


var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');
var clicksAllowed = 25;
var numberOfClicks = 0;
var renderArray = [];
var imgArray = [];

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}

new Picture('bag', './imgs/bag.jpg');
new Picture('banana', './imgs/banana.jpg');
new Picture('bathroom', './imgs/bathroom.jpg');
new Picture('boots', './imgs/boots.jpg');
new Picture('breakfast', './imgs/breakfast.jpg');
new Picture('bubblegum', './imgs/bubblegum.jpg');
new Picture('chair', './imgs/chair.jpg');
new Picture('cthulhu', './imgs/cthulhu.jpg');
new Picture('dog-duck', './imgs/dog-duck.jpg');
new Picture('dragon', './imgs/dragon.jpg');
new Picture('pen', './imgs/pen.jpg');
new Picture('pet-sweep', './imgs/pet-sweep.jpg');
new Picture('scissors', './imgs/scissors.jpg');
new Picture('shark', './imgs/shark.jpg');
new Picture('sweep', './imgs/sweep.png');
new Picture('tauntaun', './imgs/tauntaun.jpg');
new Picture('unicorn', './imgs/unicorn.jpg');
new Picture('usb', './imgs/usb.gif');
new Picture('water-can', './imgs/water-can.jpg');
new Picture('wine-glass', './imgs/wine-glass.jpg');



renderImages();
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createRenderArray() {
  while (renderArray.length > 0) {
    renderArray.pop();
  }
  while (renderArray.length < 3) {
    var i = randomNumber(imgArray.length);
    while (renderArray.includes(i)) {
      i = randomNumber(imgArray.length);
    }
    renderArray.push(i);
  }
  // console.log(renderArray);
}

function renderImages() {
  createRenderArray();
  var imgOne = imgArray[renderArray[0]];
  var imgTwo = imgArray[renderArray[1]];
  var imgThree = imgArray[renderArray[2]];

  imgElOne.alt = imgOne.name;
  imgElOne.src = imgOne.src;

  imgElTwo.alt = imgTwo.name;
  imgElTwo.src = imgTwo.src;

  imgElThree.alt = imgThree.name;
  imgElThree.src = imgThree.src;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;
}

function eventHandler(e) {
  console.log(e.target.alt);
  numberOfClicks++;


  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
    }
  }
  renderImages();

  if (numberOfClicks === clicksAllowed) {
    imgElOne.removeEventListener('click', eventHandler);
    imgElTwo.removeEventListener('click', eventHandler);
    imgElThree.removeEventListener('click', eventHandler);

  }
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);

