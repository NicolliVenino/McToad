const gameWidth = 510;
const gameHeight = 510;

var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var velocidadePlayer = 150;
var teclado;
var bg;
var palhaco;
var palhacoBravo;
var palhacoSeguindo = true;
var obstEsquerdo;
var obstAcimaDireita;
var obstPequeno;
var obstCentroCima;
var obstCentro;
var pao;
var ovo;
var batata;
var carne;
var alimento;
var placarPao;
var placarCarne;
var placarOvo;
var placarBatata;
var pontuacaoPao =0;
var pontuacaoCarne =0;
var pontuacaoOvo =0;
var pontuacaoBatata =0;



function preload() {
    this.load.image('bg', 'assets/bg.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('palhaco', 'assets/palhaco.png');  
    this.load.image('palhacoBravo', 'assets/palhacoBravo.png'); 
    this.load.image('obstEsquerdo', 'assets/obstEsquerdo.png');
    this.load.image('obstAcimaDireita', 'assets/obstAcimaDireita.png');
    this.load.image('obstPequeno', 'assets/obstPequeno.png');
    this.load.image('obstCentroBaixo', 'assets/obstCentroBaixo.png');
    this.load.image('obstCentro', 'assets/obstCentro.png');

    this.load.image('pao', 'assets/pao.png');
    this.load.image('carne', 'assets/carne.png');
    this.load.image('batata', 'assets/batata.png');
    this.load.image('ovo', 'assets/ovo.png');
}

function create() {
    bg = this.add.image(gameWidth / 2, gameHeight / 2, 'bg');
    // Criando o player com física
    player = this.physics.add.sprite(gameWidth / 2.5, gameHeight / 2, 'player').setScale(0.072);
    player.setCollideWorldBounds(true); 
    
    palhaco = this.physics.add.sprite(gameWidth / 1.5, gameHeight / 3, 'palhaco').setScale(0.1);
    palhaco.setCollideWorldBounds(true); 

    obstEsquerdo = this.physics.add.staticImage(gameWidth / 2, gameHeight / 2, 'obstEsquerdo');
    obstEsquerdo.setSize(15, 160);  
    obstEsquerdo.setOffset(65, 285);

    obstAcimaDireita = this.physics.add.staticImage(gameWidth / 2, gameHeight / 2, 'obstAcimaDireita');
    obstAcimaDireita.setSize(15, 160);  
    obstAcimaDireita.setOffset(425, 150);

    obstPequeno = this.physics.add.staticImage(gameWidth / 2, gameHeight / 2, 'obstPequeno');
    obstPequeno.setSize(15, 75);  
    obstPequeno.setOffset(426, 365);

    obstCentroBaixo = this.physics.add.staticImage(gameWidth / 2, gameHeight / 2, 'obstCentroBaixo');
    obstCentroBaixo.setSize(160, 15);  
    obstCentroBaixo.setOffset(172, 385);

    obstCentro = this.physics.add.staticImage(gameWidth / 3, gameHeight / 2, 'obstCentro');
    obstCentro.setSize(160, 15);  
    obstCentro.setOffset(172, 155);

    placarPao = this.add.text(50, 5, ':' + pontuacaoPao, {fontSize:'40px', fill:'#495613'});
    placarCarne = this.add.text(180, 5, ':' + pontuacaoCarne, {fontSize:'40px', fill:'#495613'});

    batata1 = this.physics.add.sprite(gameWidth-470, 150, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata1, pegarBatata1, null, this);

    ovo = this.physics.add.sprite(gameWidth-470, 200, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo, pegarOvo, null, this);

    ovo1 = this.physics.add.sprite(gameWidth-470, 250, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo1, pegarOvo1, null, this);

    carne = this.physics.add.sprite(gameWidth-470, 300, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne, pegarCarne, null, this);
    
    batata = this.physics.add.sprite(gameWidth-470, 350, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata, pegarBatata, null, this);

    pao = this.physics.add.sprite(gameWidth-470, 400, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao, pegarPao, null, this);

    batata2 = this.physics.add.sprite(gameWidth-470, 450, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata2, pegarBatata2, null, this);

    pao1 = this.physics.add.sprite(gameWidth-420, 470, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao1, pegarPao1, null, this);

    carne1 = this.physics.add.sprite(gameWidth-370, 470, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne1, pegarCarne1, null, this);

    ovo2 = this.physics.add.sprite(gameWidth-320, 470, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo2, pegarOvo2, null, this);

    batata3 = this.physics.add.sprite(gameWidth-270, 470, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata3, pegarBatata3, null, this);

    pao2 = this.physics.add.sprite(gameWidth-220, 470, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao2, pegarPao2, null, this);

    carne2 = this.physics.add.sprite(gameWidth-170, 470, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne2, pegarCarne2, null, this);

    batata4 = this.physics.add.sprite(gameWidth-120, 470, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata4, pegarBatata4, null, this);

    ovo3 = this.physics.add.sprite(gameWidth-70, 470, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo3, pegarOvo3, null, this);

    carne3 = this.physics.add.sprite(gameWidth-42, 430, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne3, pegarCarne3, null, this);

    pao3 = this.physics.add.sprite(gameWidth-42, 380, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao3, pegarPao3, null, this);

    batata5 = this.physics.add.sprite(gameWidth-42, 330, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata5, pegarBatata5, null, this);

    carne4 = this.physics.add.sprite(gameWidth-42, 280, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne4, pegarCarne4, null, this);

    ovo4 = this.physics.add.sprite(gameWidth-42, 230, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo4, pegarOvo4, null, this);

    pao4 = this.physics.add.sprite(gameWidth-42, 180, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao4, pegarPao4, null, this);

    ovo5 = this.physics.add.sprite(gameWidth-42, 130, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo5, pegarOvo5, null, this);

    carne5 = this.physics.add.sprite(gameWidth-92, 130, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne5, pegarCarne5, null, this);

    pao5 = this.physics.add.sprite(gameWidth-142, 130, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao5, pegarPao5, null, this);

    carne6 = this.physics.add.sprite(gameWidth-192, 130, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne6, pegarCarne6, null, this);

    batata6 = this.physics.add.sprite(gameWidth-242, 130, 'carne').setScale(0.08);
    this.physics.add.overlap(player, batata6, pegarBatata6, null, this);

    ovo6 = this.physics.add.sprite(gameWidth-292, 130, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo6, pegarOvo6, null, this);

    pao6 = this.physics.add.sprite(gameWidth-342, 130, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao6, pegarPao6, null, this);

    carne7 = this.physics.add.sprite(gameWidth-395, 130, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne7, pegarCarne7, null, this);

    pao7 = this.physics.add.sprite(gameWidth-395, 200, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao7, pegarPao7, null, this);

    ovo7 = this.physics.add.sprite(gameWidth-395, 250, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo7, pegarOvo7, null, this);

    batata7 = this.physics.add.sprite(gameWidth-395, 300, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata7, pegarBatata7, null, this);

    carne8 = this.physics.add.sprite(gameWidth-250, 300, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne8, pegarCarne8, null, this);

    ovo8 = this.physics.add.sprite(gameWidth-200, 300, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo8, pegarOvo8, null, this);

    pao8 = this.physics.add.sprite(gameWidth-150, 300, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao8, pegarPao8, null, this);

    carne10 = this.physics.add.sprite(gameWidth-150, 250, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne10, pegarCarne10, null, this);

    batata10 = this.physics.add.sprite(gameWidth-150, 200, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata10, pegarBatata10, null, this);

    pao9 = this.physics.add.sprite(gameWidth-150, 350, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao9, pegarPao9, null, this);

    batata8 = this.physics.add.sprite(gameWidth-200, 350, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata8, pegarBatata8, null, this);

    ovo9 = this.physics.add.sprite(gameWidth-250, 350, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo9, pegarOvo9, null, this);

    carne9 = this.physics.add.sprite(gameWidth-300, 350, 'carne').setScale(0.08);
    this.physics.add.overlap(player, carne9, pegarCarne9, null, this);

    batata9 = this.physics.add.sprite(gameWidth-350, 350, 'batata').setScale(0.08);
    this.physics.add.overlap(player, batata9, pegarBatata9, null, this);

    pao10 = this.physics.add.sprite(gameWidth-400, 350, 'pao').setScale(0.08);
    this.physics.add.overlap(player, pao10, pegarPao10, null, this);

    ovo10 = this.physics.add.sprite(gameWidth-400, 400, 'ovo').setScale(0.09);
    this.physics.add.overlap(player, ovo10, pegarOvo10, null, this);

    this.physics.add.collider(player, obstEsquerdo);
    this.physics.add.collider(palhaco, obstEsquerdo);
    this.physics.add.collider(player, obstAcimaDireita);
    this.physics.add.collider(palhaco, obstAcimaDireita);
    this.physics.add.collider(player, obstPequeno);
    this.physics.add.collider(palhaco, obstPequeno);
    this.physics.add.collider(player, obstCentroBaixo);
    this.physics.add.collider(palhaco, obstCentroBaixo);
    this.physics.add.collider(player, obstCentro);
    this.physics.add.collider(palhaco, obstCentro);

    this.physics.add.overlap(player, palhaco, trocarPalhacoEDesaparecer, null, this);

    teclado = this.input.keyboard.createCursorKeys();

}

function update() {
    player.setVelocity(0); // Para evitar que a velocidade fique acumulada

    if (teclado.left.isDown) {
        player.setVelocityX(-velocidadePlayer);
    } else if (teclado.right.isDown) {
        player.setVelocityX(velocidadePlayer);
    }

    if (teclado.up.isDown) {
        player.setVelocityY(-velocidadePlayer);
    } else if (teclado.down.isDown) {
        player.setVelocityY(velocidadePlayer);
    }

    let bgLeft = bg.x - bg.displayWidth / 2;
    let bgRight = bg.x + bg.displayWidth / 2;
    let bgTop = bg.y+110 - bg.displayHeight / 2;
    let bgBottom = bg.y-40 + bg.displayHeight / 2;

    if (player.x < bgLeft) player.x = bgLeft;
    if (player.x > bgRight) player.x = bgRight;
    if (player.y < bgTop) player.y = bgTop;
    if (player.y > bgBottom) player.y = bgBottom;

    if (palhaco.x < bgLeft) palhaco.x = bgLeft;
    if (palhaco.x > bgRight) palhaco.x = bgRight;
    if (palhaco.y < bgTop) palhaco.y = bgTop;
    if (palhaco.y > bgBottom) palhaco.y = bgBottom;

    if (palhacoSeguindo === true){
        this.physics.moveToObject(palhaco, player, 80);
    }

}
function trocarPalhacoEDesaparecer() {
    // Troca a textura do palhaço para a segunda imagem
    palhacoSeguindo = false;
    palhaco.setVelocity(0);
    palhaco.setTexture('palhacoBravo');
    player.setVisible(false); // Torna o player invisível
    player.setActive(false);  // Desativa o player
    // Após 2 segundos, remove o player
    this.time.delayedCall(2000, function () {
        palhaco.setVisible(false); // Torna o player invisível
        palhaco.setActive(false);  // Desativa o player

    }, [], this);
}
function pegarOvo() {
    ovo.setVisible(false);
    ovo.setActive(false);
}
function pegarOvo1() {
    ovo1.setVisible(false);
    ovo1.setActive(false);
}
function pegarCarne() {
    carne.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarBatata() {
    batata.setVisible(false);
    batata.setActive(false);
}
function pegarBatata1() {
    batata1.setVisible(false);
    batata1.setActive(false);
}
function pegarPao() {
    pao.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarBatata2() {
    batata2.setVisible(false);
    batata2.setActive(false);
}
function pegarPao1() {
    pao1.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarCarne1() {
    carne1.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarOvo2() {
    ovo2.setVisible(false);
    ovo2.setActive(false);
}
function pegarBatata3() {
    batata3.setVisible(false);
    batata3.setActive(false);
}
function pegarPao2() {
    pao2.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarCarne2() {
    carne2.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarBatata4() {
    batata4.setVisible(false);
    batata4.setActive(false);
}
function pegarOvo3() {
    ovo3.setVisible(false);
    ovo3.setActive(false);
}
function pegarCarne3() {
    carne3.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarPao3() {
    pao3.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarBatata5() {
    batata5.setVisible(false);
    batata5.setActive(false);
}
function pegarCarne4() {
    carne4.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarOvo4() {
    ovo4.setVisible(false);
    ovo4.setActive(false);
}
function pegarPao4() {
    pao4.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarOvo5() {
    ovo5.setVisible(false);
    ovo5.setActive(false);
}
function pegarCarne5() {
    carne5.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarCarne6() {
    carne6.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}

function pegarBatata6() {
    batata6.setVisible(false);
    batata6.setActive(false);
}
function pegarPao5() {
        pao5.destroy();
        pontuacaoPao += 1;
        placarPao.setText(':' + pontuacaoPao);
    }
function pegarPao6() {
    pao6.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarOvo6() {
    ovo6.setVisible(false);
    ovo6.setActive(false);
}
function pegarCarne7() {
    carne7.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarPao7() {
    pao7.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarOvo7() {
    ovo7.setVisible(false);
    ovo7.setActive(false);
}
function pegarBatata7() {
    batata7.setVisible(false);
    batata7.setActive(false);
}
function pegarBatata8() {
    batata8.setVisible(false);
    batata8.setActive(false);
}
function pegarBatata9() {
    batata9.setVisible(false);
    batata9.setActive(false);
}
function pegarBatata10() {
    batata10.setVisible(false);
    batata10.setActive(false);
}
function pegarCarne8() {
    carne8.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarCarne9() {
    carne9.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarCarne10() {
    carne10.destroy();
    pontuacaoCarne += 1;
    placarCarne.setText(':' + pontuacaoCarne);
}
function pegarOvo8() {
    ovo8.setVisible(false);
    ovo8.setActive(false);
}
function pegarOvo9() {
    ovo9.setVisible(false);
    ovo9.setActive(false);
}
function pegarOvo10() {
    ovo10.setVisible(false);
    ovo10.setActive(false);
}
function pegarPao8() {
    pao8.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarPao9() {
    pao9.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}
function pegarPao10() {
    pao10.destroy();
    pontuacaoPao += 1;
    placarPao.setText(':' + pontuacaoPao);
}