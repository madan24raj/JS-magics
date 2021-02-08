"use strict";
var card2Image, logo,copy,starttime=0,shine;
function onInit(){
    card2Image = document.getElementById("card2Image");
    logo = document.getElementById("logo");
    shine = document.getElementById("shine");
  
    starttime += 1000;
    setTimeout(function () {
      card2Image.classList = "transitions-1 fade-in scale1 ";
    
    }, starttime);

    starttime += 1000;
    setTimeout(function () {
      card2Image.classList = "transitions-1 fade-in scale1_1";
    },starttime);

    starttime += 100;
    setTimeout(function () {
      logo.classList = "transitions-1 scale1_1 fade-in";
    }, starttime);

      starttime += 100;
      setTimeout(function () {
        logo.classList = "transitions-2 fade-in logo_animation";
      }, starttime);

    
    starttime += 500;
    setTimeout(function () {
      shine.style.left+=300+'px';
      shine.style.top = -50 + 'px';
      shine.style.opacity= .25;
      shine.classList="transitions-1";
    }, starttime);


}


window.addEventListener("load", onInit);


