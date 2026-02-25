// Classe que cuida da vida, posição e sprites do jogador

export class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 50;
        this.height = 50;
        this.x = 100;
        this.y = gameHeight - this.height - 20;
    }

    draw(ctx){
        ctx.fillStyle = "#e74c3c"
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
