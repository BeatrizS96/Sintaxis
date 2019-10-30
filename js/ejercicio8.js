function reloj()
{
  var d= new Date();
  var hora=d.getHours();
  var min=d.getMinutes();
  var seg=d.getSeconds();

  if (hora<10)
  {

  }

  document.getElementById("reloj").innerHTML=hora+':'+min+':'+seg;
}
setInterval(reloj,1000);
