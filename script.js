//mettre dans l'ordre des images
let tabTitleHeader = ['Nuit-au-musée.jpg', 'Tee-shirt-n°1.jpg', 'Tee-shirt-n°2.jpg', 'Composition.jpg','futur-projects.jpg', 'La-Ferme-Dubois.mp4', '@Eslam.mp4', 'Torikara-san.mp4']
let tabTitle = ['Titre 1er img', 'Green tee-shirt composition', 'Black tee-shirt composition', '3 faces', 'More projects coming soon :)', 'UI / UX / Development', 'UI / UX / Prototype', 'UI / UX / Development']
let tabDesc = ['Desc 1er img'

, ' "no description" '

, 'Project based on "Cold War Modern: Design 1945-1970" book.'

, 'Playing with 3 pencil drawings to make a movie poster'

,'currently working on other projects','La Ferme Dubois is a farm that cultivate hemp. The goal was to create a product based on hemp and blueberrys. We chose to make cookies. My part was to create the website/design.'

, '_eslam.__ is a character designer on Instagram and Youtube. I liked his work and decide to make a website based on his instagram page.'

,'In group of two we were ordered to fully create a website for a japanese fast-foods in Dijon. The challenge here was that we only got 5 days to design & develop the website. In this project I was mainly focused on the UI & UX of the website. The client here was pretty cool, gave us carte blanche but requested few things like having a google map iframe, picture of every meals etc.']
let tabDate = ['Date 1er img', '12/2021', '2022', '2021','2022', '2022', '2022', '03/2021'  ]

// -DESIGN-
let tabImgP0 = ['img/webmarketing/webMarketingNews.jpg', 'img/webmarketing/webMarketingReal.jpg', 'img/webmarketing/webMarketingWeb.jpg'] 
let tabImgP1 = ["img/tee-shirt-Vert/appareil-photo-front-min.jpg", 'img/tee-shirt-Vert/appareil-photo-back-min.jpg', 'img/tee-shirt-Vert/appareil-photo-back.jpg']
let tabImgP2 = ['img/tee-shirt-Black/tee-shirt-2faces-back-min.jpg', 'img/tee-shirt-Black/2faces-front-min.jpg' ]
let tabImgP3 = ['img/affiche film/3tetes crayon-min.jpg', 'img/affiche film/3tetes crayon noiretblanc-min.jpg' ]
let tabImgP4 = [] 
// -WEBSITES-

let tabImgP5 = [] //video de laFermeDubois
let tabImgP6 = []//video de torikara-san
let tabImgP7 = []
// -OTHERS-
// let tabImgP8 = []
// let tabImgP9 = [] 




//DELAY
function delay(n) {
return new Promise(function (resolve) {
  setTimeout(resolve, n * 1);
});
}

//fades
async function fadeIn(param, time) {
    classParam = document.querySelector('.' + param)
    classParam.style.display = 'block'
    classParam.style.animation = 'fadeIn ' + time + 's'
    document.querySelector('html').style.pointerEvents = 'none'
    await delay(500)
    document.querySelector('html').style.pointerEvents = null
    classParam.style.animation = null
}
async function fadeOut(param, time) {
    classParam = document.querySelector('.' + param)
    classParam.style.animation = 'fadeOut ' + time + 's'
    document.querySelector('html').style.pointerEvents = 'none'
    await delay(500)
    classParam.style.display = 'none'
    document.querySelector('html').style.pointerEvents = null
    classParam.style.animation = null
}
//nombre sur page d'accueil
document.querySelector('.redDot').innerHTML = document.querySelectorAll('.img').length
     
