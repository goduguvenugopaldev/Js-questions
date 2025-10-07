//three logics to  find the largest number in given array

const numArray = [4,45,66,7,8,5,68,8,6,9,75,7,3,56,46,34,34,6];
 


let largest_Number = 0;

for (let index = 0; index < numArray.length; index++) {
  const currentIndex = numArray[index];
  if (currentIndex > largest_Number) {
    largest_Number = currentIndex;
  }
}


const largeNum = Math.max(...numArray)
const sortedArr = numArray.sort((a , b)=> a - b)
const totalLength = sortedArr.length - 1


console.log(largest_Number);
console.log(largeNum);
console.log(sortedArr[totalLength]);


