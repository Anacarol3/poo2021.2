
//function setup() 
//{
//}
//function draw()
//{
//}

class Bolha {
    x: number;
    y: number;
    letra: string;
    velocidade: number;
    static radius: number = 30; 
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

class Bolhas {
    bolhas: Bolha [] = []
    constructor (){
    }
    update(): void{

    } 

    draw(): void {


    }
}
function setup() {
    createCanvas( 800, 600);
}
function draw(){
    background( 50, 50, 50)
    let bolha = new Bolha ( 100, 100, "a", 1)
    bolha.update() 
    bolha.draw ()
}



    

