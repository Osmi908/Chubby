
const config = {
    scale: {
        title: "CHUBBY TRAINING",
        version: "0.0.1",
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: "container",
        mode: Phaser.Scale.SHOW_ALL,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        pageAlignVertically :true,
        pageAlignHorizontally:true,
    },

    pixelArt: true,
    backgroundColor: '#000000',
    physics: {
      default: "arcade",
      "arcade": {
          gravity: {
              y: 500,
              
          }
      },


},

    scene: [SceneA,SceneB,SceneC,SceneD]
}

var game=new Phaser.Game(config);


