 var screen = 
        {
        width: 400,
        height: 200,
    };
    
  var  rec = 
        {
        x:40,
        y:40,
        w:40,
        h:40,
        speed:1,
        
        target: {
          x: 0, 
            y: 0,
        },
        
        direction: 
        {
            left: false,
            up: false,
        },
        
        
    };


var box;


function keyPressed()
{
    
    
//     while ( key == 'a' || key == 'A')
//         print('hold');
    
//     if ( key == 'a' || key == 'A')
//     rec.direction.left = true;
//    else if ( key == 'd' || key == 'D')
//        rec.direction.left = false;
//    else if ( key == 's' || key == 'S')
//        rec.direction.up = false;
//    else if ( key == 'w' || key == 'W')
//        rec.direction.up = true;
//     else if ( keyCode === SHIFT)
//       print('sift');
    
}

function keyReleased()
{
    return false;
}

function keyIsDown()
{
    
}


function setup() {
  // put setup code here
    createCanvas(screen.width,screen.height);
    background(0);
  
    
    rec.x = random(0,screen.width);
    rec.y = random(0,screen.height);
    
    if ( rec.y < screen.height / 2 )
        rec.direction.up = true;
    else
        rec.direction.up = false;
    
    if ( rec.x < screen.width / 2 )
        rec.direction.left = true;
    else
        rec.direction.left = false;
    
}

   
function draw() {
  // put drawing code here
    
     
   document.getElementById('a').innerHTML = "Hello " + rec.x;
    
   
    
    
    if ( keyIsDown(65))
        rec.direction.left = true;
    else if ( keyIsDown(68))
        rec.direction.left = false;
    else if ( keyIsDown(83))
        rec.direction.up = false;
    else if ( keyIsDown(87))
        rec.direction.up = true;
    else if ( keyIsDown(32)) {
          rec.speed += 0.1;
//        print(rec.speed);
    }
      
    
    rect(rec.x,rec.y,rec.w,rec.h);
   
    
    if ( rec.x + rec.w > screen.width && !rec.direction.left )
    {
        rec.direction.left = true;
    }
    else if ( rec.x < 0 && rec.direction.left ) {
        rec.direction.left = false;
    }
    
    if (rec.direction.left) {
        rec.x -= rec.speed ;
    }
    else {
         rec.x  += rec.speed
    }
    
    if ( rec.y < 0 && rec.direction.up) {
        rec.direction.up = false;
    } else if ( rec.y + rec.h > screen.height ) {
        rec.direction.up = true;
    }
    
    
    if ( rec.direction.up) {
        rec.y  -= rec.speed;
    } else {
        rec.y  += rec.speed;
    }

}