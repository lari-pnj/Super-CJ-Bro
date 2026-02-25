import { Player } from './player.js';
import { Background } from './Background.js';

const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

let canvasWidth, canvasHeight;
let player, background;

function ajustarTela(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    // (Re)cria objetos com as dimensões atuais
    background = new Background(canvasWidth, canvasHeight);
    player = new Player(canvasWidth, canvasHeight);
}

// Ajusta no carregamento inicial
ajustarTela();
window.addEventListener('resize', ajustarTela);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualiza e desenha o cenário primeiro
    background.update();
    background.draw(ctx);

    // Desenha o jogador sobre o cenário
    player.update && player.update();
    player.draw(ctx);

    // Borda do canvas
    ctx.strokeStyle = "#f1c40f";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(animate);
}

animate();








