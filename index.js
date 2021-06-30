const els = document.querySelectorAll('.player-options div img');
var playerOptionSelected;
var IAOptionSelected;

const ValidateWin = ()=>{
    
    // alert(playerOptionSelected)
    // alert(IAOptionSelected)
    var box_resul = document.querySelector('.container-resul');
    var bg = document.querySelector('.bg');

    if(playerOptionSelected == 'paper'){

        if(IAOptionSelected == 'paper'){
            //empate
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Ah, houve um empate.</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
        }else if(IAOptionSelected == 'scissor'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Haha, eu ganhei!</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //derrota
        }else if(IAOptionSelected == 'rock'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Você ganhou:(</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //vitoria
        }
    }
    
    if(playerOptionSelected == 'rock'){

        if(IAOptionSelected == 'rock'){
            //empate
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Ah, houve um empate.</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
        }else if(IAOptionSelected == 'paper'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Haha, eu ganhei!</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //derrota
        }else if(IAOptionSelected == 'scissor'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Você ganhou:(</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //vitoria
        }
    }
    
    if(playerOptionSelected == 'scissor'){

        if(IAOptionSelected == 'scissor'){
            //empate
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Ah, houve um empate.</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
        }else if(IAOptionSelected == 'rock'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Haha, eu ganhei!</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //derrota
        }else if(IAOptionSelected == 'paper'){
            box_resul.style.display =  'flex'
            box_resul.innerHTML = "<h2>Você ganhou:(</h2> <button onclick='resetAll()'>Início</button>"
            bg.style.display =  'block'
            //vitoria
        }
    }

    document.querySelector('button').addEventListener('click',()=>{
        location.reload();
    })
}


const resetOpacityplayer = ()=>{
    
    for(var i = 0; i < els.length; i++){
            els[i].style.opacity = 0.2;
    }

}

const resetOpacityIA = ()=>{
    var IAoptions = document.querySelectorAll('.IA-options div');
    for(var i = 0; i < els.length; i++){
        IAoptions[i].childNodes[0].style.opacity = 0.2;
    }

}

const IAplay = ()=>{
    
    var rand = Math.floor(Math.random() * 3);

    var IAoptions = document.querySelectorAll('.IA-options div');
    // alert(IAoptions.length)
    resetOpacityIA();
    for(var i = 0; i < IAoptions.length; i++){
        if(i == rand){
            IAoptions[i].childNodes[0].style.opacity = 1;
            IAOptionSelected = IAoptions[i].childNodes[0].getAttribute('option')
        }
    }

    setTimeout(() => {
        ValidateWin();
    }, 2000);

}

for(var i = 0; i < els.length; i++){
    els[i].addEventListener('click',(t)=>{
        // alert('test')
        resetOpacityplayer();
        t.target.style.opacity = 1;

        playerOptionSelected = t.target.getAttribute('option');

        IAplay();
        // alert(playerOptionSelected)
    })
}


