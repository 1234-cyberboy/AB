class Chain{
constructor(bodyA, pointB){
 this.VHS1 = loadImage("sprites/VHS 1.png");
 this.VHS2 = loadImage("sprites/VHS 2.png");
 this.VHS3 = loadImage("sprites/VHS 3.png");
    var options = {
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.5,
     length:10
 }
this.pointB = pointB;
this.chain = Constraint.create(options)
World.add(world, this.chain)

}
FVH(){
 this.chain.bodyA = null; 
}
display(){
    image(this.VSH1, 200,20); 
    image(this.VSH2,170,20);

    if(this.chain.bodyA){
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    
    
}    

}
}

