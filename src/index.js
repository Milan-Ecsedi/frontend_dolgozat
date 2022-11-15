let lista= document.getElementById('adatok');
let thelista=document.getElementById('Thelist');
let phossz=document.getElementById('hossz');

function sendListABC(list){
    

for(x of list){
    
    let li= document.createElement('li');
    li.textContent= x.author + ": ";
    lista.appendChild(li);
    li=document.createElement('li');
    li.textContent=x.quote;
    lista.appendChild(li);
    }

}
function sendListThe(list){
    

    for(x of list){
        
        let li= document.createElement('li');
        li.textContent=x.quote;
        thelista.appendChild(li);
        }
    
    }



document.addEventListener('DOMContentLoaded',async()=>{

document.getElementById('buttonABC').addEventListener('click',async()=>{

    lista.textContent="";
    let response=await fetch("quotes.json");
    let eredmeny=await response.json();
    let adatok=eredmeny.quotes.sort((a, b)=>a.author.localeCompare(b.author));
    
    sendListABC(adatok);
});

document.getElementById('buttonThe').addEventListener('click',async()=>{

    lista.textContent="";
    let response=await fetch("quotes.json");
    let eredmeny=await response.json();
    let adatok=eredmeny.quotes;
    sendListThe(adatok);
});


document.getElementById('buttonHossz').addEventListener('click',async()=>{
   
    phossz.textContent="";
    let numberLista=[];
    let response=await fetch("quotes.json");
    let eredmeny=await response.json();
    for(x of eredmeny.quotes)
    {
        numberLista.push(x.quote.length);
        numberLista.join(', ');
    }
      phossz.textContent=numberLista;

});



})