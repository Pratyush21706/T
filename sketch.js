 var alphabets =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var a =1,i,i2,code;
  let  button2
    var y = 0
var x = 1,e,f;
var uN;
var msg;
var b = 0;
var rcb;
var bc;
var uN1,val,rnm;
var work = 0;
var div1,div2,div3,div4,rcp,rc,rcd,cpl,roomName,enterbutton,yes = false;
var ms;
var variable= `Hi`;
function preload(){
homebg = loadImage("new.png")
}
function setup(){
 let canvas;
    canvas = createCanvas(window.innerWidth,window.innerHeight)
        background(homebg)
    canvas.position(0,0);
    var firebaseConfig = {
    apiKey: "AIzaSyBnNj8bNh5QHXSRxRdxoAlgmrPEA-nFUjw",
    authDomain: "chat-56398.firebaseapp.com",
    databaseURL: "https://chat-56398.firebaseio.com",
    projectId: "chat-56398",
    storageBucket: "chat-56398.appspot.com",
    messagingSenderId: "291372313538",
    appId: "1:291372313538:web:60f67a12d7fdb59745045b"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();
    
      
    button = createButton(`Create Room`);
    button.addClass(`host`);
    button.position(width/22,height/1.255)
    button.mousePressed( createR);
    
    input1 = createInput(``).attribute(`placeholder`,`  Room code`, `maxlength`, `four`)
    input1.position(width/1.975,height/1.255)
    input1.addClass('join')
    
     i = Math.round(random(0,25))
         i2 = Math.round(random(0,25))
 code = alphabets[i]+Math.round(random(10,90))+alphabets[i2]+Math.round(random(0,9))
 chatbox = createDiv().addClass(`cbx`);
    
    bg = createImg(`bg.png`,`background`);
 bg.addClass(`bbgg`)
    bg.position(0,-4567890);
    
      div3 = createDiv('')
        div3.addClass(`header`);
    div3.position(22,-4444)
 
     div5 = createDiv('')
        div5.addClass(`footer`);
    div5.position(0,-123456789)
    
      div4 = createDiv('')
        div4.addClass(`bg`);
        div4.position(0,-34567)
        
        msg = createInput(``).attribute(`placeholder`,`  Type your message here`)
 msg.addClass('text')
        msg.position(232,-45678);
    
    
     button2 = createButton(``);
            button2.attribute('disabled', '');
    button2.position(0,-4567);
         
}
createR = function(){
 

    if(a===1){
        yes = true;
        div1 = createDiv('')
        div1.addClass(`bgdiv`);
        div1.position(0,0);
        div = createDiv('')
        div.addClass(`popup`)
        div.position(width/20,height/4)
        rcp = createP('Room has been successfully created')
        rcp.position(width/9,height/2.1)
        rcp.addClass(`p1`)
         rc = createP('is your room code')
        rc.position(width/2.5,height/1.9)
        rc.addClass(`p1`)
                 rcd = createP(code);
        rcd.position(width/3.83,height/1.98)
        rcd.addClass(`p2`)
        cpl = createImg(`cpl.png`,`Successful`);
        cpl.position(width/3.5,height/3.7);
        cpl.addClass(`cpl`)
            roomName = createInput(``).attribute(`placeholder`,` Give your room a cool name`)
       roomName.position(width/7.75,height/1.6)
        roomName.addClass('ip')
        
        enterbutton = createButton(`Go`);
    enterbutton.addClass(`enter`);
    enterbutton.position(width/1.18,height/1.45)
    enterbutton.mousePressed(check1)
        
         chatbox = createDiv().addClass(`cbx`);
    chatbox.position(15,-999)
        
    }
}
function banao(){
    a=2;
    if(a===2){

console.log(code)

    }
}
function finished(error) {
  if (error) {
   alert(`Plz check your internet connection`)
     
  } else {
//           alert(`Room Created Successfully`)        
       
  }
}


function startChat1(){
 resizeCanvas(0,0);
     work++;
        bg.position(0,0);
       
    background("black")
      var refo = database.ref(rcb);
refo.on("value", abcData, errData);
//    msg.value()="ram";
if(yes){
           div1.position(232,-3456789);
        div.position(width/20,-3456734567)
        rcp.position(width/3.83,-3456734567)
        cpl.position(width/3.5,-3456734567);
       roomName.position(width/7.75,-3456734567)
    enterbutton.position(width/1.18,-3456734567)
      rc.position(width/3.83,-3456734567)
          rcd.position(width/10,-555);
}
    button.position(8380,-3334)
    input1.position(8380,-3334)
         
    console.log(work)
       if(work==13){ 
console.log("djlkasjdlaksjdakls")
           div4.position(window.innerWidth/1.135,window.innerHeight/1.08);
           div3.position(0,0);
    
        div5.position(0,window.innerHeight/1.085);
        x = 2;

    button2.position(window.innerWidth/1.12,div4.y+5)
                 msg.position(10,window.innerHeight/1.075)
               }
                         button2.addClass(`44224`);
    backButton  = createButton(`< Back`);
       backButton .position(window.innerWidth/30,15);
    backButton.addClass(`back`)
    backButton.style(` background`,` #fff`)
        backButton.style(` font-size`,`30px`)
         backButton.style(`color`, `#34B7F1`)
         backButton.style(`outline`, `0px`);
         backButton.style(`border`, `none`);
      backButton.style(`margin-top`,` 3px`)

     if(keyIsDown(ENTER)){
    console.log("hhhh");
    addText1();
}

    if(yes){
            let nme = roomName.value();
    groupName = createP(nme);
//        groupName.position(window.innerWidth/3,-8    font-: sans-serif;

    groupName.addClass(`pp`)
        groupName.style(`font-size`,`20px`);
                groupName.style(`font-weight`,`550`);
                        groupName.style(`font-family`,`sans-serif`);


    if(roomName.value().length>0&&roomName.value().length<6){
        console.log("pA")
              groupName.position(window.innerWidth/2.5,-8)
    }
         if(roomName.value().length>=6&&roomName.value().length<8){
        console.log("pB")
              groupName.position(window.innerWidth/2.7,-8)
    }
    if(roomName.value().length>=8&&roomName.value().length<10){
        console.log("pc")
              groupName.position(window.innerWidth/2.9,-8)
    }
        if(roomName.value().length>=10&&roomName.value().length<12){
        console.log("pD")
              groupName.position(window.innerWidth/3.15,-8)
    }
         if(roomName.value().length>=12&&roomName.value().length<15){
        console.log("pE")
              groupName.position(window.innerWidth/3.45,-8)
    }
        
        if(roomName.value().length==15){
        console.log("pf")
              groupName.position(window.innerWidth/3.9,-8)
    }
    button2.mousePressed(addText1)
            groupName.style(`color`,`black`)
             groupcode = createP("Your room code is: "+code);
            if(roomName.value().length>0&&roomName.value().length<6){
        console.log("pA")
              groupName.position(window.innerWidth/2.5,-8)
    }
         if(roomName.value().length>=6&&roomName.value().length<8){
        console.log("pB")
              groupName.position(window.innerWidth/2.7,-8)
    }
    if(roomName.value().length>=8&&roomName.value().length<10){
        console.log("pc")
              groupName.position(window.innerWidth/2.9,-8)
    }
        if(roomName.value().length>=10&&roomName.value().length<12){
        console.log("pD")
              groupName.position(window.innerWidth/3.15,-8)
    }
         if(roomName.value().length>=12&&roomName.value().length<15){
        console.log("pE")
              groupName.position(window.innerWidth/3.45,-8)
    }
        
        if(roomName.value().length==15){
        console.log("pf")
              groupName.position(window.innerWidth/3.9,-8)
    }
    groupcode.position(window.innerWidth/3.5,18)
    groupcode.addClass(`pp01`)
    groupcode.style(`color`,`blavk`)
      
}
if (yes===false){
//    let nme = input1.value();
    groupName = createP(rnm);
    groupName.position(window.innerWidth/3,-10)
    groupName.addClass(`pp`)
    button2.mousePressed(addText1)
    groupName.style(`color`,`black`)
     groupcode = createP("Your room code is: "+rcb);
    groupcode.position(window.innerWidth/3.5,18)
    groupcode.addClass(`pp01`)
    groupcode.style(`color`,`blavk`)
    groupName.addClass(`pp`)
        groupName.style(`font-size`,`20px`);
                groupName.style(`font-weight`,`550`);
                        groupName.style(`font-family`,`sans-serif`);
    if(roomName.value().length>0&&roomName.value().length<6){
        console.log("pA")
              groupName.position(window.innerWidth/2.5,-8)
    }
         if(roomName.value().length>=6&&roomName.value().length<8){
        console.log("pB")
              groupName.position(window.innerWidth/2.7,-8)
    }
    if(roomName.value().length>=8&&roomName.value().length<10){
        console.log("pc")
              groupName.position(window.innerWidth/2.9,-8)
    }
        if(roomName.value().length>=10&&roomName.value().length<12){
        console.log("pD")
              groupName.position(window.innerWidth/3.15,-8)
    }
         if(roomName.value().length>=12&&roomName.value().length<15){
        console.log("pE")
              groupName.position(window.innerWidth/3.45,-8)
    }
        
}


}
function draw(){
   
    if(frameCount%1===0){
        b = 0;
    }
    if(x===2){
    let mmsg = msg.value().length;
           if(msg.value().length>0){
        button2.removeAttribute('disabled');
                   button2.addClass(`message`);
                             button2.removeClass('dis')
               console.log("fsjhfj")
          }
          if(mmsg===0){
                         button2.removeClass(`message`);
              button2.addClass('dis')
button2.attribute('disabled', '');

   }
        
    }
    if(x===1){
           if(input1.value().length==5){ 
               check();
               
        }
    }
}
check = function(){
    rcb = input1.value();
        console.log(rcb);
  var refe = database.ref(rcb);
refe.on("value", gotData, errData);
    
}
check1 = function(){
    rcb = code;
        console.log(rcb);
  var refe = database.ref(rcb);
refe.on("value", gotData, errData);
     var data ={
           Code : code,  
         Name : roomName.value()
}
database.ref(code).push(data,finished);
  console.log("send called");
}
function gtData(data){
  let info = data.val();
var keys = Object.keys(info)
var k = keys[0]
 bc= info[k].Code;
    
    console.log("Code returned: "+bc)
    if(bc==rcb){
    startChat();
        
    }
}
function gotData(data){
  let info = data.val();
var keys = Object.keys(info)
var k = keys[0]
 bc= info[k].Code;
    rnm = info[k].Name;
//    console.log("Code returned: "+rmm)
    if(bc==rcb){
    startChat1();
       
    }
}

addText1 = function(){

     ms = msg.value();  
          var message ={
msg: ms
}
          console.log(ms);
database.ref(rcb).push(message,finished);
    
     var refo = database.ref(rcb);
refo.on("value", abcData, errData);

}

function askData(data){
    b++
  let info = data.val();
var keys = Object.keys(info)
for(let i =1; i<keys.length; i++){
var k = keys[i]
}
    console.log("i am ask")
uN = info[k].msg;
//        console.log(data)
   if(b===2){
        recivedText1();
   }
    console.log(ms)
   if(uN==variable){
console.log("jflshdfhsdjkfhsdkfhskdfhskdfhsdkjfhsdkjfdsadasdasdasd")
   }
            console.log("Message: "+uN+"ui: "+variable)
   
}

//n20c6
function abcData(data){
//         y++
//    console.log(y)
        console.log("i am abc")

  let info = data.val();
var keys = Object.keys(info)
for(let i =1; i<keys.length; i++){
var k = keys[i]
}
uN1 = info[k].msg;
//        console.log(data)
//    if(b==1){
        console.log(b)
     b++
    if(uN1==ms){
 if(b===2){
        recivedText1();
                 console.log("aapna")

   }
    }else{
        if(b===2){
               recivedText1b(); 
            console.log("aapna")
        }
    }
            console.log("Message1: "+uN1+" ui: "+val)
    
}
recivedText = function(){

      para1 = createP(uN);
       para1.parent("txtScreen");
    let objDiv = document.getElementById("txtScreen");
    objDiv.scrollTop = objDiv.scrollHeight;
    
 para1.addClass(`msg`);
   
}

recivedText1 = function(){
 
      para2 = createP(uN1);
       para2.parent("txtScreen");
    let objDiv = document.getElementById("txtScreen");
    objDiv.scrollTop = objDiv.scrollHeight;
    
 para2.addClass(`msg`);
   
}
function errData(err){
console.log("error: "+err)
    console.log("dljdjwkdwkhdkw")
}

recivedText1b = function(){

      para2 = createP(uN1);
       para2.parent("txtScreen");
    let objDiv = document.getElementById("txtScreen");
    objDiv.scrollTop = objDiv.scrollHeight;
    
 para2.addClass(`msg_r`);
   
}
function errData(err){
console.log("error: "+err)
    console.log("dljdjwkdwkhdkw")
}


//
