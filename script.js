let points = 0;
let items = [];


function navigate(section){
document.querySelectorAll('.page').forEach(p => p.style.display='none');
document.getElementById(section).style.display='block';
}


function toggleDarkMode(){
document.body.classList.toggle('dark');
}


function showToast(msg){
const toast=document.getElementById('toast');
toast.textContent=msg;
toast.className='toast show';
setTimeout(()=>{toast.className='toast';},3000);
}


function addItem(e){
e.preventDefault();
const form=e.target;
const name=form[0].value;
const type=form[1].value;
const condition=form[2].value;
const desc=form[3].value;
const item={name,type,condition,desc};
items.push(item);
points += type==='Book'?1:2;
document.getElementById('userPoints').textContent=points+' points';
document.getElementById('itemsCount').textContent=items.length;
form.reset();
showToast('Item Added!');
renderItems();
}


function renderItems(){
const grid=document.getElementById('itemsGrid');
grid.innerHTML='';
items.forEach(i=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`<h3>${i.name}</h3><p>Type: ${i.type}</p><p>Condition: ${i.condition}</p><p>${i.desc}</p><button class='btn' onclick='swapItem(${items.indexOf(i)})'>Swap</button>`;
grid.appendChild(card);
});
}


function swapItem(index){
points += 0;
showToast('Item Swapped!');
items.splice(index,1);
renderItems();
document.getElementById('itemsCount').textContent=items.length;
}