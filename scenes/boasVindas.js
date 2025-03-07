// Define a cena de Boas-Vindas do jogo usando a biblioteca Phaser
class BoasVindas extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({ key: 'BoasVindas' });
    }

    // Carrega os arquivos
    preload() {
        this.load.image('telaInicial', 'assets/bg/bgInicio.png');
        this.load.image('play', 'assets/botões/play.png')
        this.load.image('comoJogar', 'assets/botões/comoJogar.png')

    }

    create() {
        // Cria o backgound da tela de Boas-Vindas
        this.add.image(510/2, 510/2, 'telaInicial').setDisplaySize(510, 510);
        // Cria o botão de iniciar o jogo
        const playButton = this.add.image(171, 342, 'play');
        playButton.setInteractive({ useHandCursor: true }); // Torna o botão de iniciar o jogo clicável
        playButton.input.hitArea.setSize(82, 20); // Ajusta a área da hitbox do botão de iniciar o jogo

        // Se o botão de iniciar o jogo for clicado o usuário será redirecionado para a tela de fase
        playButton.on('pointerdown', () => {
            this.scene.start('Fase');
        });
        // Cria o botão de "como jogar"
        const comoJogar = this.add.image(298, 342, 'comoJogar');
        comoJogar.setInteractive({ useHandCursor: true }); // Torna o botão de "como jogar" clicável
        comoJogar.input.hitArea.setSize(172, 18); // Ajusta a área da hitbox do botão de iniciar o jogo

        // Se o botão de "como jogar" for clicado o usuário será redirecionado para a tela "ComoJogar"
        comoJogar.on('pointerdown', () => {
            this.scene.start('ComoJogar'); 
        });   
    }
}