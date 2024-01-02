canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")

roverWidth=100
rovverHeight=90
roverX=10
roverY=10
backgroundImage="mars.jpg"
roverImage="rover.png"

function add(){
    background_img=new Image()
    background_img.onload=uploadBackground
    background_img.src=backgroundImage

    rover_img=new Image()
    rover_img.onload=uploadRover
    rover_img.src=roverImage
}

function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover.img,roverX,roverY,roverWidth,roverHeight)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed=e.keyCode
    if(keyPressed=="37")
    {
        left()
    }

    if (keyPressed=="38")
    {
         up()
    }

    if (keyPressed=="39")
    {
         right()
    }

    if (keyPressed=="40")
    {
         down()
    }

}