// Define a cena de fase do jogo usando a biblioteca Phaser
class Fase extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({
            key: 'Fase',
            // Configurações da física do jogo
            physics: {
               arcade: {
                debug: false,
                gravity: { y: 0 }
               } 
            }
        });
    }

    // Carrega os arquivos
    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('bgGameOver', 'assets/bgGameOver.png');
        this.load.image('obstEsquerdo', 'assets/obstEsquerdo.png');
        this.load.image('obstAcimaDireita', 'assets/obstAcimaDireita.png');
        this.load.image('obstPequeno', 'assets/obstPequeno.png');
        this.load.image('obstCentroBaixo', 'assets/obstCentroBaixo.png');
        this.load.image('obstCentro', 'assets/obstCentro.png');
        this.load.spritesheet('spritesheetPalhaco', 'assets/spritesheetPalhaco.png', {frameWidth: 140, frameHeight: 60});
        this.load.spritesheet('spritesheetJogador', 'assets/spritesheetJogador.png', {frameWidth: 150, frameHeight: 75});
        this.load.image('palhacoBravo', 'assets/palhacoBravo.png'); 
        this.load.image('pao', 'assets/pao.png');
        this.load.image('carne', 'assets/carne.png');
        this.load.image('batata', 'assets/batata.png'); 
        this.load.image('ovo', 'assets/ovo.png');
        this.load.image('x', 'assets/x.png');
    }

    create(){
        // Cria o background
        this.bg = this.add.image(510/2, 510/2, 'bg');
        // Cria o spritesheet do jogador
        this.jogador = this.physics.add.sprite(510 / 2.5, 510 / 2, 'spritesheetJogador').setScale(0.8);
        // Evita que o jogador ultrapasse os limites da área de jogo
        this.jogador.setCollideWorldBounds(true); 
        // Ajusta a hitbox do jogador
        this.jogador.setSize(60, 70);  
        this.jogador.setOffset(0, 0);  

        this.anims.create({
            key: 'Jogador', // Nome da animação
            frames: this.anims.generateFrameNumbers('spritesheetJogador', {start:0, end:3}), // Define os frames que serão usados (start:0 e end:3 definem que serão usados 4 frames presentes no arquivo 'spritesheetJogador' mencionado anteriormente)
            frameRate: 1, // Quantidade de frames em 1 segundo
            repeat: -1 
            // '-1' indica que haverá repetição contínua;
            // '0' indica que não haverá repetição;
            // Um numéro positivo indica a quantidade de repetições

        })
        this.jogador.anims.play('Jogador',true); // Inicia a animação do jogador configurada

        // Cria um obstaculo e ajusta sua hitbox
        this.obstEsquerdo = this.physics.add.staticImage(510 / 2, 510 / 2, 'obstEsquerdo');
        this.obstEsquerdo.setSize(15, 160);  
        this.obstEsquerdo.setOffset(65, 285);
    
        // Cria um obstaculo e ajusta sua hitbox
        this.obstAcimaDireita = this.physics.add.staticImage(510 / 2, 510 / 2, 'obstAcimaDireita');
        this.obstAcimaDireita.setSize(15, 160);  
        this.obstAcimaDireita.setOffset(425, 150);
    
        // Cria um obstaculo e ajusta sua hitbox
        this.obstPequeno = this.physics.add.staticImage(510 / 2, 510 / 2, 'obstPequeno');
        this.obstPequeno.setSize(15, 75);  
        this.obstPequeno.setOffset(426, 365);
    
        // Cria um obstaculo e ajusta sua hitbox
        this.obstCentroBaixo = this.physics.add.staticImage(510 / 2, 510 / 2, 'obstCentroBaixo');
        this.obstCentroBaixo.setSize(160, 15);  
        this.obstCentroBaixo.setOffset(172, 385);
    
        // Cria um obstaculo e ajusta sua hitbox
        this.obstCentro = this.physics.add.staticImage(510 / 3, 510 / 2, 'obstCentro');
        this.obstCentro.setSize(160, 15);  
        this.obstCentro.setOffset(172, 155);

        // Inicia as pontuações de cada alimento, incialmente valendo 0
        this.pontuacaoBatata = 0;
        this.pontuacaoCarne = 0;
        this.pontuacaoOvo = 0;
        this.pontuacaoPao = 0;

        // Cria o texto do placar e ajusta sua posiçao para ficar de frente para o seu respectivo alimento
        this.placarPao = this.add.text(50, 5, ':' + this.pontuacaoPao, {fontSize:'40px', fill:'#bdff00'});
        this.placarCarne = this.add.text(180, 5, ':' + this.pontuacaoCarne, {fontSize:'40px', fill:'#bdff00'});
        this.placarBatata = this.add.text(420, 5, ':' + this.pontuacaoBatata, {fontSize:'40px', fill:'#bdff00'});
        this.placarOvo = this.add.text(300, 5, ':' + this.pontuacaoOvo, {fontSize:'40px', fill:'#bdff00'});

        // Cria as batatas em uma posição conveniente na tela de jogo
        this.batata = this.physics.add.sprite(510 - 470, 350, 'batata').setScale(0.08);
        this.batata1 = this.physics.add.sprite(510 - 470, 150, 'batata').setScale(0.08);
        this.batata2 = this.physics.add.sprite(510 - 470, 450, 'batata').setScale(0.08);
        this.batata3 = this.physics.add.sprite(510 - 270, 470, 'batata').setScale(0.08);
        this.batata4 = this.physics.add.sprite(510 - 120, 470, 'batata').setScale(0.08);
        this.batata5 = this.physics.add.sprite(510 - 42, 330, 'batata').setScale(0.08);
        this.batata6 = this.physics.add.sprite(510 - 242, 130, 'batata').setScale(0.08);
        this.batata7 = this.physics.add.sprite(510 - 395, 300, 'batata').setScale(0.08);
        this.batata8 = this.physics.add.sprite(510 - 200, 350, 'batata').setScale(0.08);
        this.batata9 = this.physics.add.sprite(510 - 350, 350, 'batata').setScale(0.08);

        // Cria as carnes em uma posição conveniente na tela de jogo
        this.carne = this.physics.add.sprite(510-470, 300, 'carne').setScale(0.08);
        this.carne1 = this.physics.add.sprite(510-370, 470, 'carne').setScale(0.08);
        this.carne2 = this.physics.add.sprite(510-170, 470, 'carne').setScale(0.08);
        this.carne3 = this.physics.add.sprite(510-42, 430, 'carne').setScale(0.08);
        this.carne4 = this.physics.add.sprite(510-42, 280, 'carne').setScale(0.08);
        this.carne5 = this.physics.add.sprite(510-92, 130, 'carne').setScale(0.08);
        this.carne6 = this.physics.add.sprite(510-192, 130, 'carne').setScale(0.08);
        this.carne7 = this.physics.add.sprite(510-395, 130, 'carne').setScale(0.08);
        this.carne8 = this.physics.add.sprite(510-250, 300, 'carne').setScale(0.08);
        this.carne9 = this.physics.add.sprite(510-300, 350, 'carne').setScale(0.08);

        // Cria os ovos em uma posição conveniente na tela de jogo
        this.ovo = this.physics.add.sprite(510-470, 200, 'ovo').setScale(0.09);
        this.ovo1 = this.physics.add.sprite(510-470, 250, 'ovo').setScale(0.09);
        this.ovo2 = this.physics.add.sprite(510-320, 470, 'ovo').setScale(0.09);
        this.ovo3 = this.physics.add.sprite(510-70, 470, 'ovo').setScale(0.09);
        this.ovo4 = this.physics.add.sprite(510-42, 230, 'ovo').setScale(0.09);
        this.ovo5 = this.physics.add.sprite(510-42, 130, 'ovo').setScale(0.09);
        this.ovo6 = this.physics.add.sprite(510-292, 130, 'ovo').setScale(0.09);
        this.ovo7 = this.physics.add.sprite(510-395, 250, 'ovo').setScale(0.09);
        this.ovo8 = this.physics.add.sprite(510-200, 300, 'ovo').setScale(0.09);
        this.ovo9 = this.physics.add.sprite(510-250, 350, 'ovo').setScale(0.09);


        // Cria os paes em uma posição conveniente na tela de jogo
        this.pao = this.physics.add.sprite(510-470, 400, 'pao').setScale(0.08);
        this.pao1 = this.physics.add.sprite(510-420, 470, 'pao').setScale(0.08);
        this.pao2 = this.physics.add.sprite(510-220, 470, 'pao').setScale(0.08);
        this.pao3 = this.physics.add.sprite(510-42, 380, 'pao').setScale(0.08);
        this.pao4 = this.physics.add.sprite(510-42, 180, 'pao').setScale(0.08);
        this.pao5 = this.physics.add.sprite(510-142, 130, 'pao').setScale(0.08);
        this.pao6 = this.physics.add.sprite(510-342, 130, 'pao').setScale(0.08);
        this.pao7 = this.physics.add.sprite(510-395, 200, 'pao').setScale(0.08);
        this.pao8 = this.physics.add.sprite(510-150, 300, 'pao').setScale(0.08);
        this.pao9 = this.physics.add.sprite(510-150, 350, 'pao').setScale(0.08);

        // Se o jogador pega um ovo, chama a função ColetarAlimento para coletar os ovos e atualizar o placar de ovos
        this.listaOvos = [this.ovo, this.ovo1, this.ovo2, this.ovo3, this.ovo4, this.ovo5, this.ovo6, this.ovo7, this.ovo8, this.ovo9];
        for (let w=0; w<this.listaOvos.length; w++){
            this.physics.add.overlap(this.jogador, this.listaOvos[w], () => {
                this.coletarAlimento(this.listaOvos[w], 'ovo');
            }, null, this);
        }

        // Se o jogador pega uma batata, chama a função ColetarAlimento para coletar as batatas e atualizar o placar de batatas
        this.listaBatatas = [this.batata, this.batata1, this.batata2, this.batata3, this.batata4, this.batata5, this.batata6, this.batata7, this.batata8, this.batata9];
        for (let w=0; w<this.listaBatatas.length; w++){
            this.physics.add.overlap(this.jogador, this.listaBatatas[w], () => {
                this.coletarAlimento(this.listaBatatas[w], 'batata');
            }, null, this);
        }

        // Se o jogador pega uma carne, chama a função ColetarAlimento para coletar as carnes e atualizar o placar de carnes
        this.listaCarnes = [this.carne, this.carne1, this.carne2, this.carne3, this.carne4, this.carne5, this.carne6, this.carne7, this.carne8, this.carne9];
        for (let w=0; w<this.listaCarnes.length; w++){
            this.physics.add.overlap(this.jogador, this.listaCarnes[w], () => {
                this.coletarAlimento(this.listaCarnes[w], 'carne');
            }, null, this);
        }
        
        // Se o jogador pega um pão, chama a função ColetarAlimento para coletar os paes e atualizar o placar de paes
        this.listaPaes = [this.pao, this.pao1, this.pao2, this.pao3, this.pao4, this.pao5, this.pao6, this.pao7, this.pao8, this.pao9];
        for (let w=0; w<this.listaPaes.length; w++){
            this.physics.add.overlap(this.jogador, this.listaPaes[w], () => {
                this.coletarAlimento(this.listaPaes[w], 'pao');
            }, null, this);
        }
        
        // Cria o spritesheet do palhaço
        this.palhaco = this.physics.add.sprite(510 / 1.5, 510 / 3, 'spritesheetPalhaco').setScale(0.72);
        this.palhaco.setCollideWorldBounds(true); // Evita que o palhaço ultrapasse os limites da área do jogo
        // Ajusta a hitbox do palhaço
        this.palhaco.setSize(90, 40);  
        this.palhaco.setOffset(30, 10);  

        this.anims.create({
            key: 'palhaco', // Nome da animação
            frames: this.anims.generateFrameNumbers('spritesheetPalhaco', {start:0, end:2}), //Define os frames que serão usados (start:0 e end:7 definem que serão usados 8 frames presentes no arquivo 'bird' mencionado anteriormente)
            frameRate: 1, // Quantidade de frames em 1 segundo
            repeat: -1 
            // '-1' indica que haverá repetição contínua;
            // '0' indica que não haverá repetição;
            // Um numéro positivo indica a quantidade de repetições.

        })
        this.palhaco.anims.play('palhaco',true); // Inicia a animação do palhaço configurada

        // Cria colisão entre o jogador e todos os obstaculos e entre o palhaço e todos os obstaculos
        this.listaObstaculos = [this.obstEsquerdo, this.obstAcimaDireita, this.obstPequeno, this.obstCentroBaixo, this.obstCentro];
        for (let i=0; i<this.listaObstaculos.length; i++){
            this.physics.add.collider(this.jogador, this.listaObstaculos[i]);
            this.physics.add.collider(this.palhaco, this.listaObstaculos[i]);
        }
        this.physics.add.collider(this.palhaco, this.jogador); // Cria colisão entre o jogador e o palhaço
        this.teclado = this.input.keyboard.createCursorKeys(); // Armazena cliques das teclas 
        this.palhacoSeguindo = true; // Inicia a variável palhaçoSeguindo. Inicialmente "true", pois o palhaço começa seguindo o jogador

        // Se o palhaço pega o jogador, ativa o efeito de gameOver e o usuário perde
        this.physics.add.overlap(this.jogador, this.palhaco, () => {
            this.efeitoGameOver();
        }, null, this);
    }

    update(){
        // Inicia a velocidade do jogador 
        this.velocidadejogador = 150;
        this.jogador.setVelocity(0); // Evitar que a velocidade fique acumulada

        // Se a tecla esquerda estiver pressionada, o jogador se move para a esquerda
        if (this.teclado.left.isDown) {
            this.jogador.setVelocityX(-this.velocidadejogador);
            // Se a tecla direita estiver pressionada, o jogador se move para a direita
        } else if (this.teclado.right.isDown) {
            this.jogador.setVelocityX(this.velocidadejogador);
        }
    
        // Se a tecla de cima estiver pressionada, o jogador se move para cima
        if (this.teclado.up.isDown) {
            this.jogador.setVelocityY(-this.velocidadejogador);
            // Se a tecla de baixo estiver pressionada, o jogador se move para baixo
        } else if (this.teclado.down.isDown) {
            this.jogador.setVelocityY(this.velocidadejogador);
        }
        // Palhaço persegue o jogador com velocidade 80
        if (this.palhacoSeguindo === true){
        this.physics.moveToObject(this.palhaco, this.jogador, 80);}

        // Define os limites de "chão" que o jogador e o palhaço podem estar
        this.bgLeft = this.bg.x - 510 / 2;
        this.bgRight = this.bg.x + 510 / 2;
        this.bgTop = this.bg.y+110 - 510 / 2;
        this.bgBottom = this.bg.y-40 + 510 / 2;
    
        // Evita que o jogador ultrapasse os limites da área de "chão"
        if (this.jogador.x < this.bgLeft) this.jogador.x = this.bgLeft;
        if (this.jogador.x > this.bgRight) this.jogador.x = this.bgRight;
        if (this.jogador.y < this.bgTop) this.jogador.y = this.bgTop;
        if (this.jogador.y > this.bgBottom) this.jogador.y = this.bgBottom;
    
        // Evita que o palhaço ultrapasse os limites da área de "chão"
        if (this.palhaco.x < this.bgLeft) this.palhaco.x = this.bgLeft;
        if (this.palhaco.x > this.bgRight) this.palhaco.x = this.bgRight;
        if (this.palhaco.y < this.bgTop) this.palhaco.y = this.bgTop;
        if (this.palhaco.y > this.bgBottom) this.palhaco.y = this.bgBottom;
    }

    // Função para coletar o alimento e atualizar o placar
    coletarAlimento(alimento, tipo) {
        alimento.setVisible(false); // Torna o alimento invisível
        alimento.body.setEnable(false); // Desativa a hitbox do alimento 
        switch (tipo) {
            // Se o alimento for um pão, atualiza o placar do pão
            case 'pao':
                this.pontuacaoPao += 1;
                this.placarPao.setText(':' + this.pontuacaoPao);
                this.checarVitoria() // Confere se o usuário coletou todos os alimentos
                break;
            // Se o alimento for uma carne, atualiza o placar da carne
            case 'carne':
                this.pontuacaoCarne += 1;
                this.placarCarne.setText(':' + this.pontuacaoCarne);
                this.checarVitoria() // Confere se o usuário coletou todos os alimentos
                break;
            // Se o alimento for um ovo, atualiza o placar do ovo
            case 'ovo':
                this.pontuacaoOvo += 1;
                this.placarOvo.setText(':' + this.pontuacaoOvo);
                this.checarVitoria() // Confere se o usuário coletou todos os alimentos
                break;
            // Se o alimento for uma batata, atualiza o placar da batata
            case 'batata':
                this.pontuacaoBatata += 1;
                this.placarBatata.setText(':' + this.pontuacaoBatata);
                this.checarVitoria() // Confere se o usuário coletou todos os alimentos
                break;
        }
    }
    // Função que ativa um efeito de "Game Over" (perca) quando o palhaço pega o jogador
    efeitoGameOver(){
        this.palhacoSeguindo = false; // O palhaço para de seguir o jogador
        this.palhaco.setVelocity(0); // O palhaço não tem mais velocidade
        this.palhaco.anims.stop(); // Para animação do palhaço
        this.jogador.anims.stop(); // Para animação do jogador
        this.jogador.body.setEnable(false); // Desativa a hitbox do jogador 

        this.bg.setTexture('bgGameOver').setScale(1.0); // Troca o background para um background de gameOver

        // Cria imagens de "X" para representar a anulação do placar e potencializar o "efeito de "Game Over"
        this.xPao = this.add.image(60, 25, 'x').setScale(0.1);
        this.xCarne = this.add.image(190, 25, 'x').setScale(0.1);
        this.xOvo = this.add.image(310, 25, 'x').setScale(0.1);
        this.xBatata = this.add.image(430, 25, 'x').setScale(0.1);

        // Os alimentos que não foram coletados caem da tela para potencializar o "efeito de "Game Over"
        this.listaAlimentos = [this.ovo, this.ovo1, this.ovo2, this.ovo3, this.ovo4, this.ovo5, this.ovo6, this.ovo7, this.ovo8, this.ovo9, this.carne, this.carne1, this.carne2, this.carne3, this.carne4, this.carne5, this.carne6, this.carne7, this.carne8, this.carne9, this.batata, this.batata1, this.batata2, this.batata3, this.batata4, this.batata5, this.batata6, this.batata7, this.batata8, this.batata9, this.pao, this.pao1, this.pao2, this.pao3, this.pao4, this.pao5, this.pao6, this.pao7, this.pao8, this.pao9];
        for (let i=0; i<this.listaAlimentos.length; i++){
            this.listaAlimentos[i].body.setGravityY(150);
        }

        this.palhaco.setTexture('palhacoBravo').setScale(0.1); // Troca o sprite do palhaço para um srite do palhaço com expressão mais brava
        this.jogador.setVisible(false); // Torna o jogador invisível
        this.jogador.setActive(false);  // Desativa o jogador

        // Após 3 segundos e meio, redireciona para a tela de Boas-Vindas
        setTimeout(() => {
            this.scene.start('BoasVindas');
        }, 3500);
    }
    // Função que verifica se todos os alimentos foram coletados
    checarVitoria() {
        if (this.pontuacaoPao === 10 && this.pontuacaoOvo === 10 && this.pontuacaoBatata === 10 && this.pontuacaoCarne === 10) {
            this.scene.start('Vitoria'); // Redireciona para a cena de vitória
        }
    }
}