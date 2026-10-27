// Задание №17

function cache(func) {
  let rez = {};

  function key(...args) 
  {
    let k = JSON.stringify(args);

    if (k in rez) 
    {
      return rez[k];
    } 
    else 
    {
      let rezult = func(...args);
      rez[k] = rezult;
      return rezult;
    }
  }
  return key;
}

function square(n)
{
  return n * n;
}

let CacheState = cache(square);

console.log(CacheState(5) == square(5));
console.log(CacheState(25) == square(25));
console.log(CacheState(11) == square(12));
