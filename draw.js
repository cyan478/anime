var c = document.getElementById('slate');
ctx = c.getContext('2d');
ctx.fillStyle = '#FF0000';

var rid;


var animateDot = function(){
    var x = 1;
    stopIt();
    var bool = true //true = growing / false = shrinking

    var drawDot = function(){
        if (x == c.width/2) bool = false;
        if (x == 1) bool = true;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();    
        ctx.arc( c.width / 2, c.height / 2, x, 0, 2*Math.PI);
        ctx.fill();
        if (bool == true) x++;
        if (bool == false) x--;
        rid = window.requestAnimationFrame( drawDot );
        //console.log(bool);
        //console.log(x);
    }
    drawDot();
};


var dvdimg = new Image()
dvdimg.src = "pic.png"

var animateDVD = function(){
    var dx = 1;
    var dy = 1;
    var x = Math.random() * c.width;
    var y = Math.random() * c.height;
    while ((x + 150) > c.width) 
        x = Math.round(Math.random() * c.width);
    while ((y + 100) > c.height) 
        y = Math.round(Math.random() * c.height);
    
    window.cancelAnimationFrame(rid);

    var drawDVD = function(){
        ctx.clearRect( 0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.drawImage(dvdimg,x,y,100,50);       
        if(x <= 0 || x + 100 >= c.width) dx *= -1;
        if(y <= 0 || y + 50 >= c.height) dy *= -1;
        x += dx;
        y += dy;
        rid = requestAnimationFrame( drawDVD );
    }
    drawDVD();
}

var stopIt = function(e){    
    window.cancelAnimationFrame( rid ); 
};

var cir = document.getElementById('circBut');
cir.addEventListener('click', animateDot);

var dvd = document.getElementById('dvdBut');
dvd.addEventListener('click', animateDVD);
    
var stop = document.getElementById('stopBut')
stop.addEventListener('click', stopIt );

c.addEventListener('click', function(){
    animateDot();
} );
//draw()
rid = window.requestAnimationFrame( animateDot )