const imgeContainer =document.getElementById('img-container')
const loader =document.getElementById('loader')

let photosArry=[]





//API
const count = 30;
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
 const apiKey = 'gvt1n6fOIl5niEsvzVm14yhFXdsUeOkU4k8Qs8QLNXM';
 const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

//  const apiUrl =`https://api.unsplash.com/photos/random?client_id=jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek&count=30`

// show photo in dom
function  disPlayPhoto(){
    photosArry.forEach((photo)=>{

        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html)
        item.setAttribute('target','_blank')

       
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular)
        img.setAttribute('alt',photo.description)
        img.setAttribute('title',photo.description)

        item.appendChild(img)
        imgeContainer.appendChild(item)

    })

}
//get photo from api
async function getphoto(){
    try {
        const response=await fetch(apiUrl)
        photosArry =await response.json();
         console.log(photosArry)
        disPlayPhoto();
        
    } catch (error) {
        //catch error here
    }
}
 //scroll near bottem
 
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
      
      getphoto();
    }
  });


getphoto();
