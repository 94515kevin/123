let c = ["#A73E2B", "#EAA020", "#E9DEB0", "#789F8A"];


var colors = "8e9aaf-cbc0d3-efd3d7-feeafa-dee2ff".split("-").map(a=>"#"+a)
var line_colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
//宣告一個球的物件，為一個陣列，陣列內可以放很多球的資訊
var balls = [] //所有球的資料內容
var ball
class ball_class{ //宣告一個ball_class物件
  constructor(args){ //描述物件的初始值,只有設定物件的資料內容
    this.p = args.p || {x:width/2,y:height/2} //球的位置
    this.r = args.r || random(50,120) //球的大小
    this.color = args.color || random(colors) //球的顏色，color函數為顏色設定值
    this.v = args.v || {x:random(-2,2),y:random(-2,2)} //球的移動速度
    this.line_colors = args.line_colors || random(line_colors)// 圓的框線顏色
    this.a=args.a || {x:0,y:random(0.7,1.2)}
    this.mode = random(["happy","bad"])
    this.cellW = args.cellW || random(50,120)
    this.cellH = args.cellH || random(50,120)
    this.rotate_num = int(random(6)) * 360 / 6;
  }
  draw(){ //畫出物件的初始值，只有物件的資料內容
    push();
      translate(this.p.x + this.cellW / 2, this.p.y + this.cellH / 2);
      rotate(this.rotate_num);
      drawCircle(0, 0, this.cellW / 1.2);
      pop();
  }
  update(){ //物件更新後移動的程式碼
    // if(this.mode=="happy"){

      this.p.x = this.p.x + this.v.x //x軸
      this.p.y = this.p.y + this.v.y //y軸
      
      //this.p.x = this.p.x + this.v.x //x軸
      //this.p.y = this.p.y + this.v.y //y軸
      //this.v.y = this.v.y + this.a.y 
      //a值為正，this.v.y碰到他時，會變成負值，如果兩數相加，thiss.v.y就會慢慢變
      // this.v.x = this.v.x * 0.99
      //this.v.y = this.v.y * 0.99
      if(this.p.x<0){
        this.v.x=-this.v.x
      }
      if(this.p.x>width){
        this.v.x=-this.v.x
      }
      if(this.p.y<0){
        this.v.y=-this.v.y
      }
      if(this.p.y>height){
        this.v.y=-this.v.y
      }
    }
  }


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  for(i=0;i<100;i=i+1){ //產生多個球資料
    ball = new ball_class({
    v:{x:random(-2,2),y:random(-2,2)},
    p:{x:random(0,width),y:random(0,height)},
    a:{x:0,y:0}
    })
    balls.push(ball)
  }
}

function draw() {
  background(220);
  for(j=0;j<balls.length;j=j+1){
    ball = balls[j]
    ball.draw()
    ball.update()
  }
}
function drawCircle(x, y, d) {
  noStroke();
  fill(random(c));
  circle(x, y, d);

  if (random(100) < 50) {
    if (d > 20) {
      let newd = d / 2;
      drawCircle(x, y + newd / 2, newd);
      drawCircle(x, y - newd / 2, newd);
    }
  } else {

    if (d > 20) {
      let newd = d / 2;
      drawCircle(x + newd / 2, y, newd);
      drawCircle(x - newd / 2, y, newd);
    }
  }
}