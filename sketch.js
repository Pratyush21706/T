 var alphabets =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var a =1,i,i2,code;
    var y = 12

function preload(){
homebg = loadImage("new.png")
}
function setup(){
 createCanvas(window.innerWidth,window.innerHeight)
        background(homebg)
    
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
    button.mousePressed( createR)
    
    input1 = createInput(``).attribute(`placeholder`,`  Room code`, `maxlength`, `four`)
    input1.position(width/1.975,height/1.255)
    input1.addClass('join')
    
     i = Math.round(random(0,25))
         i2 = Math.round(random(0,25))
 code = alphabets[i]+Math.round(random(10,90))+alphabets[i2]+Math.round(random(0,9))

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
        div4.position(width/1.135,window.innerHeight/1.085);
    
      msg = createInput(``).attribute(`placeholder`,`Type something`)
       msg.position(10,height/1.08)
        msg.addClass('text')
    
 button2 = createButton(``);
    button2.addClass(`message`);
    button2.position(width/1.12,height/1.073)
    let nme = roomName.value();
    groupName = createP(nme);
    groupName.position(width/20,0)
    groupName.addClass(`p3`)
    button2.mousePressed(addText)
   
noCanvas();
}
addText = function(){

    console.log(y)
    let val = msg.value();  
      dv = createP(val);
    dv.class(`sent`);
    dv.position(6,height/y);
      var data ={
msg: val
}
database.ref(code).push(data,finished);
   noCanvas();
}


