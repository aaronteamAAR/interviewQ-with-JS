/*  Sortin an array */ 

const bubbleSort = (arr) => {
 for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i - 1; j++){
        if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
      }
 }

 return arr;
}

console.log(bubbleSort([4,6,89,10,2,1]))
console.table(bubbleSort([4,6,89,10,2,1]))







/* Sorting an Array [0,1,1,0,0,1]   */
//   count the zeros
//   Add two zero at first and add the remaing ones to the next to the zeros 


const sortArr = (array) => {
   let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            count++
           
        }
    }

    for(let i = 0; i < count; i++){
        array[i] = 0;
        console.log(array[i])
    }

    for(let i = count; i < array.length; i++){
        array[i] = 1;
    }

    return array;
}

console.log(sortArr([0,1,1,0,0,1]))
