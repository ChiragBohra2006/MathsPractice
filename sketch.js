var numOnerandom =  Math.random(0, 1)*100;
var numOne = Math.round(numOnerandom);

let numTworandom =  Math.random(0, 1)*100;
let numTwo = Math.round(numTworandom);

let numOneValue = numOne;
let numTwoValue = numTwo;



var gameState = FIRST;

var inputValue = numOne

let valueInput = input.value

var score = 0;

var pass;
var nope;


function preload(){

  buttonImg = loadImage("button.png");
  pass = loadSound("Video_Game_Coin_Beep_Sound_Effect_(getmp3.pro) (1).mp3")
  nope = loadSound("Nope_sound_effect_(getmp3.pro).mp3");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
 
  button = createSprite(width/2+27/1366*width, height - height/5, 200, 100)
  button.addImage(buttonImg);
  button.scale = 0.3/1366*width;

  input = createInput();
input.position((width- 120/1366*width)/2, height - height/3 - 50/1366*width);

score = 0
 
}


function draw() {
  background(220);
  
  drawSprites();

  
   // fill("BLACK")
   // textFont("Comic Sans MS")
  //text(numOneValue, 100, 100);
  //text(numTwoValue, 1000, 100);
 
  fill("BLACK")
  textFont("Comic Sans MS");
  textSize(90/1366*width);
  text(numOne, width/3, height/2);
  text(numTwo, width - width/3-50, height/2);
  text("+", width/2, height/2);

  if(numOneValue<10)
  {
    numOne = "0"+numOne;
    numOneValue = 100;
    
    }

    if(numTwoValue<10)
    {
      numTwo = "0"+numTwo;
      numTwoValue = 100;
      
      }

      if(input.value() == numOne + numTwo && mouseIsOver(button) && mouseWentDown(LEFT) || input.value() == numOne + numTwo && keyCode == ENTER){
        main()
    
  
        score = score+1;
        input.value(null)
        pass.play()
        
      }else if(input.value() !== numOne + numTwo && mouseIsOver(button) && mouseWentDown(LEFT) || input.value !== numOne+numTwo && keyWentDown(ENTER)){
      
    
  
        score = score-1;
        input.value(null)
        nope.play()
        
      }

      
      textSize(90)
      fill("BLACK")
      textFont("Comic Sans MS")
      text("SCORE:"+score, width/3 + 50/1366*width, height/4);

      textSize(45)
      text("GO!", button.x-button.width/9, button.y + button.width/19)
    }

 function main()
 {

numOnerandom = Math.random(0, 1)*100
numOne = Math.round(numOnerandom);

numTworandom =  Math.random(0, 1)*100;
numTwo = Math.round(numTworandom);

 
}
  