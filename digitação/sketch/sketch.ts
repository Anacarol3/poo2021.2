
//function setup() 
//{
//}
//function draw()
//{
//}

class bolha {
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
        circle(this.x, this.y, 2* bolha.radius)
        fill(0)
        stroke(0)
        textSize(15)
        text(this.letra, this.x - 5, this.y + 5 )
    }

}

    

