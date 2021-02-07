race=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_1_width=100;
car_1_height=90;
c_image="https://i.postimg.cc/bv5d35nK/racing.jpg"; 
car_image_1="https://starpng.com/public/uploads/preview/blue-race-car-transparent-png-image-101577184086phet3ggxag.png"; 
car_1_x=10;
car_1_y=10;
car_2_width=100;
car_2_height=90;
c_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
car_image_2="https://www.clipartmax.com/png/middle/305-3053210_car-clipart-clipart-transparent-background-race-car-no-background.png"; 
car_2_x=40;
car_2_y=40;

function add() {
    c_image_tag=new Image();
c_image_tag.onload=uploadBackground();
c_image_tag.src=c_image;
car_1_image_tag=new Image();
car_1_image_tag.onload=upload_c1();
car_1_image_tag.src=car_image_1;
car_2_image_tag=new Image(); 
car_2_image_tag.onload=upload_c2();
car_1_image_tag.src=car_image_2;
}
function uploadBackground() {
    ctx.drawImage(c_image_tag, 0, 0, canvas.width, canvas.height );
}
function upload_c1() {
    ctx.drawImage(car_1_image_tag, car_1_x, car_1_y, car_1_width, car_1_height );
    
}
function upload_c2() {
    ctx.drawImage(car_2_image_tag, car_2_x, car_2_y, car_2_width, car_2_height );
    
}
window.addEventListener("keydown", car_1_keydown); 


function car_1_wins() {
    if (car_1_x> 700) {
    document.getElementById("game_status").innerHTML="Car 1 wins!";
} 
}
function car_2_wins() {
    if (car_2_x> 700) {
        document.getElementById("game_status").innerHTML="Car 2 wins!";
    }
}
function car_1_keydown(e) {
    keyPressed = e.keyCode; 
    
    if(keyPressed == '38') { up(); 
     } 
     if(keyPressed == '40') { down(); 
     } 
     if(keyPressed == '37') { left();  
    } 
    if(keyPressed == '39') { right(); 
 }

}
function up() { 
    if(car_1_y >=0)
     { car_1_y = car_1_y - 10; 
      uploadBackground();
       upload_c1(); 
    } 
}
 function down() { 
   
    if(car_1_y <=500) { 
            car_1_y = car_1_y+ 10;  
             uploadBackground();
             upload_c1();
             } 
            }

function left() { 
                 
if(car_1_x >= 0) { 
   car_1_x=car_1_x - 10;
      uploadBackground();
           upload_c1();
             } 
            } 
            

            function right() { 
                 
                if(car_1_x <= 700) { car_1_x =car_1_x + 10; 
                
                uploadBackground();

                 upload_c1; 
            } 
        }
        

        window.addEventListener("keydown", car_2_keydown);

        function car_2_keydown(e) {
            keyPressed = e.keyCode; 
            
            if(keyPressed == '87') { up(); 
             } 
             if(keyPressed == '83') { down(); 
             } 
             if(keyPressed == '65') { left();  
            } 
            if(keyPressed == '68') { right(); 
         }
        
        }
        function up() { 
            if(car_2_y >=0)
             {car_2_y = car_2_y - 10; 
              uploadBackground();
               upload_c1(); 
            } 
        }
         function down() { 
           
            if(car_2_y <=500) { 
                    car_2_y =car_2_y+ 10;  
                     uploadBackground();
                     upload_c1();
                     } 
                    }
        
        function left() { 
                         
        if(car_2_x >= 0) { 
           car_2_x =car_2_x - 10;
              uploadBackground();
                   upload_c1();
                     } 
                    } 

                    function right() { 
                         
                        if(car_2_x <= 700) { car_2_x =car_2_x + 10; 
                        
                        uploadBackground();
        
                         upload_c2; 
                    } 
                }
        