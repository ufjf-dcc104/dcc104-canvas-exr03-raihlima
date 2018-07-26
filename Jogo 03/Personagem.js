function Personagem(cor){
  this.x = 30;
  this.y = 30;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 40;
  this.vida=1;
  this.imagem = new Image();
  this.imagem.src = "balao.png";
  //Seleção de color
  if(cor==0){
    this.color = "green";
  } else if(cor==1){
    this.color = "wheat";
  } else {
    this.color = "Teal";
  }
}


Personagem.prototype.resetar = function () {
  this.x = 10;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 40;
  this.vida=1;
};

Personagem.prototype.desenhar = function (ctx) {
//  ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.color == "green"){
    ctx.drawImage(this.imagem,0,0,30,40,this.x,this.y,this.width,this.height);
  } else if(this.color == "wheat"){
    ctx.drawImage(this.imagem,30,0,30,40,this.x,this.y,this.width,this.height);
  } else if(this.color =="Teal"){
    ctx.drawImage(this.imagem,60,0,30,40,this.x,this.y,this.width,this.height);
  }
  //ctx.strokeStyle = "white";
};


Personagem.prototype.atualizar = function (dt) {
  this.vy = this.vy + (gravidade + this.ay+10) * dt;
  this.y = this.y + this.vy * dt;

  if(this.y<30){
    this.y=30;
    this.vy=0;
  }
  if(this.y>500){
    this.vida-=1;
  }
};

Personagem.prototype.colisao =function (base){

  if(((this.x>base.x1)&&(this.x<base.x1+base.width1))||((this.x+this.width>base.x1)&&(this.x+this.width<base.x1+base.width1))){

    if(((this.y>base.y1)&&(this.y<base.y1+base.height1))||((this.y+this.height>base.y1)&&(this.y+this.height<base.y1+base.height1))){
      return true;
    }
  }

  if(((this.x>base.x2)&&(this.x<base.x2+base.width2))||((this.x+this.width>base.x2)&&(this.x+this.width<base.x2+base.width2))){

    if(((this.y>base.y2)&&(this.y<base.y2+base.height2))||((this.y+this.height>base.y2)&&(this.y+this.height<base.y2+base.height2))){
      return true;
    }
  }
return false;
}
