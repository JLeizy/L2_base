// Задание №5

function primeFactors(n) 
{
  let delim = 2;
  let rez = "";
  while (n > 1) 
    {
    let count = 0;

    while (n % delim == 0) 
    {
      n /= delim;
      count++;
    }

    if (count == 1) 
    {
      rez += `(${delim})`;
    }

    if (count > 1) 
    {
      rez += `(${delim}**${count})`;
    }

    delim++;
  }
  return rez;
}

console.log(primeFactors(123456));
console.log(primeFactors(80633));
console.log(primeFactors(80623));
