// Your code goes here
let footer = document.querySelector('.footer')
footer.addEventListener('click', (event) => { event.target.style.backgroundColor = 'red'; });

let imgs = document.querySelectorAll('img')
imgs.forEach(function(it) { it.addEventListener('mouseover', (event) => { event.target.style.maxWidth = '200%'; })});
imgs.forEach(function(it) { it.addEventListener('mouseout', (event) => { event.target.style.maxWidth = '100%'; })});

let body = document.querySelector('h1')
body.addEventListener('click', (event) => { event.target.style.backgroundColor = 'beige';
});
body.addEventListener('dblclick', (event) => { event.target.style.backgroundColor = 'skyblue';
});

let nav = document.querySelectorAll('a')
nav.forEach(function(it) { it.addEventListener('click', (event) => { event.preventDefault(); })});
