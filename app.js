function scrollf()
{
    var ff =  document.querySelector('.fadee');
   

    var z =  ff.getBoundingClientRect().top;
    var w =  window.innerHeight / 1.2;
    if(z<w)
    {
        ff.classList.add('fadew')
    }
    else
    {
        ff.classList.remove('fadew')
    }
  
}
function hh()
{
    var im = document.querySelector('.img-diss');
    var imz = im.getBoundingClientRect().top;
    var k=window.innerHeight/1.2;
   
    if(imz<k)
    {
        im.classList.add('fadew');
    }
    else{
        im.classList.remove('fadew');
    }

}
window.addEventListener('scroll',scrollf);
window.addEventListener('scroll',hh);