class Jett{
    constructor(x,y,w,h){
        this.sprite = createSprite(x,y,w,h);
        
    }
    movimentar(){
        if(keyDown (LEFT_ARROW)){
            this.sprite.x-=3;
        }
        if(keyDown (RIGHT_ARROW)){
            this.sprite.x+=3;
        }
        if(keyDown (UP_ARROW)){
            this.sprite.velocityY=-10;
        }
        this.sprite.velocityY += 0.8;
    }
    display(){

    }
}