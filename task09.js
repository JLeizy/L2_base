// Задание № 6

function toWeirdCase(string)
{
  let str = string.split(" "); 
  let rez = []; 
  
  for(let i = 0; i < str.length; i++)
    {
      let str1 = str[i];
      let s = "";
      for(let j = 0; j < str1.length; j++)
        {
          if(j % 2 == 0)
        {
          s += str1[j].toUpperCase();
        }
      else
        {
          s += str1[j].toLowerCase();
        }
        }
      rez.push(s);
    }
  return rez.join(" ");
}

console.log(toWeirdCase("Pink tape"));