const header = document.querySelector('header');
const body = document.querySelector('body');
window.onscroll = function() {
    myScrollFunction();
}

function myScrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('header').style.fontSize = "20px";
        document.querySelector('header').style.height = "30px";
    } else {
        document.querySelector('header').style.fontSize = "30px";
        document.querySelector('header').style.height = "100px";
}
}