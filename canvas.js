var canvas = document.querySelector('canvas');



canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c =canvas.getContext('2d');
var color = ['red','blue','black','yellow','green']
var strokeStyle =color[Math.floor(Math.random()*color.length)];




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
 else if (this.radius > 4){
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
window.addEventListener("resize", function(){document.getElementsByTagName("canvas")[0].height=window.innerHeight;});