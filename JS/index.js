const carrusel = document.querySelector(".carrusel-items");
const navi = document.querySelector(".navcontainer");
var canmove = false
var canmove = false
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
var scrolly = 0;
var direction = -1;
var widie = null;
let step = navi.clientWidth;
var vel = 40;
var numba = 0
intervalo = setInterval(function (){
  if(carrusel.scrollLeft < scrolly + step && canmove == true && direction == 1 && canmove2){
    carrusel.scrollLeft = carrusel.scrollLeft + vel;
  }else if(carrusel.scrollLeft > scrolly - step && canmove == true && direction == -1 && canmove2){
    carrusel.scrollLeft = carrusel.scrollLeft - vel;
  }
  else{
    canmove2 = false
    canmove = false
  }
}, 10);
const start = () => {
  intervalo = setInterval(function () {
    widie = navi.clientWidth
    maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    step = carrusel.clientWidth
    if (carrusel.scrollLeft >= maxScrollLeft || carrusel.scrollLeft >= maxScrollLeft - 20 && candoshit) {
      direction = direction * -1;
    } else if (carrusel.scrollLeft <= 0 && candoshit) {
      direction = direction * -1;
    }
    scrolly = carrusel.scrollLeft
    if(direction == 1){
      numba += 1;
    }
    else{
      numba -= 1
    }
    if(candoshit){
      canmove2 = true
    }
    
  }, 2500);
};
intervalo = setInterval(function (){
  if(navi.clientWidth != widie){
    canmove = false
    candoshit = false
    carrusel.scrollLeft = 0;
  }else{
    canmove = true
    candoshit = true
  }

},5)
start();
