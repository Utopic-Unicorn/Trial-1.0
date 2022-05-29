const image = document.querySelectorAll('img');

for(let i = 0; i< image.length; i++){
    image[i].addEventListener('click', function(){
        image[i].style.transform = 'scale(1.1)';
        // image[!`${i}`].style.transform = 'scale(1)';
       
    })
    image[i].addEventListener('dblclick', function(){
        image[i].style.transform = 'scale(1)'
    })

}