let listView = document.querySelector('.list-view');
let gridView = document.querySelector('.grid-view');
let gridMode = document.querySelector('.grid-mode');
let listMode = document.querySelector('.list-mode');

listMode.addEventListener('click',function(){
    listMode.classList.add('active-mode');
    gridMode.classList.remove('active-mode');
    
    listView.classList.remove('de-active-view');
    gridView.classList.add('de-active-view');
})

gridMode.addEventListener('click',function(){
    listMode.classList.remove('active-mode');
    gridMode.classList.add('active-mode')
    gridView.classList.remove('de-active-view');
    listView.classList.add('de-active-view');
})