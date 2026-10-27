// Задание № 3

function whatCentury(year)
{
  let number = Number(year);
  let f_part = Math.trunc(number / 100);
  let l_part = number % 100;
  if(l_part == 0)
    {
      if(f_part == 11)
        {
          return `${f_part}th`;
        }
      
      else if(f_part == 12)
        {
          return `${f_part}th`;
        }
      
      else if(f_part == 13)
        {
          return `${f_part}th`;
        }
      
      let f = f_part % 10;
      if(f == 1)
        {
          return `${f_part}st`;
        }
      
      else if(f == 2)
        {
          return `${f_part}nd`;
        }
      
      else if(f == 3)
        {
          return `${f_part}rd`;
        }
      
      else
        
        {
          return `${f_part}th`;
        }
    }
  else
    {
      f_part++;
      
      if(f_part == 11)
        {
          return `${f_part}th`;
        }
      else if(f_part == 12)
        {
          return `${f_part}th`;
        }
      else if(f_part == 13)
        {
          return `${f_part}th`;
        }
      
      let f = f_part % 10;
      
      if(f == 1)
        {
          return `${f_part}st`;
        }
      
      else if(f == 2)
        {
          return `${f_part}nd`;
        }
      
      else if(f == 3)
        {
          return `${f_part}rd`;
        }
      
      else
        
        {
          return `${f_part}th`;
        }
    }
}

console.log(whatCentury(1999));
console.log(whatCentury(1759));
console.log(whatCentury(2000));
console.log(whatCentury(1000));
console.log(whatCentury(2026));