
// Creation and Computation, Experiment 3
//uses JSON as the protocol
//requires p5.serialcontrol to be running

// "Stories We Tell" created by Naomi Shah
//Digital Futures Fall Semester 2018

var serial;       //variable to hold the serial port object
var serialPortName = "COM4";        //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
var inData;           //For incoming serial
var pot1;  //Potentiometer: This variable will the value "s1"
var pot2;  //Potentiometer: This variable will the value "s2"
var pot3;  //Potentiometer: This variable will the value "s3"
var pot4;  //Potentiometer: This variable will the value "s4"
//var slider;
var Location = [
    "That night in the kitchen",
    "It was a bright day in the garden",
    "The walls of the fortress were high"
];
  
var Emotion = [
    "She felt scared by what stood before her",
    "She felt peace in that moment",
    "She had a lump in her throat"
];
   
var Action = [
    "She took a knife and shoved it into his stomach",
    "She ran her fingers through her hair",
    "She pet the back of her iguana"
];
   
var Dialogue = [
    "‘I am not going to let you get the better of me’ she yells.",
    "‘It’s a new beginning,' she said.",
    "‘Don’t let me down’ she whispered."
];


  
function setup() {
    
    textFont ("Courier");
//slider= createSlider (0, 1023, 1023);
//slider.position (390, 530);
    
// serial = new p5.SerialPort(); // make a new instance of the serialport library
//  serial.on('list', printList); // set a callback function for the serialport list event
//  serial.on('connected', serverConnected); // callback for connecting to the server
//  serial.on('open', portOpen);        // callback for the port opening
//  serial.on('data', serialEvent);     // callback for when new data arrives
//  serial.on('error', serialError);    // callback for errors
//  serial.on('close', portClose);      // callback for the port closing
// 
// serial.list(); // list the serial ports
// serial.open(portName); // open a serial port
    
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName);      //open the serialport. determined 
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived function
//    
    
}   

   
function draw() {

//For Potentiometer 1
if (pot1< 341)
{ document.getElementById("location").innerHTML = Location[0], 12, 200, 2400, 1000; }
else if(pot1< 682)
{document.getElementById("location").innerHTML = Location[1], 12, 200, 2400, 1000;}
else { document.getElementById("location").innerHTML = Location[2], 12, 200, 2400, 1000; }
;
//For Potentiometer 2
if (pot2<341)
{ document.getElementById("emotion").innerHTML = Emotion[0], 22, 300, 2400, 1000; }
else if (pot2< 682)
{ document.getElementById("emotion").innerHTML = Emotion[1], 22, 300, 2400, 1000; }
else { document.getElementById("emotion").innerHTML = Emotion[2], 22, 300, 2400, 1000; }
 ;
//For Potentiometer 3
if (pot3<341)
{ document.getElementById("action").innerHTML = Action[0], 32, 400, 2400, 1000; }
else if (pot3< 682)
{ document.getElementById("action").innerHTML = Action[1], 32, 400, 2400, 1000; }
else { document.getElementById("action").innerHTML = Action[2], 32, 400, 2400, 1000; }
;
//For Potentiometer 4    
if (pot4<341)
 { document.getElementById("dialogue").innerHTML = Dialogue[0], 42, 500, 2400, 1000; }
else if (pot4< 682)
{ document.getElementById("action").innerHTML = Dialogue[1], 42, 500, 2400, 1000; }
else { document.getElementById("action").innerHTML = Dialogue[2], 42, 500, 2400, 1000; }   
;
}

  function dataReceived()   //this function is called every time data is received
{
  
var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
    //console.log(rawData);                   //uncomment this line to see the incoming string in the console     
    if(rawData.length>1)                      //check that there is something in the string
    {                                         
      
pot1 = JSON.parse(rawData).s1;  //the parameter value .s1 must match the parameter name created within the arduino file
   pot2 = JSON.parse(rawData).s2;
   pot3 = JSON.parse(rawData).s3;
   pot4 = JSON.parse(rawData).s4;
    
    }
}
    
function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}


