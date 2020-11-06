class Hill
{
  constructor(x,y,width,height)
  {
    var options=
        {
      isStatic: true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=130;
    this.height=140;
    World.add(world,this.body);
    
  }
  display()
  {
    var pos = this.body.position;
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
    
  }
};
