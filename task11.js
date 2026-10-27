// Задание №13

function hexStringToRGB(hexString) 
{
  let str = hexString.slice(1);
  
  let r = str.slice(0, 2);
  let g = str.slice(2, 4);
  let b = str.slice(4, 6);
  
  let r1 = parseInt(r, 16);
  let g1 = parseInt(g, 16);
  let b1 = parseInt(b, 16);
  
  let rez = {r: r1, g: g1, b: b1};
  return rez;
}

console.log(hexStringToRGB("#FFAABB"));