'use strict';

var section = document.getElementById('results');
var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');


var clicksAllowed = 25;
var numberOfClicks = [];
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
  while (renderArray.length > 3) {
    renderArray.pop();
  }
  while (renderArray.length < 6) {
    var i = randomNumber(imgArray.length);
    while (renderArray.includes(i)) {
      i = randomNumber(imgArray.length);
    }
    renderArray.unshift(i);
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
    myChart();

    for (i = 0; i < imgArray.length; i++) {
      var imageClickedAmount = document.createElement('p');
      imageClickedAmount.textContent = `${imgArray[i].name}, clicked ${imgArray[i].clicked} times, viewed ${imgArray[i].viewed} times.`;
      section.append(imageClickedAmount);
    }
  }
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);


function myChart() {
  var clickedImgArray = [];
  var imgViewedArray = [];
  var namedImgsArray = [];
  for (var i = 0; i < imgArray.length; i++) {
    clickedImgArray.push(imgArray[i].clicked);
    imgViewedArray.push(imgArray[i].viewed);
    namedImgsArray.push(imgArray[i].name);
  }
  var chartObject = {
    type: 'bar',
    data: {
      labels: namedImgsArray,
      datasets: [{
        label: 'Total Clicked',
        data: clickedImgArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',


        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1
      }, {
        label: 'Total Viewed',
        data: imgViewedArray,
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, chartObject);//eslint-disable-line
}
