// Define a cena de Vitória do jogo usando a biblioteca Phaser
class Vitoria extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({
            key: 'Vitoria',
            // Configuração da física do jogo
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
        this.load.image('telaVitoria', 'assets/bg/bgVitoria.png');
        this.load.image('playAgain', 'assets/botões/playAgain.png');
        this.load.image('exit', 'assets/botões/exit.png');
        this.load.spritesheet('spritesheetPlayer', 'assets/spritesheetPlayer.png', {frameWidth: 150, frameHeight: 75});
    }

    create() {
        // Cria o background da tela de vitória
        this.add.image(510/2, 510/2, 'telaVitoria').setDisplaySize(510, 510);

        // Cria o botão de jogar novamente
        const botaoVitoria = this.add.image(212, 342, 'playAgain');

        botaoVitoria.setInteractive({ useHandCursor: true }); // Torna o botão de jogar novamente clicável
        botaoVitoria.input.hitArea.setSize(169, 20); // Ajusta a área da hitbox do botão de jogar novamente

        // Se o botão de jogar novamente for clicado o usuário será redirecionado para a tela de fase
        botaoVitoria.on('pointerdown', () => {
            this.scene.start('Fase'); 
        });

        // Cria o botão de voltar para o menu
        const exit = this.add.image(338, 341, 'exit').setScale(0.73);

        exit.setInteractive({ useHandCursor: true }); // Torna o botão de voltar para o menu clicável
        exit.input.hitArea.setSize(124, 26); // Ajusta a área da hitbox do botão de voltar para o menu

        // Se o botão de jogar novamente for clicado o usuário será redirecionado para a tela de Boas-Vindas
        exit.on('pointerdown', () => {
            this.scene.start('BoasVindas');
        });
    }
}