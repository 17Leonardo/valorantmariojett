class Jogo {
    constructor() {
        this.estado = "jogar";
        jett = new Jett(400, 300, 50, 100);
        enemy = new Enemy(950, 360, 50, 100);
    }
    jogar() {
        background("crimson");
        

        jett.movimentar();
        jett.sprite.collide(solo);

        
        //enemy.bounce();
        enemy.display();
        enemy.velocityEnemy();
        enemy.sprite.bounceOff(parede3);
        enemy.sprite.bounceOff(parede4);
        drawSprites();
        camera.x = jett.sprite.x;
        camera.y = jett.sprite.y-100;
    }
    venceu() {

    }

    perdeu() {

    }
}