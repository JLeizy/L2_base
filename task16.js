// Задание №11

function domainName(url)
{
  let d = url.indexOf("://");
  if(d != -1)
    {
      url = url.slice(d + 3);
    }
  
  if(url.slice(0, 4) == "www.")
    {
      url = url.slice(4);
    }
  
  let p = url.split(".");
  let rez = p[0];
  return rez;
}