
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx= canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,500,600);
    
    ctx.fillStyle = "grey";
    ctx.fillRect(20,0,460,600);
    
    ctx.moveTo(35, 0);
    ctx.lineTo(35, 600);
    ctx.strokeStyle="white";
    ctx.lineWidth=14;
    ctx.stroke();
      
    ctx.moveTo(465, 0);
    ctx.lineTo(465, 600);
    ctx.strokeStyle="white";
    ctx.lineWidth=14;
    ctx.stroke();

    ctx.moveTo(250, 0);
    ctx.setLineDash([45,18]);
    ctx.lineTo(250, 600);
    ctx.strokeStyle="white";
    ctx.lineWidth=10;
    ctx.stroke();
  }

};