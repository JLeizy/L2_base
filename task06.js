// Задание №1

function hasTwoCubeSums(n) 
{
  let count = 0;
	for(let i = 1; Math.pow(i, 3) < n; i++)
    {
      for(let j = i + 1;  (Math.pow(i, 3) + Math.pow(j, 3)) <= n; j++)
        {
          if((Math.pow(i, 3) + Math.pow(j, 3)) == n)
            {
              count++;
              if(count == 2)
                {
                  return true;
                }
            }
          else
            {
              continue;
            }
        }
    }
  return false;
}

console.log(hasTwoCubeSums(1729));
console.log(hasTwoCubeSums(9918));