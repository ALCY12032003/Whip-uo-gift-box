
function create()
{
    var n=document.getElementById("gifts").value;
    const card = document.querySelector('#card-content');
    console.log(document.getElementById("card-content").childElementCount)
    if(document.getElementById("card-content").childElementCount){
        document.getElementById("card-content").innerHTML='';
    }
    for(var i=0;i<n;i++)
    {   
        j=i+1;
        let div = document.createElement('div');
        div.id = 'card-element';
        div.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzdA1M9imaWb71hCW_gCxFOvQQDa77p9s2_P7UzSJmAoyXFg7FzwwAr-2IEOEa5wglwI&usqp=CAU" width="70px" height="70px">';
        card.appendChild(div);
    }
    document.getElementById('gifts').value = '';   
}