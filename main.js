
/*---------------------sliding nav script-------------------------------------*/

var menu = document.getElementById('menu');
var nav = document.getElementById('navigation');
var exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.add('nav-transition');
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.remove('nav-transition');
    e.preventDefault();
});

nav.addEventListener('click', function (e) {
    nav.classList.remove('nav-transition');
});

function openNav() {
    document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
    document.getElementById("slideNav").style.width = "0";
}
