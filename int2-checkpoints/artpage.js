/* global draw ellipse rect p triangle fill stroke background processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(0,0,0);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var topcolorred = 0;
        var topcolorgreen = 56;
        var topcolorblue = 168;

        var bottomcolorred = 206;
        var bottomcolorgreen = 17;
        var bottomcolorblue = 38;

        drawRosa = function(x, y) {

            for (var i = 125; i < width; i += 30) {
                fill(175, 163, 102); 
                ellipse(i, 300, 30, 30);

            }
            
            fill(0, 0, 0);
            rect(80, 295, 35, 10);

            fill(175, 163, 102);
            ellipse(80, 300, 30, 30);

            fill(0, 0, 0)
            rect(40, 295, 35, 10);


            fill(175, 163, 102);
            ellipse(40, 300, 30, 30);

            fill(175, 163, 102);
            ellipse(10, 300, 30, 30);
        };

        mouseClicked = function() {
            drawRosa(mouseX, mouseY);

            if (topcolorred < 5 ) {
                
                
                topcolorred = 206;
                topcolorgreen= 17;
                 topcolorblue= 38;  
                 
                 bottomcolorred = 0;
                 bottomcolorgreen = 56;
                 bottomcolorblue= 168;
                
            }
            
            else{
            
                topcolorred = 0;
                
                topcolorgreen= 56;
                
                 topcolorblue= 168;
                 
                 bottomcolorred = 206;      
                 bottomcolorgreen = 17;
                 bottomcolorblue= 38;
                
            }
        }




        draw = function() {


            // top flag
            stroke(0, 0, 0);
            fill(topcolorred, topcolorgreen, topcolorblue);
            rect(0, 25, 350, 110);
            //bottom flag
            stroke(0, 0, 0);
            fill(bottomcolorred, bottomcolorgreen, bottomcolorblue);
            rect(0, 136, 350, 113);

            //triangle
            stroke(0, 0, 0);
            fill(255, 255, 255);
            triangle(0, 25, 0, 250, 145.5, 135.5);

            //main star
            fill(252, 209, 22);

            stroke(252, 209, 22);

            ellipse(55, 135, 45, 45);

            rect(50, 105, 10, 60);

            rect(25, 130, 60, 10);

            //top star
            triangle(34, 77.5, 15, 63.75, 22, 45);
            triangle(17.75, 56, 10, 77.5, 38.75, 56);
            triangle(26.25, 56, 34, 77.5, 5.25, 56);

            //bottom star
            triangle(34, 217.5, 15, 203.75, 22, 185);
            triangle(17.75, 196, 10, 217.5, 38.75, 196);                                
            triangle(26.25, 196, 34, 217.5, 5.25, 196);

            //right star
            triangle(124, 147.5, 105, 133.75, 112, 115);
            triangle(107.75, 126, 100, 147.5, 128.75, 126);
            triangle(116.25, 126, 124, 147.5, 95.25, 126);




        };





        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("flag"), sketch);
