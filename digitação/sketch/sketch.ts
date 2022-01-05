class Bolha {
    x: number;
    y: number;
    letra: string;
    velocidade: number;
    static radius: number = 20; 
    alive: boolean = true;
    constructor (x: number, y: number, letra: string, velocidade: number) {
        this.x = x
        this.y = y 
        this.letra = letra
        this.velocidade = velocidade
    }
    update(): void {
        this.y += this.velocidade 
    }

    draw(): void {
        fill(255)
        stroke(255)
        circle(this.x, this.y, 2* Bolha.radius)
        fill(0)
        stroke(0)
        textSize(15)
        text(this.letra, this.x - 5, this.y + 5 )
    } 
} 

let bolha = Bolha

class Board {
    bolhas: Bolha [] = []
    timeout: number = 30
    timer: number = 0
    hits = 0
    mistakes = 0
    constructor (){
        this.bolhas = [new Bolha( 100, 100, "a", 1 )]
        this.bolhas.push(new Bolha ( 200, 200, "b", 2))
        this.bolhas.push(new Bolha ( 300, 300, "c", 3))
        
    }
    update(): void{
        for (let bolha of this.bolhas)
        bolha.update()
        this.verificartempodabolha();
        this.marcarforadabolha();

        for (let bolha of this.bolhas)
        bolha.update
        this.removerbolhamorta 

    } 

    removerbolhamorta(): void { 
         let vivas: Bolha[] = [];
        for (let bolha of this.bolhas)
        if (bolha.alive)
        vivas.push(bolha)

    }
    removerquandoacertar(code: number): void{
    for (let bolha of this.bolhas)
    if( bolha.letra[0]. toUpperCase(). charCodeAt(0)  == code )
    bolha.alive = false
    this.hits++; 
    break; 
    }

    verificartempodabolha() : void {
        this.timer -= 1;
        if (this.timer <= 0 ){
            this.addBolha();
            this.timer = this.timeout
        }
    }

    marcarforadabolha(): void{
        for( let bolha of this.bolhas)
        if (bolha.y + 2 *Bolha.radius >= height )
        bolha.alive = false
        this.mistakes++;
    }
    
    addBolha(): void{
        let x = random ( 0, width  - 2* Bolha.radius )
        let y = -2* Bolha.radius
        let letra = random (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
        let velocidade = random (1, 5)
        let bolha = new Bolha ( x, y, letra, velocidade);
        this.bolhas.push(bolha);
    }
    draw(): void { 
        stroke ("white")
        fill("white")
        textSize(30);
        text("hits:" + this.hits, "mistakes:" + this.mistakes, 30, 30)
        for (let bolha of this.bolhas)
        bolha.update()


    }
}

class Jogo{
    board : Board 
    activeState: () => void; 
    constructor() {
        this.board = new Board 
        this.activeState = this.jogarJogo;
    }
    
    jogarJogo(): void{
        this.board.update()
        background( 50, 50, 50)
        this.board.draw
        if (this.board.mistakes < 5)
        this.activeState = this.fimdejogo
    }

    fimdejogo(): void {
    background( 255, 0, 0 );
    fill (0);
    textSize( 100 );
    text ("GAME OVER", 50, 300)
    }
}
let joguinho: Jogo

function setup() {
    createCanvas( 800, 600);
    joguinho = new Jogo()
}

function keyPressed(){
    joguinho.board.removerquandoacertar(keyCode)
}
function draw(){
 
    let bolha = new Bolha ( 100, 100, "a", 1) 
    joguinho.activeState ()
}



    

