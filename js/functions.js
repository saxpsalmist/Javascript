// let john = 2021 - 1980;
// let peter = 2021 - 1954;
// let moses = 2021 - 1989;

// console.log(john);
// console.log(peter);
// console.log(moses);

// functions

// function decleration

function findAge(y, name) {
  let result = `The age of ${name}  is  ${2021 - y}`;
  return result;
}



// function expression
const findAge = function (){
    // code
}


// es6 --- Arrow functions

const addition = () => {
    // code
}



findAge(1980, 'john'); //function call
findAge(1954, 'peter');
findAge(1989, 'moses');

findAge(1954, "Jerry")