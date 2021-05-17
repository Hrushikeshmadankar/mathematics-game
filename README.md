# mathematicsgame
A website which tests your multiplication skills in 1 minute.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mathamatics game</title>
    <style>
              html{
                  height: 100%;
                  background: radial-gradient(circle, #ffff, #ccc);
              }

              #container{
                  height: 400px;
                  width: 550px;
                  background-color: rgb(20, 148, 233);
                  margin: 100px auto;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 4px 4px 2px rgb(17, 117, 184) ;
                  position: relative;
              }
              #score{
                  background-color: rgb(243, 243, 107);
                  color: rgb(143, 143, 25);
                  padding: 11px;
                  position: absolute;
                  left: 500px;
                  border-radius: 5px;
                  box-shadow: 3px 3px 2px rgb(170, 170, 71);
              }
              #correct{
                  background-color: green;
                  color: #ffff;
                  padding: 11px;
                  position: absolute;
                  left: 250px;
                  display: none;
              }
              #wrong{
                  background-color: rgb(250, 16, 16);
                  color: #ffff;
                  padding: 11px;
                  position: absolute;
                  left: 250px;
                  display: none;
              }
              #question{
                  height: 150px;
                  width: 450px;
                  margin: 50px auto 10px auto ;
                  background-color: rgb(204, 16, 204);
                  box-shadow: 2px 2px rgb(167, 14, 167);
                  font-size: 100px;
                  text-align: center;
                  font-family: cursive;  
              }
              #instruction{
                  width: 450px;
                  height: 50px;
                  background-color: rgb(173, 198, 253);
                  margin: 10px auto;
                  text-align: center;
                  line-height: 45px;
                  box-shadow: 3px 3px rgb(122, 139, 177) ;
              }
              #choices{
                  width: 450px;
                  height: 100px;
                  margin: 5px auto;
              }
              .box{
                  width: 85px;
                  height: 85px;
                  background-color: white;
                  float: left;
                  margin-right:36px ;
                  border-radius: 2px;
                  cursor: pointer;
                  box-shadow: 3px 3px rgb(180, 180, 180);
                  text-align:center ;
                  line-height: 80px;
                  position: relative;
                  transition: all 0.2s ;
              }
              .box:hover, #startreset:hover{
                  background-color: rgb(231, 103, 71);
                  color: rgb(255, 255, 255);
                  box-shadow: 3px 3px rgb(182, 81, 56);
              }

              .box:active, #startreset:active{
                  box-shadow: 0px 0px rgb(182, 81, 56);
                  top: 4px;
              }
              #box4{
                  margin-right: 0px;
              }
              #startreset{
                  width: 85px;
                  padding: 10px;
                  background-color: rgba(255, 255, 255, 0.5);
                  margin: 0px auto;
                  border-radius: 2px;
                  cursor: pointer;
                  box-shadow: 3px 3px rgba(255, 255, 255, 0.2);
                  text-align:center ; 
                  position: relative;
                  transition: all 0.2s ;
              }
              #timeremaining{
                  width: 170px;
                  padding: 10px;
                  position: absolute;
                  background-color: rgb(150, 243, 107);
                  top:390px;
                  left: 390px;
                  border-radius: 3px;
                  box-shadow: 3px 3px rgb(125, 201, 90);
                  display: none; /*can also use visibility: hidden; */
              }
              #gameover{
                  height: 200px;
                  width: 500px;
                  background: linear-gradient(rgb(233, 116, 116),rgb(168, 162, 162));
                  font-size: 20.5px;
                  text-align: center;
                  text-transform: uppercase;
                  position: absolute;
                  top: 100px;
                  left: 45px;
                  z-index: 2;
                  display: none;
              }
    </style>
</head>
<body>
    <div id="container">
        <div id="score">score:<span id="scorevalue">0</span></div>
        <div id="correct">
            correct
        </div>
        <div id="wrong">
            Try again
        </div>
        <div id="question">
            <!-- 5x4 -->
        </div>
        <div id="instruction">
            <!-- Click on the correct answer. -->
        </div>
        <div id="choices">
            <div id="box1" class="box"></div>
            <div id="box2" class="box"></div>
            <div id="box3" class="box"></div>
            <div id="box4" class="box"></div>
        </div>

        <div id="startreset">
            Start game
        </div>
        <div id="timeremaining">
            Time-remaining: <span id="time"> </span>sec.
        </div>
        <div id="gameover">
           over
        </div>

    </div>
    <script>
      var playing= false;
var score;
var action;
var timeremaining;
var x;
var y;
var correctans;
document.getElementById("startreset").onclick = 
function(){
 //if we are playing
    if(playing== true){
        //reload page
        location.reload();
    }
    else{
//if we are not playing  
//set score to 0
        playing= true;
        score=0;
        document.getElementById("scorevalue").innerHTML= score;
//show countdown box
        show("timeremaining");
        timeremaining= 60;
        document.getElementById("time").innerHTML= timeremaining;
 //change buttom to reset
        document.getElementById("startreset").innerHTML= "Reset game";
// hide gameover box        
        hide("gameover");
        document.getElementById("instruction").innerHTML= "Click on the right answer."

// decreasing time
        startcountdown();

// generate new question        
        generateQA();
      


    }
}
  
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick= 
    function(){
        if(playing == true){
            if(this.innerHTML == correctans){
                score++;
                document.getElementById("scorevalue").innerHTML= score;

                hide("wrong");
                show("correct");
                setTimeout(function(){hide("correct");}, 1000);
                generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){hide("wrong");}, 1000);
            }
        }
    }
}

// click on answer box
    //if we are playing
        //correct?
            //yes 
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

//functions

    //start counter
                function startcountdown(){
                    action= setInterval(function(){
                        timeremaining-= 1;
                        document.getElementById("time").innerHTML= timeremaining;
                        if(timeremaining==0){
                            stopcountdown();
                            show("gameover");
                            document.getElementById("gameover").innerHTML= "<p> Game over </p> <p> Your Score :" + score +" </p>";
                            hide("timeremaining");
                            hide("correct");
                            hide("wrong");
                            playing= false;
                            document.getElementById("startreset").innerHTML= "Start game";
                            
                        }
                    }, 1000)
                }
    //stop counter            
                function stopcountdown(){
                     clearInterval(action);
                }

    //hide an element            
                function hide(Id){
                    document.getElementById(Id).style.display= "none";
                }
    //show an element
                function show(Id){
                    document.getElementById(Id).style.display= "block";
                }
    // generate new question and answer
                function generateQA(){
                    x= 1+ Math.round(9*Math.random());
                    y= 1+ Math.round(9*Math.random());
                    correctans= x*y;
                    document.getElementById("question").innerHTML= x + "X" + y;

                    var correctposition= 1+ Math.round(3*Math.random());
                    document.getElementById("box"+correctposition).innerHTML= correctans;

                    for(i=1; i<5; i++){
                        if(i!= correctposition){
                            var wrongans;
                            do{
                            wrongans= (1+ Math.round(9*Math.random())) * (1+ Math.round(9*Math.random()));
                            document.getElementById("box"+i).innerHTML= wrongans;}
                            while(wrongans== correctans)
                        }
                    }
                }

    </script>
</body>
</html>
