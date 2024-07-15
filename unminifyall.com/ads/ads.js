function setCookie(name, value, days = 0) {
  localStorage.setItem(name, value);
  return false;
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  return localStorage.getItem(name);
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) { 
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

if (!getCookie("userSession")) {
  console.log(makeid(16));
  var UserSessionID = makeid(16);
  setCookie("userSession", UserSessionID);
} else {
  var UserSessionID = getCookie("userSession");
}

function CE(elem){
  return document.createElement(elem);
}

function SA(elem, val, key) {
  elem.setAttribute(val, key);
  return elem;
}


function left(){
  var container = CE("div");
  container.style.position = "fixed";
  container.style.left = "0";
  container.style.bottom = "0";
  container.style.width = "125px";
  container.style.height = "600px";
  container.style.overflow = "hidden";
  // container.style.background = "#f3f3f3";
  // container.style.boxShadow = "0px 0px 2px rgba(0,0,0,0.5)";
  // Create an iframe element
  var iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none"; // Hide the iframe border
  var currentDomain = window.location.hostname;
    console.log(currentDomain);
  iframe.src = "https://unminifyall.com/ads/ads.html?d="+currentDomain; // Replace this with the URL of your ad
  
  container.appendChild(iframe);
  document.getElementById(UserSessionID).appendChild(container);
}


function right(){
  var container = CE("div");
  container.style.position = "fixed";
  container.style.right = "0";
  container.style.bottom = "0";
  container.style.width = "120px";
  container.style.height = "600px";
  container.style.overflow = "hidden";
  container.style.background = "#f3f3f3";
  container.style.boxShadow = "0px 0px 2px rgba(0,0,0,0.5)";
  // Example: Add an image to the container
  var image = document.createElement("img");
  image.src = "https://wordpress.com/wp-content/a8c-plugins/happy-blocks/block-library/support-content-footer/assets/let-us-build-your-website.png";
  container.appendChild(image);
  document.getElementById(UserSessionID+"2").appendChild(container);
}
function ads(){

  if(leftsticky){
    var el=CE("DIV");
    el=SA(el,"id",UserSessionID);
    console.log(el);
    document.body.appendChild(el);
    left();
  }

  if(rightsticky){
    var el=CE("DIV");
    el=SA(el,"id",UserSessionID+"2");
    console.log(el);
    document.body.appendChild(el);
    right();

  }
}

function init(){


  ads();

}
  // Get the current domain name



  var leftsticky=1;
var rightsticky=0;

function handler(){
  

var mywidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(mywidth>=720){
init();
}

  window.removeEventListener("touchstart", handler, true);
  window.removeEventListener("scroll", handler, true);
  window.removeEventListener("touchmove", handler, true);
  window.removeEventListener("touchend", handler, true);
  window.removeEventListener("pointermove", handler, true);
  window.removeEventListener("click", handler, true);
//   window.removeEventListener("keypress", handler, true);
}

window.addEventListener("touchstart", handler, true);
window.addEventListener("scroll", handler, true);
window.addEventListener("touchmove", handler, true);
window.addEventListener("touchend", handler, true);
window.addEventListener("pointermove", handler, true);
window.addEventListener("click", handler, true);
// window.addEventListener("keypress", handler);