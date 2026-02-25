// Lógica do cenario infinito
export class Background {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById("background-image");
        this.canvasWidth = gameWidth;
        this.canvasHeight = gameHeight;
        this.width = this.canvasWidth;
        this.height = this.canvasHeight;

        this.x = 0;
        this.y = 0;
        this.speed = 2;
    }

    draw(ctx){
        if (!this.image) return;
        if (!this.image.complete) return;

        ctx.drawImage(this.image, this.x, 0, this.canvasWidth, this.canvasHeight);
        ctx.drawImage(this.image, this.x + this.canvasWidth, 0, this.canvasWidth, this.canvasHeight);
    }
    update(){
        this.x -= this.speed;
        if (this.x <= -this.canvasWidth) this.x = 0;
    }
}
