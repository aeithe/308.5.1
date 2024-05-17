// const multiplicativeArray = [1, 2, 3, 4, 5].reduce(add,0);
// function add(accumulator,a){
//     return accumulator +a; 
// }
// console.log(multiplicativeArray);

// function sumOfNums(array){
//     let additiveArray = 0;
//     array.forEach((Element)=> {
//         if (Element.value >=0){
//             additiveArray.push(Element+Element)
//         }
//     })

// };


// const initialValue = 0;
// const sumOfNums = multiplicativeArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
// console.log(sumOfNums);

 const numerics = [1, 2, 3, 4, 5];
// const sumOfNums = [];
function addition(string, operator){
for (let i = 0; i <= string.length; i++){
    if (operator ='+'){
       return string[i]+string[i]
    }
    else if (operator = '-'){
       return string[i]-string[i]
    }
    else if (operator = '*'){
       return string[i]*string[i]
    }
    else if (operator = '/'){
        return string[i]/string[i]
    };
};
};

console.log(addition(numerics, '+'));
    //let sum = currentValue[i]+ initialValue, index = 0;
    //let initialValue = 0;
//want to create a function that does any kind of math upon a given array with a given operator 

// // console.log(addition());

// function addition(index, )

// if(operator = +){
    
//}