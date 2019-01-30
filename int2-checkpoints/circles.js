/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2; 
var xPos2 = 200;
var yPos2 = 25;
draw = function() {
    
    // draws red circles diagonally from upper left to lower right.
    strokeWeight(10 );
    stroke(244, 66, 107);
    fill(99, 20, 3);
   ellipse(xPos,yPos,30,30);
   xPos = xPos + 25;
   yPos = yPos + 25;
   
   // draws red circles diagonally from upper left to lower right.
    strokeWeight(weight);
    stroke(56, 244, 225);
    fill(224, 6, 217);
   ellipse(height-xPos,yPos,30,30);
   
       // draws red circles diagonally from upper left to lower right.
    strokeWeight(15 );
    stroke(255, 242, 173);
    fill(142, 139, 124);
   ellipse(xPos2,yPos2,30,30);
    
   yPos2 = yPos2 + 25;
  

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
