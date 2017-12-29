
   var can=document.getElementById('canvas');
   if(can.getContext){
    var ctx=can.getContext('2d');
    function random(min,max){
       return parseInt(Math.random()*(max-min)+min);
    }

    function randomHexColor() { //随机生成十六进制颜色
      var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
      while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
       hex = '0' + hex;
      }
      return '#' + hex; //返回‘#'开头16进制颜色
     }
    
    function AnimationClass(){
      this.x=random(0,can.width);
      this.y=0;
      this.speed=random(1,6);
      this.radius=random(1,5);
      this.color=randomHexColor();
      this.startAngle=0;
      this.endAngle=Math.PI*2;
    }
    
    AnimationClass.prototype.draw=function (){
       ctx.save();
       ctx.fillStyle=this.color;
       ctx.beginPath();
       ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);
       ctx.fill();
       ctx.restore();
       this.sport();
    }
 
    AnimationClass.prototype.sport=function (){
        this.y+=this.speed;
    }
    
    var drawArr=[];
    function show(){
       can.height=can.height;
       var A=new AnimationClass();
       drawArr.push(A);
       for(var i in drawArr){
         drawArr[i].draw();
       }
       requestAnimationFrame(show);//循环调用  
    }
    show();
   }
  