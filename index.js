const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close-btn');
const modalContainer = document.querySelector('.modal-container');

openBtn.addEventListener('click', ()=>{
    modalContainer.classList.toggle("active");
})
closeBtn.addEventListener('click', ()=>{
    modalContainer.classList.remove('active');
})