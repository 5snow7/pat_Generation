let inp1;let multvec=[];
let par0,sl0;let par1,sl1;
let par2,sl2;let par3,sl3;let par4,sl4;
x=47,y=133,l1=60,a1=135,n1=5;
let can;

function start2(){
can=createCanvas(800, 500);
 can.class('bdd');

multvec=[132,45,25,120,4];

inp1=createInput("y-sl,x-sl,len,angle,num");inp1.class('bdd');
inp1.position(900,50);
inp1.changed(chglev1);

par0=createP("y-slope");par0.position(900,100);
par0.id('p0');par0.class('parbdd');
sl0=createSlider(0,150,50,1);
sl0.parent('p0');sl0.mousePressed(chgmult0);

par1=createP("x-slope");par1.position(900,210);
par1.id('p1');par1.class('parbdd');
sl1=createSlider(0,150,50,1);
sl1.parent('p1');sl1.mousePressed(chgmult1);

par2=createP("length");par2.position(900,320);
par2.id('p2');par2.class('parbdd');
sl2=createSlider(0,100,30,1);
sl2.parent('p2');sl2.mousePressed(chgmult2);

par3=createP("angle");par3.position(900,430);
par3.id('p3');par3.class('parbdd');
sl3=createSlider(0,180,50,1);
sl3.parent('p3');sl3.mousePressed(chgmult3);

par4=createP("number of cycles");par4.position(900,540);
par4.id('p4');par4.class('parbdd');
sl4=createSlider(0,10,4,1);
sl4.parent('p4');sl4.mousePressed(chgmult4);


}

function chglev1(){
let mult=inp1.value();
multvec=mult.split(',').map(n=>floor(n));
//for(let j=0;j<5;j++){
//multvec[j]=	mult.split(',').map(n => floor(n))[j];
//}
}

function chgmult0(){
multvec[0]=sl0.value();
}

function chgmult1(){
multvec[1]=sl1.value();
}
function chgmult2(){
multvec[2]=sl2.value();
}
function chgmult3(){
multvec[3]=sl3.value();
}
function chgmult4(){
multvec[4]=sl4.value();
}

function oneRing(){
y=multvec[0];x=multvec[1];	
l1=multvec[2];a1=multvec[3];
n1=multvec[4];
}

