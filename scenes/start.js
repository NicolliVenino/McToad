// Definindo a cena de boas-vindas usando a biblioteca Phaser
class Welcome extends Phaser.Scene {

    // Construtor da cena
    constructor() {
        super({
            key: 'Welcome',
            backgroundColor: '#000', // Configuração da cor de fundo da cena
        });
    }

    // Pré-carregamento de recursos
    preload() {
        this.load.image(100, 100, 'batata').setScale(1.0);
    }

    // Função chamada quando a cena é criada
    create() {
        this.add.image('batata', '/assets/batata.png');
}
}