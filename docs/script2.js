// dom = document object model
let LastImage = document.getElementsByClassName("last-img")[0];
let MidImage = document.getElementsByClassName("mid-img")[0];
let SecImage = document.getElementsByClassName("sec-img")[0];
let TopImage = document.getElementsByClassName("top-img")[0];
let MoonImage = document.getElementsByClassName("moon-img")[0];
let Gunung = document.querySelector("#landing h1");
let Button = document.querySelector(".btn");
let navBar = document.querySelector(".nav")

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let scaleValue = 1 + (value * 0.0005); // Menentukan faktor skala berdasarkan nilai scroll
    LastImage.style.transform = `scale(${scaleValue})`;
    
    MoonImage.style.top = value * 0.7 + 'px';
    LastImage.style.top = value * 0.5 + 'px';
    MidImage.style.top = value * 0.6 + 'px';
    SecImage.style.top = value * 0.4 + 'px';
    TopImage.style.top = value * 0 + 'px';

    Gunung.style.right = value * 0.5 + 'px';
    Button.style.marginTop = value * 0.1 + 'px';
    navBar.style.top = value * -0.1 + 'px';
})
