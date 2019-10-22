function domingo()
{
  for (let i=2014; i<=2050; i++)
  {
    var d = new Date(i,0,1);

    if(d.getDay()===0)
    {
      document.write(i,"<br>");
    }
  }
}
domingo();
