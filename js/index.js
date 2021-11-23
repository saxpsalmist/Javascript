// console.log('Hello, world!');

// boolean - true or false
// number - 7
// undefined - undefined
// null - null
// object - {key: value} ---(key and value pairs)
// array - [index_based]
// strings - "This is a boy."

const button = document.querySelector('button');

button.onclick = function () {
  let text = 'Go to my website!';

  document.querySelector('#text').innerHTML = text;
};
