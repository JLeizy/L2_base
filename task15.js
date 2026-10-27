// Задание №4

function findMissing(list) 
{  
  let c = list[1] - list[0];
  if((list[2] - list[1]) < Math.abs(c))
    {
      c = list[2] - list[1];
    }
  
  for(let i = 0; i < list.length - 1; i++)
    {
      if(list[i + 1] - list[i] != c)
        {
          return list[i] + c;
        }
    }
  
  return list[0];
}