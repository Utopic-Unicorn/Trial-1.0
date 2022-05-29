const yesterday = document.querySelector('#btnradio1');
const today = document.querySelector('#btnradio2');
const tomorrow = document.querySelector('#btnradio3');
const cardImage = document.querySelector('.card-img-top');
const meme = document.querySelector('.card-text');
const emege = document.querySelector('.emege');
const cap = document.querySelector('.caption')

yesterday.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1564238156626-c865046366cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
    meme.innerText = 'Lazy but cute Panda.'
    // console.log('clicked')
})

today.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    meme.innerText = 'No diet but still cute Panda.'
})

tomorrow.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1562683687-80cb85c493b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    meme.innerText = "Starting to excercise Panda, hope he doesn't hurt himself."
})

// if (emege.src = 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'){
//     cap.innerText = 'Spotted';
// }if (emege.src = 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'){
//     cap.innerText = 'Arctic Fox';
// }else{
//     cap.innerText = 'Shit Animal';
// }