//on va chercher la classe (.img) dans le html -> au click on display le pop up -> le pop up ce plaçera 
//a tel px de l'img 
document.querySelectorAll('.img').forEach(item => {
    item.addEventListener('click', event => {
       // console.log(item)
        document.querySelector('.section-description').style.display= 'block'

        //si video = un ID dis si dessous alors on lance la video SINON (else) on lance l'image
        if ((item.id == '4') || (item.id == '5') || (item.id == '6') || (item.id == '7')) {

            console.log(item)
            document.querySelector('.video-project').style.display='block'
            document.querySelector('.img-project').style.display='none'
            document.querySelector('.video-project').src = item.src
            
            document.querySelector('.window-project').style.top = item.offsetTop+40 + 'px'
            document.querySelector('.window-project').style.left = item.offsetLeft+100 + 'px'
            
            //media screen pour video 
            var mq = window.matchMedia('all and (min-width: 2001px)');
            if(mq.matches){
                document.querySelector('.video-project').style.width = '900px'
            }else{
                document.querySelector('.video-project').style.width = '600px'
            }

          
            
            if ((item.id == '4')){
                
                document.querySelector('.video-project').style.width = '200px'
                // document.querySelector('.window-post-it').style.width = '200px'
                // document.querySelector('.window-post-it').style.top = item.offsetTop+30 + 'px'
                // document.querySelector('.window-post-it').style.left = item.offsetLeft+50 + 'px'
            }
        } 
        
        //si premiere photo est img
        else {
            document.querySelector('.video-project').style.display='none'
            document.querySelector('.img-project').style.display='block'
            document.querySelector('.img-project').src = item.src
            document.querySelector('.window-project').style.top = item.offsetTop+40 + 'px'
            document.querySelector('.window-project').style.left = item.offsetLeft+100 + 'px'
            // document.querySelector('.window-post-it').style.top = item.y+200 + 'px'
            // document.querySelector('.window-post-it').style.left = item.x+300 + 'px'
            console.log(item)
        }
        


        
        // document.querySelector('.window-post-it').style.background = tabColor[Math.floor(Math.random() * 4)]
        //rajouter un event qui fasse un clique en dehors et ferme la fenetre
        
        
        
        //post-it / titre / description
        document.querySelector('.titre-post-it').innerHTML= tabTitle[item.id]
        document.querySelector('.p-post-it').innerHTML= tabDesc[item.id]
        document.querySelector('.date-post-it').innerHTML= tabDate[item.id]
        document.querySelector('.titre-header').innerHTML= tabTitleHeader[item.id]

        document.querySelector('.backgroundOverlay').style.display= 'block'

        //select bon tab
        clickedElementId = event.target.id
        if (clickedElementId == '0') {
            arraySelect = tabImgP0    
        }
        else if (clickedElementId == '1') {
            arraySelect = tabImgP1  
          }
        else if (clickedElementId == '2') {
            arraySelect = tabImgP2
         }
        else if (clickedElementId == '3') {
            arraySelect = tabImgP3
         }
        else if (clickedElementId == '4') {
            arraySelect = tabImgP4
         }
        else if (clickedElementId == '5') {
            arraySelect = tabImgP5
         }
        else if (clickedElementId == '6') {
            arraySelect = tabImgP6
         }
        else if (clickedElementId == '7') {
            arraySelect = tabImgP7
            }
        else if (clickedElementId == '8') {
            arraySelect = tabImgP8
         }
        else if (clickedElementId == '9') {
            arraySelect = tabImgP9
         }


        
    })
})

//click outside to close the popup
document.querySelector('.backgroundOverlay').addEventListener('click', () => {
    document.querySelector('.section-description').style.display= 'none'
    document.querySelector('.backgroundOverlay').style.display='none'
    document.querySelector('.window-project').style.zIndex = 2
    nbr = 1

})

                
                

//fade in/out

document.querySelector('.blue-folder').addEventListener('click', previewProject)
async function previewProject(){
    fadeOut('section-home', '.5')
    await delay(500)
    fadeIn('section-project', '.5');
}


//fade button home 
document.querySelector('.button-home').addEventListener('click', backHome)
async function backHome(){
    fadeOut ('section-project', '.5')
    await delay(500)
    fadeIn('section-home', '.5');
}

// le i représente l'emplacement dans le tableau du haut ( variable définie)
nbr = 1

//change z-index
function changeIndex(){

    document.querySelector('.window-project').style.zIndex = 4
    document.querySelector('.window-post-it').style.zIndex = 2

   i=0
    i++
    document.querySelector('.window-project').src = tabImgP1[i] 

} 
document.querySelector('.window-project').addEventListener('click', changeIndex)

function changeIndexBack(){

    document.querySelector('.window-project').style.zIndex = 2
    document.querySelector('.window-post-it').style.zIndex = 4

}
document.querySelector('.window-post-it').addEventListener('click', changeIndexBack)

//display caroussel img

function skipImage(){
    if (nbr > arraySelect.length - 1 ) {
      nbr=0
    }


    //si img alors
    if (arraySelect[nbr].endsWith('jpg') ) {
        document.querySelector('.img-project').style.display = 'block'
        document.querySelector('.video-project').style.display = 'none'

        document.querySelector('.img-project').src = arraySelect[nbr]
        
    } 
    
    //si video alors
    if (arraySelect[nbr].endsWith('.mp4')) {
        console.log('video skipImg')
        document.querySelector('.video-project').style.display = 'block'
        document.querySelector('.img-project').style.display = 'none'

        document.querySelector('.video-project').src = arraySelect[nbr]

    }





    nbr++
}
document.querySelector('.img-project').addEventListener('click', skipImage )

document.querySelector('.video-project').addEventListener('click', skipVideo )

function skipVideo() {
    document.querySelector('.window-project').style.zIndex = 4
    document.querySelector('.window-post-it').style.zIndex = 2

}

