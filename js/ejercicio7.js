function diasNavidad()
{
  var actual = new Date();
  var dic= new Date (2019,11,25);

  var dias = dic-actual;

  dias=dias/(1000*60*60*24);
  document.write(Math.round(dias));
}
diasNavidad();
