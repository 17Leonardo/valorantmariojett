var jogo;
var jett;
var solo;
var parede, parededois, parede3, parede4; 
var gruposolo;
var enemy;
var jettimagem;
function preload(){
  jettimagem = loadImage("jett.png");
}

function setup() {
  createCanvas(800,400);
  jogo = new Jogo();

  solo = createSprite(800*2, 400, 800*5, 50);
  parede = createSprite(300, -200, 50, 1200);
  parededois = createSprite(800*4, -200, 50, 1200);
  parede3 = createSprite(800+20, 600, 50, 550);
  parede4 = createSprite(1100, 600, 50, 550);
  parede.visible = false;
  parededois.visible = false;
  gruposolo = new Group();
  gruposolo.add(solo);


}

function draw() {
  if (jogo.estado == "jogar"){
    jogo.jogar();
  }
  jett.sprite.collide(parede);
  jett.sprite.collide(parededois);


}


