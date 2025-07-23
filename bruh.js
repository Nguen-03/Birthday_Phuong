const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const picId = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6"];
const soundId = ["sound1", "sound2", "sound3", "sound4", "sound5"];
var onClick = false;
var open_gift = false;
// document.getElementById("gift").addEventListener("mousedown", () => onClick = true);
// document.getElementById("gift").addEventListener("mouseup", () => onClick = false);
document.getElementById("gift").addEventListener("pointerdown", () => {onClick = true;});
// document.getElementById("gift").addEventListener("touchmove", () => onClick = true);
document.addEventListener("pointerup", () => {onClick = false;});
let component = {
    componentID: null,
    componentSound: document.getElementById(soundId[Math.floor(Math.random() * 5)]),
    top_limit: 10,
    bot_limit:45,
    y:45,
    moveForward: function(){
        this.y -= 0.5;
        this.componentID.style.top = this.y + "%";
        this.componentSound.play();
    },
    moveBack: function(){
        this.y += 1;
        this.componentID.style.top = this.y + "%";
    },

    move: function(){
        if (component.y == 45){
        component.componentID = document.getElementById(picId[Math.floor(Math.random() * 6)]);
        component.componentSound = document.getElementById(soundId[Math.floor(Math.random() * 5)]);
        }
        if (onClick && open_gift){
            if (this.y > this.top_limit)
                component.moveForward();
        }else{
            if (this.y < this.bot_limit){
                component.moveBack();
                
            }else{
                this.componentSound.pause();
                this.componentSound.currentTime = 0;
            }
        }
        
    }
};

function loop(){
    component.move();
    requestAnimationFrame(loop);
}
loop();
const img = document.getElementById("giftGlid");

img.addEventListener("click", () => {
    if (!open_gift){
        img.classList.add("box");
        open_gift = true;
    }
});


// function resizeCanvas(){
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth
// }
// resizeCanvas();
// window.addEventListener('resize', resizeCanvas);