// Define a cena de Boas-Vindas do jogo usando a biblioteca Phaser
class BoasVindas extends Phaser.Scene {
    // Construtor da cena
    constructor() {
        super({ key: 'BoasVindas' });
    }

    // Carrega os arquivos
    preload() {
        this.load.image('telaInicial', 'assets/bgInicio.png');
        this.load.image('play', 'assets/play.png')
        this.load.image('botaoComoJogar', 'assets/botaoComoJogar.png')

    }

    create() {
        // Cria o backgound da tela de Boas-Vindas
        this.add.image(510/2, 510/2, 'telaInicial').setDisplaySize(510, 510);
        // Cria o botão de iniciar o jogo
        const playButton = this.add.image(171, 342, 'play');
        playButton.setInteractive({ useHandCursor: true }); // Torna o botão de iniciar o jogo clicável
        playButton.input.hitArea.setSize(82, 20); // Ajusta a area da hitbox do botão de iniciar o jogo

        // Se o botão de iniciar o jogo for clicado o usuário será redirecionado para a tela da fase
        playButton.on('pointerdown', () => {
            this.scene.start('Fase');
        });
        // Cria o botão de "como jogar"
        const botaoComoJogar = this.add.image(298, 342, 'botaoComoJogar');
        botaoComoJogar.setInteractive({ useHandCursor: true }); // Torna o botão de "como jogar" clicável
        botaoComoJogar.input.hitArea.setSize(172, 18); // Ajusta a area da hitbox do botão de iniciar o jogo

        // Se o botão de "como jogar" for clicado o usuário será redirecionado para a tela "ComoJogar"
        botaoComoJogar.on('pointerdown', () => {
            this.scene.start('ComoJogar'); // Troque 'NextScene' pelo nome da próxima cena
        });

        
    }
}