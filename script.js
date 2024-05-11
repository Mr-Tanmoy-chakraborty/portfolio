//Home Button accesing
let a = document.querySelector("#button1");
a.addEventListener('click', () => {
    document.querySelector('.write').scrollIntoView({ behaviour: 'smooth' });
});
//About me Button accesing
let b = document.querySelector("#button2");
b.addEventListener('click', () => {
    document.querySelector('.second-part').scrollIntoView({ behaviour: 'smooth' });
});
//Experience Button accesing
let c = document.querySelector('#button3');
c.addEventListener('click', () => {
    document.querySelector('.inside-thirdbox1').scrollIntoView({ behaviour: 'smooth' });

});
// Portfolio button
let portfolioBtn = document.querySelector('#button-portfolio');
portfolioBtn.addEventListener('click', () => {
    window.open('https://github.com/Mr-Tanmoy-chakraborty');
});

//Contact Button accesing
let d = document.querySelector("#button4");
d.addEventListener('click', () => {
    document.querySelector('.fourth-box').scrollIntoView({ behaviour: 'smooth' });
})
// euphoriaGenx access
let e = document.querySelector('.image3');
e.addEventListener('click', () => {
    window.open('https://euphoriagenx.com/');

});
//instagram access
let insta = document.querySelector('#insta');
insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/tanmoychakraborty13');
});
//facebook  access
let fb = document.querySelector('#fb');
fb.addEventListener('click', () => {
    window.open('https://www.facebook.com/profile.php?id=100076661785890&mibextid=ZbWKwL');
});
//messenger access
let msg = document.querySelector('#msg');
msg.addEventListener('click', () => {
    window.open('https://m.me/Tanmoy chakraborty');
});
//linkedin access
let linkedin = document.querySelector('#lndn');
linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/tanmoy-chakraborty-952957251');
});

//gmail access
let gmail = document.querySelector('#gml');
gmail.addEventListener('click', () => {
    window.open('https://chakrabortytanmoy715@gmail.com/');
});