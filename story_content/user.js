window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  document.querySelector(".menu-icon-wrapper").click();
}

window.Script2 = function()
{
  const captions = document.querySelector('.caption-container');
let sliderValue = getVar('ControlSubtitulo'); // Slider1 or whatever Storyline generated for you

captions.style.fontSize = `${sliderValue}%`
setVar('TamañoSubtitulo', captions.style.fontSize); // it updates the fontSize variable created in Storyline
}

window.Script3 = function()
{
  document.querySelector(".menu-icon-wrapper").click();
}

window.Script4 = function()
{
  const captions = document.querySelector('.caption-container');
let sliderValue = getVar('ControlSubtitulo'); // Slider1 or whatever Storyline generated for you

captions.style.fontSize = `${sliderValue}%`
setVar('TamañoSubtitulo', captions.style.fontSize); // it updates the fontSize variable created in Storyline
}

};
