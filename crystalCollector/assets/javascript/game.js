
$(document).ready(function(){

    var mined=0;

    var goal=Math.floor(Math.random()*100+20);
    $("#goal").text(goal)

    var crystal1 = Math.floor(Math.random()*11+1);
 
    var crystal2 = Math.floor(Math.random()*11+1);
 
    var crystal3 = Math.floor(Math.random()*11+1);
    
    var crystal4 = Math.floor(Math.random()*11+1);
    console.log(crystal1, crystal2, crystal3, crystal4)
    $("#crystal1").on("click", function(){
        mined = mined + crystal1
    })
    function reset(){
        goal=Math.floor(Math.random()*100+20);

        var crystal1 = Math.floor(Math.random()*11+1);
        
        var crystal2 = Math.floor(Math.random()*11+1);
        
        var crystal3 = Math.floor(Math.random()*11+1);
        
        var crystal4 = Math.floor(Math.random()*11+1);
        
        mined = 0;
    }
    $("#crystal1").on("click",function(){
        $("#crystal1").html("<br>")
    })
})
