
class SceneC extends Phaser.Scene {
    constructor() {
        super({key: "SceneC"});
    } 
    init(data){
        this.data.set('CaloriasP',data);
        this.datos=this.data.get('CaloriasP');
        
    }
    preload(){
        this.load.path='./assets/';
       // this.load.image('fondo','FondoGimnasio.png');
        // this.load.image('monedas','monedas.png');
        this.load.spritesheet('giro','danigirando.png',{frameWidth:170,frameHeight:199});
        this.load.spritesheet('salto','DSP125.png',{frameWidth:120,frameHeight:109});
        this.load.image('tenter','TENTER.png');
        this.load.image('Calortext','calortext.png');
        this.load.image('pulset','PulseT.png')
        this.load.audio('perder','perder.mp3');
        this.load.audio('ganar','ganar.mp3');
        this.calQuemadas=this.datos[1];
        this.monedasObtenidas=this.datos[0];
        this.energiafinal=this.datos[2];
        this.tiempo=this.datos[3];
        this.caloriasAquemar=this.datos[4];

    }
    create(){

        this.Sonidofondo=this.sound.add('fondoau');
        this.fond=this.add.image(this.sys.game.config.width/2,this.sys.game.config.height/2,'fondo');
        this.ball = this.add.image(this.sys.game.config.width/2,this.sys.game.config.height/2,'monedas');
        
        
        this.Sonidoperder=this.sound.add('perder');
        this.Sonidoganar=this.sound.add('ganar');
        this.anims.create({
        key:'saltar',
        frames:this.anims.generateFrameNumbers('salto',{
            frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15]
        }),
        repeat:-1,
        frameRate:20
        });
        this.anims.create({
            key:'girar',
            frames:this.anims.generateFrameNumbers('giro',{
                frames:[7,7,4,5,6,7,7,2,3,0,1,1,1]
            }),
            repeat:0,
            frameRate:3
            });

        this.energia=this.add.text(this.sys.game.config.width/2-10,300,this.calQuemadas,{
            fontFamily:'Arial',
            fontSize: 30,
            color: '#63e',
        });
        console.log(this.calQuemadas)
        if(this.calQuemadas<80){
            if(this.energiafinal<1){
                this.Mensaje1=this.add.text(200,30,'SE TE ACABO LA ENERGIA',{
                    fontFamily:'Arial',
                    fontSize: 30,
                    color: '#f00'
        
                    
                });
                this.add.image(300,450,'pulset').setScale(2);
                

            }else{        
                this.Mensaje=this.add.text(200,30,'NO LOGRASTE EL OBJETIVO :C',{
                fontFamily:'Arial',
                fontSize: 30,
                color: '#f00'
    
                
            });}
        this.Sonidoperder.play();
        this.Sonidofondo.play();
        this.Sonidofondo.totalDuration=20;
        this.salto=this.add.sprite(550,this.sys.game.config.height/2,'salto');
        this.salto.anims.play('saltar');

        }
        else{
            this.Sonidoganar.volume+=0.5;
            this.Sonidoganar.play();
            this.add.text(150,30,'BIEN HECHO!! LOGRASTE EL OBJETIVO ;)',{
                fontFamily:'Arial',
                fontSize: 30,
                color: '#fff',

                
            });
            this.giro=this.add.sprite(550,this.sys.game.config.height/2,'giro').setScale(0.8);
            this.giro.anims.play('girar');
        };
        

        this.add.image(200,320,'Calortext').setScale(0.8);
        this.enter=this.add.image(400,550,'tenter');
        this.input.keyboard.on("keydown_ENTER",()=>{
            this.datos=new Array();
            this.datos[0]=this.monedasObtenidas;
            this.datos[1]=0;
            this.datos[2]=this.energiafinal;
            this.datos[3]=50;
            this.datos[4]=this.caloriasAquemar;
            
        this.Sonidofondo.pause();
            this.scene.start('SceneB',this.datos);

        });
        this.input.keyboard.on("keydown_T",()=>{
            this.datos=new Array();
            this.datos[0]=this.monedasObtenidas;
            this.datos[1]=0;
            this.datos[2]=this.energiafinal;
            this.datos[3]=50;
            this.datos[4]=this.caloriasAquemar;
            this.scene.start('SceneD',this.datos);


        });

        this.programadorT=this.add.text(100,0,'PROGRAMADORES : ',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.programadorN=this.add.text(100,30,'Osmar Postigo Vera',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.desarrolloT=this.add.text(100,60,'DESARROLLADO EN :',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.desarrolloN=this.add.text(100,90,'Phaser',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.programasT=this.add.text(100,120,'PROGRAMAS UTILIZADOS : ',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.programasN=this.add.text(100,150,'Photoshop\n\rExpStudio Audio\n\r',{
            fontFamily:'Arial',
            fontSize: 15,
            color: '#fff'
            
        });
        this.contenedor=this.add.container(500,this.sys.game.config.height);
        this.contenedor.width=100;
        this.contenedor.height=100;
        this.contenedor.backgroundColor= '#ffffff'
        this.contenedor.add([this.desarrolloT,this.desarrolloN,this.programadorT,this.programadorN,this.programasT,this.programasN]);
        let timeline=this.tweens.createTimeline();
        timeline.add(  { 
            targets:this.contenedor,
            y:-600,
            duration:20000
        });
        timeline.play();
    }
}
