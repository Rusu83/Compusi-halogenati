var ok=0,alfa=0,sz=50,xt=450,yt=250,moves=[2];
var x=[50],y=[50];
var cl=85,c=75,h=50;

function setup() {
  createCanvas(900,600);
  textAlign(CENTER);
  strokeWeight(5);
}

function draw() {
  background(0,40,40);
  if(ok==0){
    noStroke();
    fill(255,250,150,alfa);
    textSize(50);
    text("Obtinerea compusilor halogenati",450,250);
    alfa=lerp(alfa,255,0.1);
  }
  if(ok==1){
    fill(255,250,150,alfa);
    text("Halogenarea alcanilor",450,250);
    alfa=lerp(alfa,255,0.1);
  }
  if(ok==2){
    sz=lerp(sz,25,0.1);
    yt=lerp(yt,25,0.1);
    textSize(sz);
    text("Halogenarea alcanilor",xt,yt);
  }
  if(ok==3){
    metan();
  }
  if(ok==4)
    metanfinal();
  if(ok==5)
    etilena();
  if(ok==6)
    etilenafinal();
  if(ok==7)
    etilenaH();
  if(ok==8)
    etilenaHfinal();
  if(ok==9)
    acetilena();
  if(ok==10)
    acetilenafinal();
  if(ok==11)
    acetilenaH();
  if(ok==12)
    acetilenaHfinal();
  if(ok==13)
    arene();
  if(ok==14)
    arenefinal();
  if(ok==15)
    galil();
  if(ok==16)
    galilfinal();
  if(ok==17){textSize(100);text("FIN",450,300);}
}

function mousePressed(){
  if(ok==0){ok=1;alfa=0;return 0;}
  if(ok==1){ok=2;return 0;}
  if(ok==2){ok=3;x[0]=150;y[0]=250;x[1]=x[0];y[1]=y[0]-100;x[2]=x[0]+100;y[2]=y[0];x[3]=x[0];y[3]=y[0]+100;x[4]=x[0]-100;y[4]=y[0];x[5]=700;y[5]=200;x[6]=700;y[6]=300;return 0;}
  if(ok==4){ok=5;x[0]=150;y[0]=250;x[1]=x[0];y[1]=y[0]-100;x[2]=x[0]-100;y[2]=y[0];x[3]=x[0];y[3]=y[0]+100;x[4]=x[0]+100;y[4]=y[0];x[5]=x[4];y[5]=y[4]-100;x[6]=x[4]+100;y[6]=y[4];x[7]=x[4];y[7]=y[4]+100;x[8]=700;y[8]=200;x[9]=700;y[9]=300;return 0;}
  if(ok==6){ok=7;x[0]=150;y[0]=250;x[1]=x[0];y[1]=y[0]-100;x[2]=x[0]-100;y[2]=y[0];x[3]=x[0];y[3]=y[0]+100;x[4]=x[0]+100;y[4]=y[0];x[5]=x[4];y[5]=y[4]-100;x[6]=x[4]+100;y[6]=y[4];x[7]=x[4];y[7]=y[4]+100;x[8]=700;y[8]=200;x[9]=700;y[9]=300;return 0;}
  if(ok==8){ok=9;x[0]=150;y[0]=250;x[1]=x[0]+100;y[1]=y[0];x[3]=x[0]-100;y[3]=y[0];x[4]=x[1]+100;y[4]=y[1];x[5]=700;y[5]=200;x[6]=700;y[6]=300;return 0;}
  if(ok==10){ok=11;x[0]=150;y[0]=250;x[1]=x[0]+100;y[1]=y[0];x[3]=x[0]-100;y[3]=y[0];x[4]=x[1]+100;y[4]=y[1];x[5]=700;y[5]=200;x[6]=700;y[6]=300;return 0;}
  if(ok==12){ok=13;x[0]=200;y[0]=200;x[1]=x[0]+100;y[1]=y[0]+100;x[2]=x[1];y[2]=y[1]+100;x[3]=x[2]-100;y[3]=y[2]+100;x[4]=x[3]-100;y[4]=y[3]-100;x[5]=x[4];y[5]=y[4]-100;x[6]=700;y[6]=200;x[7]=700;y[7]=300;x[10]=x[0];y[10]=y[0]-70;x[11]=x[1]+50;y[11]=y[1]-50;x[12]=x[2]+50;y[12]=y[2]+50;x[13]=x[3];y[13]=y[3]+70;x[14]=x[4]-50;y[14]=y[4]+50;x[15]=x[5]-50;y[15]=y[5]-50;return 0;}
  if(ok==14){ok=15;x[0]=150;y[0]=200;x[1]=x[0];y[1]=y[0]-100;x[2]=x[0];y[2]=y[0]+100;x[10]=x[0]+100;y[10]=y[0];x[11]=x[10];y[11]=y[10]+100;x[20]=x[10]+100;y[20]=y[10];x[21]=x[20];y[21]=y[20]-100;x[22]=x[20]+100;y[22]=y[20];x[23]=x[20];y[23]=y[20]+100;x[48]=700;y[48]=200;x[49]=700;y[49]=y[48]+100;return 0;}
  if(ok==16)ok=17;
}

