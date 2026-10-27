// Задание №16

Array.prototype.square = function() 
{
  let mass = [];
  for(let i = 0; i < this.length; i++)
    {
      mass.push(this[i] * this[i]);
    }
  return mass;
}

Array.prototype.cube  = function() 
{
 let mass = [];
  for(let i = 0; i < this.length; i++)
    {
      mass.push(this[i] * this[i] * this[i]);
    }
  return mass; 
}

Array.prototype.average = function()
{
  let mass = [];
  if(mass == undefined)
    {
      return [];
    }
  else
    {
      let count = 0;
  let sum = 0;
  let sred;
  for(let i = 0; i < this.length; i++)
    {
      sum += this[i];
      count++;
    }
  sred = sum / count;
  return sred;
    }
}

Array.prototype.sum = function() 
{
  let sum = 0;
  for(let i = 0; i < this.length; i++)
    {
      sum += this[i];
    }
  return sum;
}

Array.prototype.even = function() 
{
  let mass = [];
  for(let i = 0; i < this.length; i++)
    {
      if(this[i] % 2 == 0)
        {
          mass.push(this[i]);
        }
    }
  return mass;
}

Array.prototype.odd = function() 
{
  let mass = [];
  for(let i = 0; i < this.length; i++)
    {
      if(this[i] % 2 != 0)
        {
          mass.push(this[i]);
        }
    }
  return mass;
}

