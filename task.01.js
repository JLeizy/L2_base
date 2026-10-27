// Задание № 7
function wave(str)
{
  if(str == undefined || str == null || str == "")
    {
      return [];
    }
  let mass = [];
  for(let i = 0; i < str.length; i++)
    {
      if(str[i] == " ")
      {
        continue;
      }
      else
      {
        let c = str.split("");
        c[i] = c[i].toUpperCase();
        mass.push(c.join(""));
      }
    }
    return mass;
}

let s = "jlakzi";
let rez = wave(s);
console.log(rez);