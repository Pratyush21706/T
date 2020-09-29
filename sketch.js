 var alphabets =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var a =1,i,i2,code;
  let  button2
    var y = 0
var x = 1;
var uN;
var msg;
var b = 0;
var rcb;
var bc;
var uN1
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
}
createR = function(){
 

    if(a===1){
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
        rcd.position(width/3.83,height/1.91)
        rcd.addClass(`p2`)
        cpl = createImg(`cpl.png`,`Successful`);
        cpl.position(width/3.5,height/3.7);
        cpl.addClass(`cpl`)
            roomName = createInput(``).attribute(`placeholder`,`Give your room a cool Name`)
       roomName.position(width/7.75,height/1.6)
        roomName.addClass('name')
        
        enterbutton = createButton(`Go`);
    enterbutton.addClass(`enter`);
    enterbutton.position(width/1.18,height/1.45)
    enterbutton.mousePressed(banao)
        
         chatbox = createDiv().addClass(`cbx`);
    chatbox.position(15,-999)
    }
}
function banao(){
    a=2;
    if(a===2){

console.log(code)
        let name = roomName.value();
       var data ={
           Name  : name,
           Code : code
}
database.ref(code).push(data,finished);
  console.log("send called");
    }
}
function finished(error) {
  if (error) {
   alert(`Plz check your internet connection`)
     
  } else {
//           alert(`Room Created Successfully`)        
       startChat();
  }
}

function startChat(){
 resizeCanvas(0,0);
    background("black")
    
     var ref = database.ref(code);
ref.on("value", askData, errData);
           div1.position(232,-3456789);
        div.position(width/20,-3456734567)
        rcp.position(width/3.83,-3456734567)
        cpl.position(width/3.5,-3456734567);
       roomName.position(width/7.75,-3456734567)
    enterbutton.position(width/1.18,-3456734567)
    button.position(8380,-3334)
    input1.position(8380,-3334)
          rc.position(width/3.83,-3456734567)
          rcd.position(width/3.83,-3456734567)
     div3 = createDiv('')
        div3.addClass(`header`);
        div3.position(0,0);
    
     div3 = createDiv('')
        div3.addClass(`footer`);
        div3.position(0,window.innerHeight/1.1);
    
    div4 = createDiv('')
        div4.addClass(`bg`);
        div4.position(window.innerWidth/1.135,window.innerHeight/1.085);
    
//    chatbox.position(5,window.innerHeight/10.2)
      msg = createInput(``).attribute(`placeholder`,`Type something`)
       msg.position(10,div4.y)
        msg.addClass('text')
        x = 2;

     button2 = createButton(``);
    button2.position(div4.x+5,div4.y+5)
            button2.attribute('disabled', '');
                         button2.addClass(`44224`);

    let nme = roomName.value();
    groupName = createP(nme);
    groupName.position(width/20,0)
    groupName.addClass(`p3`)
    button2.mousePressed(addText)
   


}
function startChat1(){
 resizeCanvas(0,0);
    background("black")
      var refo = database.ref(rcb);
refo.on("value", abcData, errData);

//           div1.position(232,-3456789);
//        div.position(width/20,-3456734567)
//        rcp.position(width/3.83,-3456734567)
//        cpl.position(width/3.5,-3456734567);
//       roomName.position(width/7.75,-3456734567)
//    enterbutton.position(width/1.18,-3456734567)
    button.position(8380,-3334)
    input1.position(8380,-3334)
//          rc.position(width/3.83,-3456734567)
//          rcd.position(width/3.83,-3456734567)
     div3 = createDiv('')
        div3.addClass(`header`);
        div3.position(0,0);
    
     div3 = createDiv('')
        div3.addClass(`footer`);
        div3.position(0,window.innerHeight/1.1);
    
    div4 = createDiv('')
        div4.addClass(`bg`);
        div4.position(window.innerWidth/1.135,window.innerHeight/1.085);
    
//    chatbox.position(5,window.innerHeight/10.2)
      msg = createInput(``).attribute(`placeholder`,`Type something`)
       msg.position(10,div4.y)
        msg.addClass('text')
        x = 2;

     button2 = createButton(``);
    button2.position(div4.x+5,div4.y+5)
            button2.attribute('disabled', '');
                         button2.addClass(`44224`);

//    let nme = roomName.value();
//    groupName = createP(nme);
//    groupName.position(width/20,0)
//    groupName.addClass(`p3`)
    button2.mousePressed(addText1)
   


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
function gotData(data){
  let info = data.val();
var keys = Object.keys(info)
var k = keys[0]
 bc= info[k].Code;
    console.log("Code returned: "+bc)
    if(bc==rcb){
    startChat1();
    }
}

addText1 = function(){

    let val = msg.value();  
          var message ={
msg: val
}
database.ref(rcb).push(message,finished);
    
     var refo = database.ref(rcb);
refo.on("value", abcData, errData);

}
addText = function(){

    let val = msg.value();  
    
      var message ={
msg: val
}
database.ref(code).push(message,finished);
    
     var ref = database.ref(code);
ref.on("value", askData, errData);

}
function askData(data){
    b++
  let info = data.val();
var keys = Object.keys(info)
for(let i =1; i<keys.length; i++){
var k = keys[i]
}
uN = info[k].msg;
//        console.log(data)
   if(b===2){
        recivedText1();
   }
    console.log(b)
   
            console.log("Message: "+uN)
    
}
//n20c6
function abcData(data){
//         y++
//    console.log(y)
    console.log("hishj")
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
 if(b===2){
        recivedText1();
   }
            console.log("Message1: "+uN1)
    
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



