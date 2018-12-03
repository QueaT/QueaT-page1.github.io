const img=document.querySelector('.imgAside');
const inputs=document.querySelectorAll('input[type="radio"]');
const i=document.querySelector('i');
const slideDown=document.querySelector('.sec_2');
const about=document.querySelector('.showSlide');
const but=document.querySelector('.but');



let counter=-1;


const stopIntr=function()
{
    clearInterval(inter)
    getInter()
}

const getInp=function()
{
    console.log(this.dataset.key);
    if(this.dataset.key==2)
    {
        img.classList.add('one')
        img.classList.remove('two');
        stopIntr()
    }
   else if(this.dataset.key==3)
    {
        img.classList.remove('one')
        img.classList.add('two');
        stopIntr()
    }
  else if(this.dataset.key==4)
    {
        img.classList.remove('two');
        img.classList.remove('one')
        stopIntr()
    }

  
}
let inter

const tab=[...inputs];
tab.forEach(element=>
    {
        element.addEventListener('click',getInp)
    })

let getInter=()=>
{
    inter=setInterval(()=>
    { 
        ++counter
        if(counter==0)
        {
            img.classList.add('one')
        }
        else if(counter==1)
        {
            img.classList.remove('one')
            img.classList.add('two');
     
        }
        else if(counter==2)
        {
         img.classList.remove('two');
         counter=-1;
        }
    },2000)

}
getInter()

about.addEventListener('click',function()
{
   slideDown.classList.add('active')
})
i.addEventListener('click',function()
{
    slideDown.classList.remove('active')
})