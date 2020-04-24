// var myElement = document.getElementById('logo-loading');

// // create a simple instance
// // by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// // listen to events...
// mc.on("panleft panright tap press", function (ev) {
//     myElement.textContent = ev.type + " gesture detected.";
// });



var myElement = document.getElementById('logo-loading');
var hammer    = new Hammer.Manager(myElement);
var swipe     = new Hammer.Swipe();
hammer.add(swipe);
hammer.on('swipeleft', function(){
window.location = 'introduction.html';
});