function metan(){
  noStroke();fill(255,250,150);text("Halogenarea alcanilor",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0],x[4],y[4]);
  line(x[5],y[5],x[6],y[6]);
  fill(20);ellipse(x[0],y[0],c);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[3],y[3],h);ellipse(x[4],y[4],h);
  fill(0,255,0);ellipse(x[5],y[5],cl);ellipse(x[6],y[6],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  
  x[1]=lerp(x[1],x[0],0.2);
  y[1]=lerp(y[1],y[0]-100,0.1);
  
  x[2]=lerp(x[2],x[0]+100,0.2);
  y[2]=lerp(y[2],y[0],0.1);
  
  x[3]=lerp(x[3],x[0],0.1);
  y[3]=lerp(y[3],y[0]+100,0.2);
  
  x[4]=lerp(x[4],x[0]-100,0.1);
  y[4]=lerp(y[4],y[0],0.3);
  
  moves=move(x[5],y[5],cl);
  x[5]=moves[0];
  y[5]=moves[1];
  
  x[6]=lerp(x[6],x[5],0.2);
  y[6]=lerp(y[6],y[5]+100,0.1)
  
  if(dist(x[0],y[0],x[5],y[5])<5){
    ok=4;
    
    x[1]=x[0]-50;
    y[1]=y[0]-100;
    
    x[2]=x[0]+100;
    y[2]=y[0];
    
    x[3]=x[0]-50;
    y[3]=y[0]+100;
    
    x[4]=x[0]-100;
    y[4]=y[0];
    
    x[5]=x[6]+50;
    y[5]=y[6];
    
    x[6]+=50;
    y[6]+=100;
  }
}

function metanfinal(){
  noStroke();fill(255,250,150);text("Halogenarea alcanilor",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0],x[4],y[4]);
  line(x[5],y[5],x[6],y[6]);
  fill(20);ellipse(x[0],y[0],c);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[3],y[3],h);ellipse(x[4],y[4],h);ellipse(x[6],y[6],h);
  fill(0,255,0);ellipse(x[2],y[2],cl);ellipse(x[5],y[5],cl);
}

