var el = document.getElementsByClassName('card');

for(var i = 0; i < el.length; i++)
{
  el[i].addEventListener('mouseenter', () =>{
    document.getElementsByClassName('aaa')[0].style.display = 'block';
  
  });

  el[i].addEventListener('mouseleave', () =>{
    document.getElementsByClassName('aaa')[0].style.display = 'none';
  });
}
 
