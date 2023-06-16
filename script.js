// Good Luck 💪🏾

//Done 😎
 function FLN(arr){
    let LargestArray = [];

    for(let i=0; i<arr.length; i++)
    {
        LargestArray.push(Math.max(...arr[i]))
        //LargestArray.push(Math.min(...arr[i])) --> Find Smallest Number
        
    }

    return (LargestArray)
}

console.log(FLN([[7, 3, 8, 11], [54, 12, 43, 77], [16, 11, 8]])) //➞ [11, 77, 16]
console.log(FLN([[22, 55, 12], [45, 66, 95], [22, 5, 11]])) //➞ [55, 95, 22]
