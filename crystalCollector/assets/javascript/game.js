
$(document).ready(function(){
//initializing variables
    var wins = 0;

    var losses = 0;

    var goal=Math.floor(Math.random()*100+20);

    var crystal1 = Math.floor(Math.random()*11+1);
 
    var crystal2 = Math.floor(Math.random()*11+1);
 
    var crystal3 = Math.floor(Math.random()*11+1);
    
    var crystal4 = Math.floor(Math.random()*11+1);

    //printing variables
    $("#goal").text(goal)
    
    $("#wins").text(wins)
    
    $("#losses").text(losses)
    
    //logging variables
    console.log(crystal1, crystal2, crystal3, crystal4)

    //win function
    function win(){
        wins++;
        $("wins").text(wins)
        reset()
    }

    //lose function
    function lose(){
        losses++;
        $("losses").text(losses)
        reset()
    }

    function reset(){
        goal=Math.floor(Math.random()*100+20);

        var crystal1 = Math.floor(Math.random()*11+1);
        
        var crystal2 = Math.floor(Math.random()*11+1);
        
        var crystal3 = Math.floor(Math.random()*11+1);
        
        var crystal4 = Math.floor(Math.random()*11+1);
    
    }
    
    $("#crystal1").click("img",function(){
        goal = goal - crystal1;
        $("#goal").text(goal);
        if(goal===0){
            win();
        }
        else if(0>goal){
            lose()
        }
    })
    $("#crystal2").click("img",function(){
        goal = goal - crystal2
        $("#goal").text(goal);
        if(goal===0){
            win();
        }
        else if(0>goal){
            lose()
        }
    })
    $("#crystal3").click("img",function(){
        goal = goal - crystal3
        $("#goal").text(goal);
        if(goal===0){
            win();
        }
        else if(0>goal){
            lose()
        }
    })
    $("#crystal4").click("img",function(){
        goal = goal - crystal4
        $("#goal").text(goal);
        if(goal===0){
            win();
        }
        else if(0>goal){
            lose()
        }
    })
})