function etilena(){
  noStroke();fill(255,250,150);text("Aditia halogenilor la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0]-15,x[4],y[4]-15);
  line(x[0],y[0]+15,x[4],y[4]+15);
  line(x[4],y[4],x[5],y[5]);
  line(x[4],y[4],x[6],y[6]);
  line(x[4],y[4],x[7],y[7]);
  line(x[8],y[8],x[9],y[9]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[3],y[3],h);ellipse(x[5],y[5],h);ellipse(x[6],y[6],h);ellipse(x[7],y[7],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[4],y[4],c);
  fill(0,255,0);ellipse(x[8],y[8],cl);ellipse(x[9],y[9],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  
  x[1]=lerp(x[1],x[0],0.3);
  y[1]=lerp(y[1],y[0]-100,0.2);
  
  x[2]=lerp(x[2],x[0]-100,0.1);
  y[2]=lerp(y[2],y[0],0.2);
  
  x[3]=lerp(x[3],x[0],0.3);
  y[3]=lerp(y[3],y[0]+100,0.1);
  
  x[4]=lerp(x[4],x[0]+100,0.2);
  y[4]=lerp(y[4],y[0],0.3);
  
  x[5]=lerp(x[5],x[4],0.1);
  y[5]=lerp(y[5],y[4]-100,0.2);

  x[6]=lerp(x[6],x[4]+100,0.3);
  y[6]=lerp(y[6],y[4],0.1);
  
  x[7]=lerp(x[7],x[4],0.2);
  y[7]=lerp(y[7],y[4]+100,0.1);
  
  moves=move(x[8],y[8],cl);
  x[8]=moves[0];
  y[8]=moves[1];
  
  x[9]=lerp(x[9],x[8],0.2);
  y[9]=lerp(y[9],y[8]+100,0.1);
  
  if(dist(x[0],y[0],x[8],y[8])<5){
    ok=6;
    x[1]=x[0];
    y[1]=y[0]-100;
    
    x[2]=x[0]-100;
    y[2]=y[0];
    
    x[3]=x[0];
    y[3]=y[0]+100;
    
    x[4]=x[0]+100;
    y[4]=y[0];
    
    x[5]=x[4];
    y[5]=y[4]-100;
    
    x[6]=x[4]+100;
    y[6]=y[4];
    
    x[7]=x[4];
    y[7]=y[4]+100;
  }
}

function etilenafinal(){
  noStroke();fill(255,250,150);text("Aditia halogenilor la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0]-15,x[4],y[4]-15);
  line(x[0],y[0]+15,x[4],y[4]+15);
  line(x[4],y[4],x[5],y[5]);
  line(x[4],y[4],x[6],y[6]);
  line(x[4],y[4],x[7],y[7]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[6],y[6],h);ellipse(x[5],y[5],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[4],y[4],c);
  fill(0,255,0);ellipse(x[3],y[3],cl);ellipse(x[7],y[7],cl);
}

function etilenaH(){
  noStroke();fill(255,250,150);text("Aditia hidracizilor la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0]-15,x[4],y[4]-15);
  line(x[0],y[0]+15,x[4],y[4]+15);
  line(x[4],y[4],x[5],y[5]);
  line(x[4],y[4],x[6],y[6]);
  line(x[4],y[4],x[7],y[7]);
  line(x[8],y[8],x[9],y[9]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[3],y[3],h);ellipse(x[5],y[5],h);ellipse(x[6],y[6],h);ellipse(x[7],y[7],h);ellipse(x[9],y[9],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[4],y[4],c);
  fill(0,255,0);ellipse(x[8],y[8],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  
  x[1]=lerp(x[1],x[0],0.3);
  y[1]=lerp(y[1],y[0]-100,0.2);
  
  x[2]=lerp(x[2],x[0]-100,0.1);
  y[2]=lerp(y[2],y[0],0.2);
  
  x[3]=lerp(x[3],x[0],0.3);
  y[3]=lerp(y[3],y[0]+100,0.1);
  
  x[4]=lerp(x[4],x[0]+100,0.2);
  y[4]=lerp(y[4],y[0],0.3);
  
  x[5]=lerp(x[5],x[4],0.1);
  y[5]=lerp(y[5],y[4]-100,0.2);

  x[6]=lerp(x[6],x[4]+100,0.3);
  y[6]=lerp(y[6],y[4],0.1);
  
  x[7]=lerp(x[7],x[4],0.2);
  y[7]=lerp(y[7],y[4]+100,0.1);
  
  moves=move(x[8],y[8],cl);
  x[8]=moves[0];
  y[8]=moves[1];
  
  x[9]=lerp(x[9],x[8],0.2);
  y[9]=lerp(y[9],y[8]+100,0.1);
  
  if(dist(x[0],y[0],x[8],y[8])<5){
    ok=8;
    x[1]=x[0];
    y[1]=y[0]-100;
    
    x[2]=x[0]-100;
    y[2]=y[0];
    
    x[3]=x[0];
    y[3]=y[0]+100;
    
    x[4]=x[0]+100;
    y[4]=y[0];
    
    x[5]=x[4];
    y[5]=y[4]-100;
    
    x[6]=x[4]+100;
    y[6]=y[4];
    
    x[7]=x[4];
    y[7]=y[4]+100;
  }
}

function etilenaHfinal(){
  noStroke();fill(255,250,150);text("Aditia hidracizilor la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0],x[3],y[3]);
  line(x[0],y[0]-15,x[4],y[4]-15);
  line(x[0],y[0]+15,x[4],y[4]+15);
  line(x[4],y[4],x[5],y[5]);
  line(x[4],y[4],x[6],y[6]);
  line(x[4],y[4],x[7],y[7]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[3],y[3],h);ellipse(x[5],y[5],h);ellipse(x[7],y[7],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[4],y[4],c);
  fill(0,255,0);ellipse(x[6],y[6],cl);
}

function acetilena(){
  noStroke();fill(255,250,150);text("Aditia halogenilor la alchine",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0]-20,x[1],y[1]-20);
  line(x[0],y[0]+20,x[1],y[1]+20);
  line(x[0],y[0],x[3],y[3]);
  line(x[1],y[1],x[4],y[4]);
  line(x[5],y[5],x[6],y[6]);
  fill(200);ellipse(x[3],y[3],h);ellipse(x[4],y[4],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[1],y[1],c);
  fill(0,255,0);ellipse(x[5],y[5],cl);ellipse(x[6],y[6],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  
  x[1]=lerp(x[1],x[0]+100,0.2);
  y[1]=lerp(y[1],y[0],0.1);
  
  x[3]=lerp(x[3],x[0]-100,0.2);
  y[3]=lerp(y[3],y[0],0.3);
  
  x[4]=lerp(x[4],x[1]+100,0.3);
  y[4]=lerp(y[4],y[1],0.2);
  
  moves=move(x[5],y[5],cl);
  x[5]=moves[0];
  y[5]=moves[1];
  
  x[6]=lerp(x[6],x[5],0.2);
  y[6]=lerp(y[6],y[5]+100,0.4);
  
  if(dist(x[0],y[0],x[5],y[5])<5){
    ok=10;
    x[1]=x[0];
    y[1]=y[0]-100;
    
    x[2]=x[0];
    y[2]=y[0]+100;
    
    x[3]=x[0]+100;
    y[3]=y[0];
    
    x[4]=x[3];
    y[4]=y[3]-100;
    
    x[5]=x[3];
    y[5]=y[3]+100;
  }
}

function acetilenafinal(){
  noStroke();fill(255,250,150);text("Aditia halogenilor la alchine",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[3],y[3],x[0],y[0]);
  line(x[3],y[3],x[4],y[4]);
  line(x[3],y[3],x[5],y[5]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[4],y[4],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[3],y[3],c);
  fill(0,255,0);ellipse(x[2],y[2],cl);ellipse(x[5],y[5],cl);
}

function acetilenaH(){
  noStroke();fill(255,250,150);text("Aditia hidracizilor la alchine",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0]-20,x[1],y[1]-20);
  line(x[0],y[0]+20,x[1],y[1]+20);
  line(x[0],y[0],x[3],y[3]);
  line(x[1],y[1],x[4],y[4]);
  line(x[5],y[5],x[6],y[6]);
  fill(200);ellipse(x[3],y[3],h);ellipse(x[4],y[4],h);ellipse(x[6],y[6],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[1],y[1],c);
  fill(0,255,0);ellipse(x[5],y[5],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  
  x[1]=lerp(x[1],x[0]+100,0.2);
  y[1]=lerp(y[1],y[0],0.1);
  
  x[3]=lerp(x[3],x[0]-100,0.2);
  y[3]=lerp(y[3],y[0],0.3);
  
  x[4]=lerp(x[4],x[1]+100,0.3);
  y[4]=lerp(y[4],y[1],0.2);
  
  moves=move(x[5],y[5],cl);
  x[5]=moves[0];
  y[5]=moves[1];
  
  x[6]=lerp(x[6],x[5],0.2);
  y[6]=lerp(y[6],y[5]+100,0.4);
  
  if(dist(x[0],y[0],x[5],y[5])<5){
    ok=12;
    x[1]=x[0];
    y[1]=y[0]-100;
    
    x[2]=x[0];
    y[2]=y[0]+100;
    
    x[3]=x[0]+100;
    y[3]=y[0];
    
    x[4]=x[3];
    y[4]=y[3]-100;
    
    x[5]=x[3];
    y[5]=y[3]+100;
  }
}

function acetilenaHfinal(){
  noStroke();fill(255,250,150);text("Aditia hidracizilor la alchine",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[3],y[3],x[0],y[0]);
  line(x[3],y[3],x[4],y[4]);
  line(x[3],y[3],x[5],y[5]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[4],y[4],h);ellipse(x[2],y[2],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[3],y[3],c);
  fill(0,255,0);ellipse(x[5],y[5],cl);
}

function arene(){
  noStroke();fill(255,250,150);text("Halogenarea arenelor",xt,yt);
  stroke(255);
  for(i=0;i<6;i++)line(x[i],y[i],x[i+10],y[i+10]);
  line(x[0],y[0],x[1],y[1]);
  line(x[1]-10,y[1],x[2]-10,y[2]);
  line(x[1]+10,y[1],x[2]+10,y[2]);
  line(x[2],y[2],x[3],y[3]);
  line(x[3],y[3]-10,x[4],y[4]-10);
  line(x[3],y[3]+10,x[4],y[4]+10);
  line(x[4],y[4],x[5],y[5]);
  line(x[5],y[5]-10,x[0],y[0]-10);
  line(x[5],y[5]+10,x[0],y[0]+10);
  line(x[6],y[6],x[7],y[7]);
  fill(200);for(i=10;i<16;i++)ellipse(x[i],y[i],h);
  fill(20);for(i=0;i<6;i++)ellipse(x[i],y[i],c);
  fill(0,255,0);ellipse(x[6],y[6],cl);ellipse(x[7],y[7],cl);
  moves=move(x[0],y[0],c);
  x[0]=moves[0];
  y[0]=moves[1];
  x[10]=lerp(x[10],x[0],0.3);
  y[10]=lerp(y[10],y[0]-70,0.2);
  
  x[1]=lerp(x[1],x[0]+100,0.2);
  y[1]=lerp(y[1],y[0]+100,0.1);
  x[11]=lerp(x[11],x[1]+50,0.1);
  y[11]=lerp(y[11],y[1]-50,0.2);
  
  x[2]=lerp(x[2],x[1],0.1);
  y[2]=lerp(y[2],y[1]+100,0.2);
  x[12]=lerp(x[12],x[2]+50,0.2);
  y[12]=lerp(y[12],y[2]+50,0.1);
  
  x[3]=lerp(x[3],x[2]-100,0.3);
  y[3]=lerp(y[3],y[2]+100,0.2);
  x[13]=lerp(x[13],x[3],0.1);
  y[13]=lerp(y[13],y[3]+70,0.2);
  
  x[5]=lerp(x[5],x[0]-100,0.1);
  y[5]=lerp(y[5],y[0]+100,0.3);
  x[15]=lerp(x[15],x[5]-50,0.2);
  y[15]=lerp(y[15],y[5]-50,0.1);
  
  x[4]=lerp(x[4],x[5],0.3);
  y[4]=lerp(y[4],y[5]+100,0.1);
  x[14]=lerp(x[14],x[4]-50,0.2);
  y[14]=lerp(y[14],y[4]+50,0.3);
  
  moves=move(x[6],y[6],cl);
  x[6]=moves[0];
  y[6]=moves[1];
  
  x[7]=lerp(x[7],x[6],0.3);
  y[7]=lerp(y[7],y[6]+100,0.2);
  
  if(dist(x[0],y[0],x[6],y[6])<5){
    ok=14;
    x[1]=x[0]+100;
    y[1]=y[0]+100;
    
    x[2]=x[1];
    y[2]=y[1]+100;
    
    x[3]=x[2]-100;
    y[3]=y[2]+100;
    
    x[4]=x[3]-100;
    y[4]=y[3]-100;
    
    x[5]=x[4];
    y[5]=y[4]-100;
    
    x[6]=x[11]+200;
    y[6]=y[1]+50;
    
    x[7]=x[6];
    y[7]=y[6]+100;
    
    x[10]=x[0];
    y[10]=y[0]-100;
    
    x[11]=x[1]+50;
    y[11]=y[1]-50;
    
    x[12]=x[2]+50;
    y[12]=y[2]+50;
    
    x[13]=x[3];
    y[13]=y[3]+70;
    
    x[14]=x[4]-50;
    y[14]=y[4]+50;
    
    x[15]=x[5]-50;
    y[15]=y[5]-50;
  }
}

function arenefinal(){
  noStroke();fill(255,250,150);text("Halogenarea arenelor",xt,yt);
  stroke(255);
  for(i=0;i<6;i++)line(x[i],y[i],x[i+10],y[i+10]);
  line(x[0],y[0],x[1],y[1]);
  line(x[1]-10,y[1],x[2]-10,y[2]);
  line(x[1]+10,y[1],x[2]+10,y[2]);
  line(x[2],y[2],x[3],y[3]);
  line(x[3],y[3]-10,x[4],y[4]-10);
  line(x[3],y[3]+10,x[4],y[4]+10);
  line(x[4],y[4],x[5],y[5]);
  line(x[5],y[5]-10,x[0],y[0]-10);
  line(x[5],y[5]+10,x[0],y[0]+10);
  line(x[6],y[6],x[7],y[7]);
  fill(200);for(i=11;i<16;i++)ellipse(x[i],y[i],h);ellipse(x[7],y[7],h);
  fill(20);for(i=0;i<6;i++)ellipse(x[i],y[i],c);
  fill(0,255,0);ellipse(x[6],y[6],cl);ellipse(x[10],y[10],cl);
}

function galil(){
  noStroke();fill(255,250,150);text("Substitutia alilica la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0]-10,x[10],y[10]-10);
  line(x[0],y[0]+10,x[10],y[10]+10);
  line(x[10],y[10],x[11],y[11]);
  line(x[10],y[10],x[20],y[20]);
  line(x[20],y[20],x[21],y[21]);
  line(x[20],y[20],x[22],y[22]);
  line(x[20],y[20],x[23],y[23]);
  line(x[48],y[48],x[49],y[49]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[11],y[11],h);ellipse(x[21],y[21],h);ellipse(x[22],y[22],h);ellipse(x[23],y[23],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[10],y[10],c);ellipse(x[20],y[20],c);
  fill(0,255,0);ellipse(x[48],y[48],cl);ellipse(x[49],y[49],cl);
  moves=move(x[10],y[10],c);
  x[10]=moves[0];
  y[10]=moves[1];
  
  x[11]=lerp(x[11],x[10],0.2);
  y[11]=lerp(y[11],y[10]+100,0.1);
  
  x[0]=lerp(x[0],x[10]-100,0.1);
  y[0]=lerp(y[0],y[10],0.2);
  
  x[1]=lerp(x[1],x[0],0.3);
  y[1]=lerp(y[1],y[0]-100,0.1);
  
  x[2]=lerp(x[2],x[0],0.1);
  y[2]=lerp(y[2],y[0]+100,0.3);
  
  x[20]=lerp(x[20],x[10]+100,0.2);
  y[20]=lerp(y[20],y[10],0.4);
  
  x[21]=lerp(x[21],x[20],0.2);
  y[21]=lerp(y[21],y[20]-100,0.1);
  
  x[22]=lerp(x[22],x[20]+100,0.2);
  y[22]=lerp(y[22],y[20],0.3);
  
  x[23]=lerp(x[23],x[20],0.1);
  y[23]=lerp(y[23],y[20]+100,0.3);
  
  moves=move(x[48],y[48],cl);
  x[48]=moves[0];
  y[48]=moves[1];
  
  x[49]=lerp(x[49],x[48],0.2);
  y[49]=lerp(y[49],y[48]+100,0.3);
  
  if(dist(x[10],y[10],x[48],y[48])<5){
    ok=16;
    
    x[1]=x[0];
    y[1]=y[0]-100;
    
    x[2]=x[0];
    y[2]=y[0]+100;
    
    x[10]=x[0]+100;
    y[10]=y[0];
    
    x[11]=x[10];
    y[11]=y[10]+100;
    
    x[20]=x[10]+100;
    y[20]=y[10];
    
    x[21]=x[20];
    y[21]=y[20]-100;
    
    x[22]=x[20]+100;
    y[22]=y[20];
    
    x[23]=x[20];
    y[23]=y[20]+100;
    
    x[48]+=200;
    y[48]+=100;
    
    x[49]=x[48];
    y[49]=y[48]+100;
  }
}

function galilfinal(){
  noStroke();fill(255,250,150);text("Substitutia alilica la alchene",xt,yt);
  stroke(255);
  line(x[0],y[0],x[1],y[1]);
  line(x[0],y[0],x[2],y[2]);
  line(x[0],y[0]-10,x[10],y[10]-10);
  line(x[0],y[0]+10,x[10],y[10]+10);
  line(x[10],y[10],x[11],y[11]);
  line(x[10],y[10],x[20],y[20]);
  line(x[20],y[20],x[21],y[21]);
  line(x[20],y[20],x[22],y[22]);
  line(x[20],y[20],x[23],y[23]);
  line(x[48],y[48],x[49],y[49]);
  fill(200);ellipse(x[1],y[1],h);ellipse(x[2],y[2],h);ellipse(x[11],y[11],h);ellipse(x[49],y[49],h);ellipse(x[22],y[22],h);ellipse(x[23],y[23],h);
  fill(20);ellipse(x[0],y[0],c);ellipse(x[10],y[10],c);ellipse(x[20],y[20],c);
  fill(0,255,0);ellipse(x[48],y[48],cl);ellipse(x[21],y[21],cl);
}

function move(a,b,s){
  noStroke();
  fill(255);
  ellipse(a,b,10);
  if(mouseX>a-s&&mouseX<a+s&&mouseY>b-s&&mouseY<b+s&&mouseIsPressed){
    a=lerp(a,mouseX,0.8);
    b=lerp(b,mouseY,0.8);
  }
  return [a,b];
}
