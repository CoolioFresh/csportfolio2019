/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


drawFace = function(x,y){
    
background(random(225),random(225),random(225));

 //Face   
 fill(random(255),random(225),random(225))
ellipse(x+ 5,y+5,100 , 100);

//Left Eye
fill(random(255),random(225),random(225))
ellipse(x-20, y-10, 20,20);

//Right Eye
fill(random(255),random(225),random(225))
ellipse(x+35, y-10, 20, 20);

//mouth
fill(random(255),random(225),random(225))
rect(x-20,y+30,50,10)

//unibrow
fill(random(255),random(225),random(225))
rect(x-25, y-28,60, 5);


};

mouseClicked = function(){
    drawFace(mouseX, mouseY);
    
}



draw = function() {

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
