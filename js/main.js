
function Func(val) 
{ 
    document.getElementById("result").value+=val ;
} 
  

function calc() 
{ 
    let x = document.getElementById("result").value ;
    let y = eval(x) ;
    document.getElementById("result").value = y ;
} 
  

function res() 
{ 
    document.getElementById("result").value = "" ;
}
