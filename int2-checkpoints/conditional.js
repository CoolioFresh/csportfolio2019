
/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

frameRate(100)
        draw = function() {

            // If true will make blue rectangles
            if (mouseX > 200){
                fill(66, 244, 244);
                strokeWeight(3);
                stroke(57, 0, 14)
                rect(mouseX, mouseY, 30, 30)
            }
            // If that is not true it will make red rectangles
            else {
                fill(242, 55, 220);
                strokeWeight(2);
                stroke(57, 20, 14);
                ellipse(mouseX, mouseY, 30, 30)

            }
            
             if (mouseY > 200) {
                fill(40, 168, 93);
                strokeWeight(2);
                stroke(57, 20, 14);
                rect(mouseX, mouseY, 30, 30)
             }
             
             if (mouseY > 200)
             if (mouseX > 200){
                fill(168, 125, 40);
                strokeWeight(2);
                stroke(57, 20, 14);
                ellipse(mouseX, mouseY, 30, 30)
             }
            
             
        };
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);