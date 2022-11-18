const character = document.getElementsByClassName("character")[0]; //selecionando a imagem do personagem pela classe
const containerCharacter = document.getElementsByClassName("container-character")[0]; //selecionando a "div" do personagem pela classe

const deathAudio = new Audio('./assets/deathsound.mp3'); //audio do personagem morrendo

let isDead = false; //variável do estado do personagem (vivo/morto)

const VELOCITY = 10; //definindo qual distância o personagem deve percorrer por movimento

const SCREEN_WIDTH = screen.width; //definindo a variável que contém a largura da tela
const SCREEN_HEIGHT = screen.height; //definindo a variável que contém a altura da tela

let xPosition = 500; //definindo a posição inicial horizontal do personagem
let yPosition = 300; //definindo a posição inicial vertical do personagem

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; //definindo as teclas do teclado que serão usadas para a movimentação
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //definindo os comandos que vão ser executados pelo personagem

//detectando o input da tecla do usuário (keydown)
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    //checando se alguma tecla está sendo pressionada
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })
    if(!keyPressedAvaiable) return;

    //removendo as classes de "directions" após a execução de algum movimento
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })




    
    //restringindo a condição do personagem estar vivo para se mover
    if (!isDead) {
        //definindo e limitando a movimentação vertical para cima do personagem (ao pressionar a "seta para cima")
        if(key === "ArrowUp"){
            character.classList.add("turnUp");
            //condição de movimentação do personagem para cima
            if (yPosition > 30) {
                yPosition -= VELOCITY;
            } else {
                //gif do personagem morrendo ao chegar nas bordas + áudio + bloqueando movimentação pós morte
                character.src = './assets/deadgif.gif';
                character.style.height = '50px';
                character.style.width = '50px';
                deathAudio.play();
                isDead = true;
            }
        }

        //definindo e limitando a movimentação vertical para baixo do personagem (ao pressionar a "seta para baixo")
        if(key === "ArrowDown"){
            character.classList.add("turnDown");
            //condição de movimentação do personagem para baixo
            if (yPosition < (window.innerHeight - 90)) {
                yPosition += VELOCITY;
            } else {
                //gif do personagem morrendo ao chegar nas bordas + áudio + bloqueando movimentação pós morte
                character.src = './assets/deadgif.gif';
                character.style.height = '50px';
                character.style.width = '50px';
                deathAudio.play();
                isDead = true;
                yPosition = window.innerHeight - 40;
            }
        }

        //definindo e limitando a movimentação horizontal para esquerda do personagem (ao pressionar a "seta para esquerda")
        if(key === "ArrowLeft"){
            character.classList.add("turnLeft");
            //condição de movimentação do personagem para a esquerda
            if (xPosition > -10) {
                xPosition -= VELOCITY;
            } else {
                //gif do personagem morrendo ao chegar nas bordas + áudio + bloqueando movimentação pós morte
                character.src = './assets/deadgif.gif';
                character.style.height = '50px';
                character.style.width = '50px';
                deathAudio.play();
                isDead = true;
                xPosition = 10;
            }
        }

        //definindo e limitando a movimentação horizontal para direita do personagem (ao pressionar a "seta para direita")
        if(key === "ArrowRight"){
            character.classList.add("turnRight");
            //condição de movimentação do personagem para a direita
            if (xPosition < window.innerWidth - 110) {
                xPosition += VELOCITY;
            } else {
                //gif do personagem morrendo ao chegar nas bordas + áudio + bloqueando movimentação pós morte
                character.src = './assets/deadgif.gif';
                character.style.height = '50px';
                character.style.width = '50px';
                deathAudio.play();
                isDead = true;
                xPosition = window.innerWidth - 60;
            }
        }
    }

    //garantindo que a "div do personagem" se movimente junto a ele (de acordo com a posição em pixels)
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`;
});

//adicionei essa parte para fazer o body ocupar 100% da tela e, após isso, coloquei uma borda vermelha delimitando o body
const logo = document.getElementById('logo');
logo.style.height = '68px';
logo.style.width = '128px';
document.body.style.height = '100vh';
document.body.style.border = '3px solid red';