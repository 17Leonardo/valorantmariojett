class Enemy{
    constructor(x,y,w,h,vX){
        this.sprite = createSprite(x,y,w,h)
        this.vX = vX
    }
    //bounce(parede3, enemy){
    //    this.collide(parede3, enemy);
   // }

    //bounce(parede4, enemy){
       // this.collide(parede4, enemy);
    //}
        
    velocityEnemy(){
        this.sprite.velocityX = -0.4
    }

    display(){
        if (enemy.touching(parede3)){
            enemy.velocityX = 5
        }
    }
}