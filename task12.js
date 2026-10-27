// Задание №10

function bingo(ticket, win)
{  
  let count = 0;
  for(let i = 0; i < ticket.length; i++)
    {
      let str = ticket[i][0];
      let num = ticket[i][1];
      let f = false;
      
      for(let j = 0; j < str.length; j++)
        {
          let code = str.charCodeAt(j);
          if(code == num)
            {
              f = true;
            }
        }
      
        if(f == true)
        {
          count++;
        }
    }
  
      if(count >= win)
        {
          let str = "Winner!";
          return str;
        }
      else
        {
          let str = "Loser!";
          return str;
        }
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Loser!'); 