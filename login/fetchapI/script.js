const line=document.querySelector('.line');
      
class Apis
{
    constructor()
    {
     this.elements=[];
     this.form=document.querySelector('form')
     this.elementFetch; 
     this.but=document.querySelector('button');
     this.liner=document.querySelector('header')
     this.text=document.querySelector('header p');
     this.input=document.querySelectorAll('input');
     this.input.forEach(element=>
     {
     element.addEventListener('input',function(e)
     {
        this.getInput(e.target)
     }.bind(this))
    })
    }
 async getSpotyfy()
{
const api= await fetch("https://queatreact.firebaseio.com/users.json") 
const jsonApi=await api.json();
const jsString=Object.keys(jsonApi);
for(let i of jsString)
{
    this.elementFetch=await fetch(`https://queatreact.firebaseio.com/users/${i}.json`)
    const jsonApi2=await  this.elementFetch.json(this.elementFetch);
    jsonApi2.element.splice(2,3);
    this.elements.push( jsonApi2.element) 
}
}

getInput(target)
{
    let iter=this.elements.length
    console.log('ok')
    for(let i=0;i<iter;i++)
    {  
        if(this.elements[i].includes(target.value) && target.id=='haslo' && target.value==this.elements[i][1])
        {
            target.style.borderColor='green';
            lines.getLine.call(this)
            this.liner.classList.add('active');
            setTimeout(()=>
            {
                this.text.classList.add('active')
                this.text.textContent=`Witamy ponownie ${this.elements[i][0]}`
            },500)
        }
        else if(this.elements[i].includes(target.value) && target.id=='nick' && target.value==this.elements[i][0])
        {
            target.style.borderColor='rgb(10, 255, 10)';
        }
    }
}  
}


export class LineObj
{
  constructor()
  {

  }
  getLine()
  {
    let perCounter=1;
  let liner=setInterval(()=>
{
  perCounter+=2
 line.style.width=`${perCounter}%`;
if(perCounter>98)
{
    clearInterval(liner);
    line.style.width=`${perCounter}%`;
    this.form.action='../../element2/index.html';
    this.but.disabled=false;
}
else
{
    return
}
},30)
  }
}




const newData=new Apis();
const lines=new LineObj();
newData.getSpotyfy();

