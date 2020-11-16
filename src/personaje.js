class Personaje extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //especificar que este cuerpo es inamovible
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
      
        this.body.setSize(100,100).setOffset(100,100);
      // frameWidth:372,frameHeight:435
    }
}
