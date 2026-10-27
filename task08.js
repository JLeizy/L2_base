// Задание №12

function longest(arr, n) 
{
  let mass = {};
  let rez = "";
  
  while(n>0)
    {
      let index = -1;
      for(let i = 0; i < arr.length; i++)
        {
          if(mass[i] == true)
            {
              continue;
            }
          
          if(index == -1)
            {
              index = i;
            }
          
          if(arr[i].length > arr[index].length)
            {
              index = i;
            }
        }
      rez = arr[index];
      mass[index] = true;
      n--;
    }
  return rez;
}

console.log(longest(["Привет", "пока", "как_дела", "что", "делашеь"], 12));