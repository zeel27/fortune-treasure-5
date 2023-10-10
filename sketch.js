var splashScreen
var playbutton, musicbutton, mutebutton
var gameState = "wait"
var bglevel1, object1, object2, object3, object4, object5
var object1img, object2img, object3img, object4img, object5img
var player
var playerimg
var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, player,silverimg,goldimg,bronzeimg,gold,silver,bronze
var x1coin, y1coin, x2coin, y2coin, x3coin, y3coin

var score = 0
let timer = 0;
let totalDuration = 10;
let minutes, seconds;


function preload() {
    splashScreen = loadImage("The Fortune Treasure!!.gif")
    bglevel1 = loadImage("bgl1.jpg")
    object1img = loadImage("red star.png")
    object2img = loadImage("pink star.png")
    object3img = loadImage("purple star.png")
    object4img = loadImage("blue star.png")
    object5img = loadImage("green star.png")
    playerimg = loadImage("player.png")

    silverimg=loadAnimation("assets/Silver/s1.png","assets/Silver/s2.png","assets/Silver/s3.png",
    "assets/Silver/s4.png","assets/Silver/s5.png","assets/Silver/s6.png")

    goldimg=loadAnimation("assets/coin1/c1.png","assets/coin1/c2.png",
    "assets/coin1/c3.png","assets/coin1/c4.png","assets/coin1/c5.png","assets/coin1/c6.png",
    "assets/coin1/c7.png","assets/coin1/c8.png","assets/coin1/c9.png","assets/coin1/c10.png")
    
    bronzeimg=loadAnimation("assets/Bronze/Bronze_1.png","assets/Bronze/Bronze_2.png",
    "assets/Bronze/Bronze_3.png","assets/Bronze/Bronze_4.png","assets/Bronze/Bronze_5.png",
    "assets/Bronze/Bronze_6.png","assets/Bronze/Bronze_7.png","assets/Bronze/Bronze_8.png",
    "assets/Bronze/Bronze_9.png","assets/Bronze/Bronze_10.png","assets/Bronze/Bronze_11.png",
    "assets/Bronze/Bronze_12.png","assets/Bronze/Bronze_13.png","assets/Bronze/Bronze_14.png",
    "assets/Bronze/Bronze_15.png","assets/Bronze/Bronze_16.png","assets/Bronze/Bronze_17.png",
    "assets/Bronze/Bronze_18.png","assets/Bronze/Bronze_19.png","assets/Bronze/Bronze_20.png",
    "assets/Bronze/Bronze_21.png","assets/Bronze/Bronze_22.png","assets/Bronze/Bronze_23.png",
    "assets/Bronze/Bronze_24.png","assets/Bronze/Bronze_25.png","assets/Bronze/Bronze_26.png",
    "assets/Bronze/Bronze_27.png","assets/Bronze/Bronze_28.png","assets/Bronze/Bronze_29.png",
    "assets/Bronze/Bronze_30.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)


    x1 = Math.round(random(50, windowWidth))
    y1 = Math.round(random(50, windowHeight))

    x2 = Math.round(random(100, windowWidth - 100))
    y2 = Math.round(random(100, windowHeight - 100))

    x3 = Math.round(random(100, windowWidth - 100))
    y3 = Math.round(random(100, windowHeight - 100))

    x4 = Math.round(random(100, windowWidth - 100))
    y4 = Math.round(random(100, windowHeight - 100))

    x5 = Math.round(random(100, windowWidth - 100))
    y5 = Math.round(random(100, windowHeight - 100))

    // minutes=floor(totalDuration/60)
    seconds = totalDuration % 60




    playbutton = createImg("play.png")
    playbutton.position(width / 4 + 100, height - (height / 4))
    playbutton.size(180, 150)

    musicbutton = createImg("music.png")
    musicbutton.position(width / 2, height - (height / 3.95))
    musicbutton.size(170, 150)
    // musicbutton.hide()

    mutebutton = createImg("mute.png")
    mutebutton.position(width / 2, height - (height / 3.95))
    mutebutton.size(170, 150)
    mutebutton.hide()

    player = createSprite(100, height - 100)
    player.addImage(playerimg)
    player.visible = false


    // level 1 collectibles
    object1 = createSprite(x1, y1)
    object1.addImage(object1img)
    object2 = createSprite(x2, y2)
    object2.addImage(object2img)
    object3 = createSprite(x3, y3)
    object3.addImage(object3img)
    object4 = createSprite(x4, y4)
    object4.addImage(object4img)
    object5 = createSprite(x5, y5)
    object5.addImage(object5img)


    object1.visible = false
    object2.visible = false
    object3.visible = false
    object4.visible = false
    object5.visible = false



    console.log(x1, y1)
    console.log(x2, y2)
    console.log(x3, y3)
    console.log(x4, y4)
    console.log(x5, y5)

    // level 2 random positions
    
    x1coin = Math.round(random(50, windowWidth))
    y1coin = Math.round(random(50, windowHeight))

    x2coin = Math.round(random(100, windowWidth - 100))
    y2coin = Math.round(random(100, windowHeight - 100))

    x3coin = Math.round(random(100, windowWidth - 100))
    y3coin = Math.round(random(100, windowHeight - 100))

    gold=createSprite(x1coin,y1coin)
    gold.addAnimation("gold",goldimg)
    gold.scale=0.5
    gold.visible=false
  
    bronze=createSprite(x2coin,y2coin)
    bronze.addAnimation("bronze",bronzeimg)
    bronze.scale=0.2
    bronze.visible=false


    silver=createSprite(x3coin,y3coin)
    silver.addAnimation("silver",silverimg)
    silver.scale=0.2
    silver.visible=false

}

function draw() {

    player.x = mouseX
    player.y = mouseY

    if (gameState == "wait") {
        background(splashScreen)
    }


    playbutton.mousePressed(() => {
        about()
    })


    if (gameState == "level1") {
        background(bglevel1)
        playbutton.hide()
        mutebutton.hide()
        musicbutton.hide()
        enterlevel1()
    }
    if (gameState == "level1start") {
        background(bglevel1)
        object1.visible = true
        object2.visible = true
        object3.visible = true
        object4.visible = true
        object5.visible = true
        player.visible = true


        //     for(var i=1;i<6;i++){
        //     object = "object"+i
        // console.log(object)}
        // collecttreasurelevel1(object1,player)
        if (object1.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object1.remove();
            score += 1

        }
        if (object2.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object2.remove();
            score += 1
        }
        if (object3.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object3.remove();
            score += 1
        }
        if (object4.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object4.remove();
            score += 1
        }
        if (object5.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object5.remove();
            score += 1
        }


        if (score >= 45) {
            player.visible = false
            score = 0
            timer = 0;
            totalDuration = 10;
            minutes, seconds;
            level1complete()

        }
    }


    if (gameState == "level2start") {
        background(0)
        object1.visible = false
        object2.visible = false
        object3.visible = false
        object4.visible = false
        object5.visible = false
        player.visible = true

        gold.visible=true
        silver.visible=true
        bronze.visible=true



        //         for(var i=1;i<6;i++){
        //         object = "object"+i
        //    }
        // collecttreasurelevel1(object1,player)
        // if (object1.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object1.remove();
        //     score += 1

        // }
        // if (object2.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object2.remove();
        //     score += 1
        // }
        // if (object3.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object3.remove();
        //     score += 1
        // }
        // if (object4.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object4.remove();
        //     score += 1
        // }
        // if (object5.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object5.remove();
        //     score += 1
        // }



    }

    drawSprites()


    if (gameState === "level1start") {
        fill("red")
        // fontWeight(2)
        stroke("black")
        strokeWeight(4)
        textSize(30)
        text("Score: " + score, width - 200, 50)



        text(nf(seconds, 2), 200, 50)

        if (frameCount % 60 == 0 && timer < totalDuration) {
            timer++
            // minutes=floor(totalDuration-timer/60)
            seconds = floor(totalDuration - timer % 60)
        }
    }

    if (gameState === "level2start") {
        fill("red")
        // fontWeight(2)
        stroke("black")
        strokeWeight(4)
        textSize(30)
        text("Score: " + score, width - 200, 50)



        text(nf(seconds, 2), 200, 50)

        if (frameCount % 60 == 0 && timer < totalDuration) {
            timer++
            // minutes=floor(totalDuration-timer/60)
            seconds = floor(totalDuration - timer % 60)
        }
    }

}


function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Complete the tasks as instructed.. \n in various hint messages",
        imageUrl: "maria-belova-.jpg",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1"
        }
    )


}


function enterlevel1() {
    swal({
        title: "Find the Door to Wonders !!!",
        text: "For the Door to appear , collect 5 magical Items!!",
        imageUrl: "maria-belova-.jpg",
        imageSize: "200x200",
        confirmButtonText: "ADVENTURE BEGINS!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1start"
        }
    )
}

function collecttreasurelevel1(o1) {
    d = dist(o1.x, o1.y, o2.x, o2.y)
    console.log(d)
    if (d <= 50) {
        o1.visible = false
        o1.remove()
        score += 1
    }

}

function level1complete() {
    swal({
        title: "Here is the DOOR To WONDERS !!!",
        text: "Here is the Door To TREASURE!!",
        imageUrl: "star.gif",
        imageSize: "200x200",
        confirmButtonText: "DOOR TO TREASURE!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level2start"
        }
    )
}


