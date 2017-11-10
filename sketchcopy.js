var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1451';
var inData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = 'Toronto';
var apiKey = 'APPID=fde1eebba8f9d17ee705cfff53d866e3';
var units = '&units=metric';

var url;
var weatherData;//This is a variable to hold jason data
var mainTemp, maxTemp;//They are variables to hold the main temperature and the max temperature
var mainTempStr, maxTempStr;

var button;

function setup(){
  createCanvas(5000,1000);
  background(237, 242, 249);

  serial = new p5.SerialPort();
  serial.list();
  serial.open(portName);
  serial.on('list', printList);
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  url = api + city + "&" + apiKey + units;//get the url
    loadJSON(url,getWeather);//This line does two action: 1.visit url and get jason file 2.make weatherData to hold the whole jason file

  button = createButton('Weather Now');//create a button. the word between '  'could be any words you want
  button.position(785, 355); //to put this button in certain position. position(x_position, y_position)
    button.mousePressed(clickButton);//when the object named button be pressed, run clickButton function
}//Here is the end of setup function-----------------------

function getWeather(data){
  weatherData = data;
  console.log(weatherData);
    mainTemp = weatherData.main.temp ;//This line give mainTemp the value from weatherData>main>temp
    //maxTemp = weatherData.main.temp_max;//This line give mainTemp the value from weatherData>main>temp_max

    mainTempStr = mainTemp.toString();
    //maxTempStr = maxTemp.toString();
    //console.log(maxTempStr);
    console.log("the Temp"+mainTemp);
}//Here is the end of getWeather function------------------

function clickButton(){//each time the button is clicked, reload the jason file;
  loadJSON(url,getWeather);
  console.log('reload!');
}//Here is the end of clickButton function------------------

//The below are fucntions of serials
function serverConnected() {console.log('connected to server.');}
function portOpen() {console.log('the serial port opened.')}
function serialEvent() {inData = serial.readLine(); console.log(inData);}//serial.read() get the value from serial which was written by arduino
function serialError(err) {console.log('Something went wrong with the serial port.' + err);}
function portClose() {console.log('The serial port closed. ');}
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 console.log(i + " " + portList[i]);
 }
}//Here is the end of serials' functions---------------------


function draw(){
  //Here is for the title
  background(234, 239, 247);
  textSize(50);
  fill(0, 102, 153);
    text ("What Should I Wear Today?",550, 300); //text(TEXT CONTENT, x_position, y_position);


    //Here is for the temperature variables
    if (mainTemp){
    textSize(20);
    text("The Main Temperature is " + mainTempStr,720, 335);
    //text("The Max Temperature is " + maxTempStr,100, 160);
    }

    drawYes();
}//Here is the end of draw function-------------------------

function drawYes(){
fill(0, 102, 153);


//Yays!

if((inData == " 00 1F 8C 7C")&&(mainTemp>0)&&(mainTemp<10))
{
  

    console.log("stuff");
    text("Yes!",830,500);

} 



if((inData == " F5 85 53 45")&&(mainTemp>10))
{
  

    console.log("stuff");
    text("Yes!",830,500);

} 



if((inData == " 45 90 58 45")&&(mainTemp>5))
{
  

    console.log("stuff");
    text("Yes!",830,500);

} 



if((inData == " E5 A8 58 45")&&(mainTemp<10)&&(mainTemp>0))
{
  

    console.log("stuff");
    text("Yes!",830,500);

} 



if((inData == " 85 70 94 45")&&(mainTemp>0)&&(mainTemp>20))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " B5 7C 6A 45")&&(mainTemp>0)&&(mainTemp>20))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " 95 D9 45 45")&&(mainTemp<0))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " C5 BC 67 45")&&(mainTemp<10))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " A5 90 49 45")&&(mainTemp<0))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " 15 93 3C 45")&&(mainTemp<0)&&(mainTemp>10))
{
  

    console.log("stuff");
    text("Yes!",830,500);

}



if((inData == " B5 3B 94 45")&&(mainTemp<0))
{
  

    console.log("winter jacket");
    text("Yes!",830,500);

}



if((inData == " 05 30 6E 45")&&(mainTemp>0))
{
  

    console.log("stuff");
    text("Yes!",830,500);


}

//else 
  //{
  //text("Nope!",830,500);
  //delay (3000);
  //}

}