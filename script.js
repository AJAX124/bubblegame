var timervalue = 60;
var score = 0;
var hitrun =0;

function scorer(){
   score += 10;
   document.querySelector(".scoremaker").innerHTML = score;
}
scorer()

function runtimer(){
    setInterval(() => {
        if(timervalue>0){
        timervalue--;
        document.querySelector(".timerval").textContent = timervalue;
        }
        else{
            clearInterval(timervalue);
            document.querySelector("#pbtm").textContent = "GAME OVER :)";
        }
    }, 1000);
}
runtimer()

function pbtmpage(){
    var clutter = "";
for(var i =1;i<=189;i++){
   var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}
pbtmpage()

function getNewHit(){
    hitrun = Math.floor(Math.random()*10);
    document.querySelector(".hitmaker").textContent = hitrun;
}
getNewHit()


document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrun){
        scorer();
        pbtmpage();
        getNewHit()
    }
})