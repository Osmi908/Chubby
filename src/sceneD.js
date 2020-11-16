class SceneD extends Phaser.Scene {
    constructor() {
        super({key: "SceneD"});
}
init(data){
    this.data.set('CaloriasP',data);
    this.datos=this.data.get('CaloriasP');

}
preload(){
    this.compra=false;
    this.monedasObtenidas=this.datos[0];
    this.caloriasQuemadas=this.datos[1];
    this.energiafinal=this.datos[2];
    this.segundosiniciales=this.datos[3];
    this.caloriasAquemar=this.datos[4];
    console.log(this.datos);
    this.load.path='./assets/';
    this.load.image('tienda','tienda.png');
    this.load.image('aviso','avisono.png');
    this.load.image('comprado','comprado.png');
}
create(){
    
    const controlw=this.sys.game.config.width/2;
    const controlh=this.sys.game.config.height/2;
    this.add.image(controlw,controlh,'tienda');
    this.monto=this.add.text(50,75,this.monedasObtenidas,{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff'
    });
    this.energias=this.add.text(185,475,this.energiafinal,{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff'
    });
    console.log(this.energias);
    this.callaquem=this.add.text(390,520,this.caloriasAquemar,{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff'
    });
    this.input.keyboard.on("keydown_D",()=>{
        
        if(this.compra){
            this.add.text(100,controlh,"SOLO PUEDE REALIZAR UNA COMPRA",{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff',
        backgroundColor:'#000'
    });
        }else{
            if(this.monedasObtenidas>100){
                this.monedasObtenidas-=100;
                this.energiafinal=100;
                this.caloriasAquemar+=30;
                this.callaquem.setText(this.caloriasAquemar);
                this.energias.setText(this.energiafinal);
                this.monto.setText(this.monedasObtenidas);
                this.add.image(controlw,controlh-100,'comprado');
                this.compra=true;

            }else{
                this.add.image(controlw,controlh-100,'aviso');

            }
        }
        


    });
    if(this.compra){
        
        this.add.text(100,controlh,"SOLO PUEDE REALIZAR UNA COMPRA",{
    fontFamily:'Arial',
    fontSize: 30,
    color: '#fff',
    backgroundColor:'#000'
});
    }else{
    this.input.keyboard.on("keydown_A",()=>{
        if(this.monedasObtenidas>=150){
            this.monedasObtenidas-=150;
            this.energiafinal=100;
            this.caloriasAquemar+=0;
            this.callaquem.setText(this.caloriasAquemar);
            this.energias.setText(this.energiafinal);
            this.monto.setText(this.monedasObtenidas);
            this.add.image(controlw-30,controlh-30,'comprado');
            this.compra=true;

        }else{
            this.add.image(controlw,controlh,'aviso');

        }


    });
};
    this.input.keyboard.on("keydown_M",()=>{
        if(this.compra){
            this.add.text(100,controlh,"SOLO PUEDE REALIZAR UNA COMPRA",{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff',
        backgroundColor:'#000'
    });
        }else{
        
        if(this.monedasObtenidas>60){
            this.monedasObtenidas-=60;
            this.energiafinal+=50;
            this.caloriasAquemar+=10;
            this.callaquem.setText(this.caloriasAquemar);
            this.energias.setText(this.energiafinal);
            this.monto.setText(this.monedasObtenidas);
            this.add.image(controlw,controlh+100,'comprado');
            this.compra=true;

        }else{
            this.add.image(controlw,controlh+100,'aviso');

        }
    }


    });

    
    this.input.keyboard.on("keydown_R",()=>{
        if(this.compra){
            this.add.text(100,controlh,"SOLO PUEDE REALIZAR UNA COMPRA",{
        fontFamily:'Arial',
        fontSize: 30,
        color: '#fff',
        backgroundColor:'#000'
    });
        }else{
        if(this.monedasObtenidas>100){
            this.monedasObtenidas-=100;
            this.energiafinal=100;
            this.caloriasAquemar+=30;
            this.callaquem.setText(this.caloriasAquemar);
            this.energias.setText(this.energiafinal);
            this.monto.setText(this.monedasObtenidas);
            this.add.image(controlw,controlh+50,'comprado');
            this.compra=true;

        }else{
            this.add.image(controlw,controlh+50,'aviso');

        }

    }
    });
    this.input.keyboard.on("keydown_X",()=>{
        this.datos=new Array();
        this.datos[0]=this.monedasObtenidas;
        this.datos[1]=0;
        this.datos[2]=this.energiafinal;
        this.datos[3]=50;
        this.datos[4]=this.caloriasAquemar;
        this.scene.start('SceneB',this.datos);


    });

}
}