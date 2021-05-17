// click on start/reset 
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
