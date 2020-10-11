// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//cree des array du nombre du deuxieme aregument



//sol 1 :
// function chunk(array, size) {

//     const newArayChunked = [];

//     for(let  i of array){

//         const last = newArayChunked[newArayChunked.length - 1]

//         if(!last || last.length === size){
            
//             newArayChunked.push([i])
//         }else{
//             last.push(i)
//         }


//     }

//     return newArayChunked
// }

function chunk(array, size) {

    const chuynked = [];
    let index = 0

    while(index < array.length){
        chuynked.push(array.slice(index,index + size))
        index += size
    }

    return chuynked
}

module.exports = chunk;
