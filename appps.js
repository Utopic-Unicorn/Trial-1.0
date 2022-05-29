const yesterday = document.querySelector('#btnradio1');
const today = document.querySelector('#btnradio2');
const tomorrow = document.querySelector('#btnradio3');
const cardImage = document.querySelector('.card-img-top')
const meme = document.querySelector('.card-text')

yesterday.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1564238156626-c865046366cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
    meme.innerText = 'Hey! That looks like me.'
    // console.log('clicked')
})

today.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    meme.innerText = 'A cute Panda that looks like me.'
})

tomorrow.addEventListener('click', function(){
    cardImage.src = 'https://images.unsplash.com/photo-1562683687-80cb85c493b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    meme.innerText = 'What I look like tomorrow.'
})