// Задание №8

function expandedForm(num) 
{
  if(num < 0)
    {
      return "";
    }
  else
    {
      let str = num.toString();
      let mass = [];

      for(let i = 0; i <= str.length - 1; i++)
        {
          if(str[i] == "0")
            {
              continue;
            }
          else
            {
              let z = "";

              for(let j = 0; j < str.length - 1 - i; j++)
                {
                  z += "0";
                }
              mass.push(str[i] + z);
            }
        }
      return mass.join(" + ");
    }
}

console.log(expandedForm(123446));
console.log(expandedForm(90080071));