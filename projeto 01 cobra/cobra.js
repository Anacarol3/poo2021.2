const numl = 6
const numc = 6


const lado = 50 
let cobrax = 2;
let cobray = 3;
let cobravelx = 0;
let cobravely = 0;
let cobracor; 
let celulacor;  
let tempo = 0;

comidax = 0;
comday = 0;
comidacor;

function gerarcomida (){
    comidax = parseInt(random(0, numc));
    comiday = parseInt(random(0, numl)); 
}

function setup (){
    createCanvas( numl * lado, numc * lado)
    frameRate (30);
    cobracor = color("blue");
    celulacor = color("pink"); 
    comidacor = color("yellow");
    gerarcomida(); 
}

function drawcelula ( x , y, color){
    noStroke();
    fill(color)
    square( x * lado + 1, y * lado + 1, lado - 1)
}

function drawmatriz ( ){
    fill (155)
    for( let c = 0; c < numc; c++)
       for (let l = 0; l < numl; l++)
         drawcelula( c, l, celulacor)
}

function cobralooping(){
if (cobrax == numc)
cobrax = 0;
if (cobray == numl)
cobray = 0
if (cobrax == -1)
cobrax = numc -1
if (cobray == -1)
cobray = numl -1

}

function cobraanda(){
    if (frameCount - tempo > 10) {
        tempo = frameCount;
        cobrax += cobravelx 
        cobray += cobravely
    }
}

function draw (){
    cobraanda();
    cobralooping()
     if (cobrax == comidax && cobray == comiday){
    gerarcomida();
     }

    background (255)
    drawmatriz();
    drawcelula (comidax, comiday, comidacor)
    drawcelula (cobrax, cobray, cobracor)

   fill (0);
   textSize (20);
   text(frameCount, 10, 30)
}

function keyPressed ( ){
    if (keyCode === LEFT_ARROW){
        cobrax -= 1; 
        cobravelx = -1
        cobravely = 0
    }
        else if (keyCode === RIGHT_ARROW){
            cobravelx = 1; 
            cobravely = 0;
        }
       
        else if (keyCode === UP_ARROW){
            cobravelx = 0; 
            cobravely = -1;

        }
      
        else if (keyCode === DOWN_ARROW){
            cobravelx = 0; 
            cobravely = 1;
        }
}