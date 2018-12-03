
 export class UserInp
 {
     constructor()
     {
         this.inp=document.querySelectorAll('input');
         this.but=document.querySelector('button');
         this.users=[];
         this.cos='fwqfwqfwqw';
         this.tablet=[];
         this.tab=[];
         this.newTab=[];
         [...this.inp].forEach((inpe,id)=>
         {
             inpe.dataset.key=id;
             this.but.addEventListener('click',function()
             {
                this.inpVal(inpe.value)
                this.checkTabs();
                
             }.bind(this))
         })
         this.val=null;
     }
     async getData()
     {  

      const url=await fetch('https://queatreact.firebaseio.com/users.json')
      const jsonElement= await url.json()
      const getObj=Object.keys(jsonElement);
      this.users.push(getObj);
      let newus=[getObj]
      let iter=null;
      let  geturl;
      function getelements(newus)
      {
          return newus
      }
      let obj=getelements(...newus);

      for(let i=0;i<obj.length;i++)
      {
        iter=obj[i]
       geturl= await fetch(`https://queatreact.firebaseio.com/users/`+iter+`.json`)
       const showIT= await geturl.json();
       const elm=showIT.element;
       this.tab.push(elm);
       //this.newTab=this.removeRest(this.tab,this.tab.length)
      this.newTab=this.tab;
      }
     }
     inpVal(input)
     {
        this.tablet.push(input)
        return   this.tablet
     } 
   
     removeRest(tab,lenght)
     {
        let newTab=tab.slice(1,lenght-1);
        return newTab;
     }
     checkTabs()
     {
         let value=this.tablet;
         let sgw; 
         for(let i=0;i<this.newTab.length;i++)
         {
            sgw=this.compareArrays(value,this.newTab[i])
            if(sgw)break;
         } 
        if(sgw)
        {
            document.body.classList.add('green');
        }

     }
     compareArrays(arr1,arr2)
     {
        arr2.splice(2,3);
        let _newTab= new WeakMap()
        _newTab.set(this,[])
        let _flag=new WeakMap()
        _flag.set(this,false)
        arr1.forEach((element,id)=>
            {
              let _elm1=new WeakMap();
              let _elm2=new WeakMap();
              _elm1.set(this,element)
              _elm2.set(this,_elm1.get(this)!=_elm1.get(this))

              if( _elm1.get(this)==arr2[id] || _elm2.get(this)==arr2[id])
              {
                _newTab.get(this).push(element);
                 if( _newTab.get(this).length==2)
                 {
                    _flag.set(this,true)
                 }
                 
               }
            })
     return _flag.get(this);    
     }
   
 }

const userNew=new UserInp()

userNew.getData();

   const removePop=()=>
   {
       document.querySelector('aside').classList.remove('active')
   }
    window.addEventListener('click',removePop)
    
