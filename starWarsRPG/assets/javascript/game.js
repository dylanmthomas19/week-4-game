$(document).ready(function(){
    var gameOn = false;

    var rey = {
        health:100,
        attack:15,
        counter:12,
        Image:"../week-4-game/assets/images/Rey.jpg"
    }
    var luke = {
        health:120,
        attack:12,
        counter:10
    }
    var kylo = {
        health:150,
        attack:8,
        counter:8
    }
    var guard = {
        health:180,
        attack:6,
        counter:6
    }
    var playerCoice = undefined
    var enemies = [];

    $(".character").on("click", function(){
        gameOn = true;
        playerCoice = $(this)

    })
    
    console.log(rey)
});