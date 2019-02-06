var t,sent="";

function setup() {
  start2();
  t=new logo(400,300,0);
}

function draw() {
  oneRing();
  background(220,0,0);t.set1(width/2,2.5*height/5,0);
   sent=edit_Str(slopexy_N(y,x,n1));
  t.sketch(l1,a1,sent);
  textSize(18);
text(slopexy(y,x),200,50);
text("y slope is " +multvec[0],50,300);	
text("x slope is "+multvec[1],50,320);
text("length is "+multvec[2],50,340);
text("angle is "+multvec[3],50,360);
text("number of cycles is "+multvec[4],50,380);

}
