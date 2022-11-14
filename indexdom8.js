let form = document.getElementById('addForm');
let text=document.getElementById('item');

// added event listener to submit form button
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let list = document.createElement('li');
    list.className='list-group-item';
    list.textContent=text.value;
    let btn = document.createElement('button');
    btn.innerText='X';
    btn.className='btn btn-danger btn-sm float-right delete';
    list.appendChild(btn);
    let topchild=document.getElementById('items').firstElementChild;
    let element=document.getElementById('items');
    element.insertBefore(list,topchild);
})

// added event listener to delete button


let ul = document.getElementById('items');
ul.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        let rlist=e.target.parentElement;
        ul.removeChild(rlist);
    }
})

// filtering the elements
let filter=document.getElementById('filter');
filter.addEventListener('keyup',(e)=>{
    let text=e.target.value.toLowerCase();
    let items=ul.getElementsByTagName('li');
    Array.from(items).forEach(function (item){
        let itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
})