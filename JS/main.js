const canvas = document.getElementById('game-board')
const ctx = canvas.getContext('2d')



// Ajustar tela
function ajustarTela(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Desenhar o canvas
    ctx.fillStyle = "#2c3e50"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(window.innerWidth / 4, window.innerHeight / 4, window.innerWidth / 2, window.innerHeight / 2);
    
    ctx.fillStyle = "#f1c40f"
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Ajusta no carregamento inicial
ajustarTela();

// Reajusta se o usuário redimensionar a janela
window.addEventListener('resize', ajustarTela);










