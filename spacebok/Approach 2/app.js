const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
/*const section = document.querySelector("section");
const end = section.querySelector("h1");
*/
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
/*const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);
*/
//Video Animation
let accelamount = 0.15;
let scrollpos = 0;
let delay = 0;
var FPS = 25;
var FRAMES = 35;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000 * FRAMES / FPS;
  console.log(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos);
  //console.log(delay);

  video.currentTime = delay;
}, 80);
