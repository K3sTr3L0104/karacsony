const height = 500;
var block = document.getElementById("block_0");
var block_1 = document.getElementById("block_1");
/*var hole = document.getElementById("hole");*/
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

function randomNumber() {
    return ((Math.random()*200)+150);
}

block.style.height = "100px";
block_1.style.top = "130px";

block.addEventListener('animationiteration', () => {
    var random = ((Math.random()*200)+150);
    block.style.height = random + "px";
    block_1.style.top = "130px";
    counter++;
});

setInterval(function(){
    /* karakter magassága 0->fel (le) */
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+2)+"px";
    }
    var cTop = (500-characterTop);
    
    var boundingBox = {
        top: 500-parseInt(window.getComputedStyle(block).getPropertyValue("height")),
        bottom: 500-parseInt(window.getComputedStyle(block_1).getPropertyValue("top")),
        left: parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    }
    console.log(boundingBox.top);
    if ((cTop < 50) || ((cTop >= boundingBox.top || cTop <= (boundingBox.top-parseInt(block_1.style.top))+50) && (boundingBox.left<20)&&(boundingBox.left>-50))) {
        if (counter>=7) {
            alert("A játéknak vége. Mivel teljesítetted a követelményt, jutalomban részesülsz! A pontszámod:"+counter+" A kódod: GLHF12");
            counter=0;
        }
        else{
            alert("A játéknak vége. Nem teljesítetted a megfelelő pontszámot. A pontszámod: "+counter+" A követelmény: 7");
            character.style.top = 250 + "px";
            counter=0;
        }
    }
    /*
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(block_1).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    */
    /*
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        if (counter>=12) {
            alert("A játéknak vége. Mivel teljesítetted a követelményt, jutalomban részesülsz! A pontszámod:"+counter+" A kódod: GLHF12");
            counter=0;
        }
        else{
            alert("A játéknak vége. Nem teljesítetted a megfelelő pontszámot. A pontszámod: "+counter+" A követelmény: 12");
            character.style.top = 100 + "px";
            counter=0;
        }
    }
    */
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-4)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}