class Box{
    constructor(x,y,width,height,options){
        var option1 ={
            isStatic:true
        }

        var option2 ={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,option1,option2)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        push()

        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode (CENTER)
        fill("red")
        restitution:0.8
        rect(0,0,this.width,this.height)
        

        pop()
    }

}