// Задание №9

function solution(str)
{
 if(str == undefined || str == null || str == "")
   {
     return [];
   }
  else
    {
      let len = str.length;
      if(len % 2 != 0)
        {
          str = str + "_";
        }
      let mass = [];
      for(let i = 0; i < str.length; i+=2)
        {
          mass.push(str[i] + str[i+1]);
        }
        return mass;
    }
}

console.log(solution("jlakzi"));
console.log(solution("112345671"));
console.log(solution(""));
