// Define a cena de como jogar do jogo usando a biblioteca Phaser
class ComoJogar extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({ key: 'ComoJogar' });
    }

    // Carrega os arquivos
    preload() {
        this.load.image('comoJogar', 'assets/ComoJogar.png');
        this.load.image('main', 'assets/main.png');
    }

    create() {
        // Cria o background da tela de como jogar
        this.add.image(510/2, 510/2, 'comoJogar').setDisplaySize(510, 510);

        // Cria o botão de voltar 
        const main = this.add.image(355, 335, 'main').setScale(0.11);
        main.setInteractive({ useHandCursor: true }); // Torna o botão de voltar clicável
        main.input.hitArea.setSize(462, 226); // Ajusta a hitbox do botão de voltar

        // Se o botão de voltar for clicado, o usuário será redirecionado para a tela de Boas-Vindas
        main.on('pointerdown', () => {
            this.scene.start('BoasVindas');
        });
    }
}