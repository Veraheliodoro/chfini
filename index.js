const player=document.querySelectorAll('.playgraund')
const robot=document.querySelector('.robot')
let playerValue =''
let robotValue = 0
   function letPlay(){
    robotValue = Math.floor(Math.ramdom()*3);
    let image=''
    if (robotValue==0) {
        image='pierre'
    }else if (robotValue==1){
        image='mains'
    }else{
        image='ciseaux'
    }
    robot.innerHTML=`<img src="img/${image}.png" alt="${image}">`;
   }
   // la bloucle FOR prend en 3 arguments (init, comparaison=codition, action)
   for (let index = 0; index < player < length; index++) {
    player[index].addEventListener('click', (e) => {
        if(index==0){
            playerValue ='pierre';
        }else if ( index==1){
            playerValue ='mains' ;
        }else{
            playerValue ='ciceaux';
        }
        letPlay()
    })
   }
   