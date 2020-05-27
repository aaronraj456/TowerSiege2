class Box {
   constructor(x,y,width,height){
     var options={
      density:1,
     }

     this.body=Bodies.rectangle(x,y,width,height)
     this.width= width;
     this.height= height;
   }
   display(){
      var pos = this.body.position
      push()
      rect(pos.x,pos.y,this.width,this.height)
      fill("Red")
      pop()
   }


};
