class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,pointB:point2,stiffness:0.04,length:10

        }

this.pointB=point2

        this.slingshot=Matter.Constraint.create(options)
       World.add(world,this.slingshot)
    
    }

fly(){
    this.slingshot.bodyA=null
}

    display(){
        if(this.slingshot.bodyA){

        
        var pointA=this.slingshot.bodyA.position
        var pointB=this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       }   }
}