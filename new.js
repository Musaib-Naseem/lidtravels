var nav = document.querySelector('header'); 
var col = document.querySelectorAll('.on');// Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >= 150) { // Just an example
        nav.style.backgroundColor = 'white';

        for(var i=0;i<col.length;i++)
        {
        col[i].style.color = 'black';
        }
         // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
           for(var i=0;i<col.length;i++)
        {
        col[i].style.color = 'white';
        }
    }
});



 var lin=document.getElementById("main1new");
 var win=document.getElementById("main2new");
 var cin=document.getElementById("newl2");
 var nin=document.getElementById("newl1");
 var d=1;


function test()
{
    lin.style.display="block";
    win.style.display="none";  
     cin.style.backgroundColor="white";
    nin.style.backgroundColor="#FEC107";
    d=1;
 
}


function test2()
{
   

    lin.style.display="none";
    win.style.display="block";
    cin.style.backgroundColor="#FEC107";
    nin.style.backgroundColor="white";
    d=2;
}

function test3()
{
if(d==1){
nin.style.backgroundColor="#FEC107";
}

else
{
   nin.style.backgroundColor="#E8E8E8"; 
}
}

function test4()
{

if(d==1){
nin.style.backgroundColor="#FEC107";
}

else
{
   nin.style.backgroundColor="white"; 
}

}






function test5()
{
if(d==2)
{
   cin.style.backgroundColor="#FEC107";
}

else
{
   cin.style.backgroundColor="#E8E8E8"; 
}
}

function test6()
{

if(d==2)
{
  cin.style.backgroundColor="#FEC107";
}

else
{
   cin.style.backgroundColor="white"; 
}

}





     $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 18000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});