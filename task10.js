// Задание № 18

function createPhoneNumber(numbers)
{
  if(numbers == null || numbers == undefined)
    {
      return "";
    }
  else
    {
      let str = "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
      return str;
    }
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
console.log(createPhoneNumber([1,2,3,4,5,6,7,9,8,3]));
console.log(createPhoneNumber());