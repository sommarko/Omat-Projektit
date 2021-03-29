var canvas = document.querySelector('canvas');



canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c =canvas.getContext('2d');
var color = ['red','blue','black','yellow','green']
var strokeStyle =color[Math.floor(Math.random()*color.length)];

// c.fillStyle= "rgba(255,0,0, 0.5)"
// c.fillRect(100,100,100, 100);
// c.fillStyle= "rgba(0,0,255, 0.5)"
// c.fillRect(200,200,100, 100);
// c.fillStyle= "rgba(0,255,0, 0.5)"
// c.fillRect(400,200,100, 100);

// console.log(canvas);

//Line

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle= "#fa34a3";
// c.lineTo(500,600);
// c.lineTo(560,100);


// c.stroke();

// //Arc / Circle
// c.beginPath();
// c.arc(300,300, 30,0, Math.PI*2, false);
// c.strokeStyle='blue';
// c.stroke();

// for (var i = 0; i<100; i++) {
//     var x= Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     c.beginPath();
   
// c.arc(x,y, 30,0, Math.PI*2, false
//     );
//     c.strokeStyle=strokeStyle;
// c.stroke();
// }
//     c.beginPath();

// c.beginPath();
// c.arc(200,200, 30,0, Math.PI*2, false);
// c.strokeStyle=strokeStyle;
// c.stroke();
// var x=Math.random()* innerWidth;
// var y=Math.random()*innerHeight;
// var dx=Math.random()-0.5*10;
// var dy=Math.random()-0.5*10;
// var radius=30;


var mouse={
    X: undefined,
    y: undefined
}
var maxRadius = 40;
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
})


function getRandomNumberBetween(min,max){
    return Math.random()* (max-min)+min;
}


function Circle(x,y,dx,dy,radius,red,green,blue,alpha){
    this.x = x;
    this.y = y;
    this.dx=dx;
    this.dy=dy;
    this.radius =radius;
    this.red =red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius,0, Math.PI*2, false);
        
        c.stroke();
        c.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        c.fill();
    }   
    this.update = function(){
        if(this.x + this.radius> innerWidth || 
            this.x-this.radius<0)
{
    this.dx=-this.dx;
}
if (this.y+this.radius>innerHeight || 
    this.y-this.radius<0)
{
    this.dy=-this.dy;
}
    this.x += this.dx;
    this.y += this.dy;

//interactivity
 if (mouse.x - this.x <50 && mouse.x -this.x >-50
    && mouse.y- this.y < 50 && mouse.y -this.y > -50) {
        if(this.radius < maxRadius)
        {
            this.radius +=1; 
        }
     
 }
 else if (this.radius > 2){
     this.radius -=1;
 }

    this.draw();
}

    

}

var circleArray = [];

for(var i = 0; i<500; i++){
    var radius= Math.round(getRandomNumberBetween(20,40));
    var x=Math.random()* (innerWidth - radius*2) + radius;
    var y=Math.random()* (innerHeight -radius*2) + radius;
    var dx=getRandomNumberBetween(-0.5, 0.5);
    var dy=getRandomNumberBetween(-0.5, 0.5);
    var red = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var alpha = getRandomNumberBetween(0.5, 0.9);
    
    circleArray.push(new Circle(x,y,dx,dy,radius,red,blue,green,alpha));
    
}



console.log(circleArray);




function animate() {
    requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
for(var i = 0; i< circleArray.length; i++)
{
circleArray[i].update();


}

}
animate();
