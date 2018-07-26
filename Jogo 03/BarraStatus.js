function BarraStatus (){
  this.x = 0;
  this.y = 0;
  this.width = 700;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, pontoAtual, pontoMax) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";


  //Texto no Menu
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Pontuação Atual: ", 20, 21);
  ctx.fillText(pontoAtual, 250, 21);
  ctx.fillText("Pontuação Máxima: ", 400, 21);
  ctx.fillText(pontoMax, 620, 21);
};
