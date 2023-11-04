function preload()
{

}
function setup()
{
    canvas = createCanvas(540,380);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";
}

function draw()
{
    image(video, 100 ,100 ,340 ,180);

    fill(0,128,0);
    stroke(0,128,0);
    rect(40, 310, 450, 20);

    fill(0,128,0);
    stroke(0,128,0);
    rect(40, 40, 20, 300);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50 , 320 ,50);

    fill(0,128,0);
    stroke(0,128,0);
    rect(480, 40, 20, 300);

    fill(0,128,0);
    stroke(0,128,0);
    rect(40, 45, 450, 20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50 , 60 ,50);

    fill(255,0,0);
    stroke(255,0,0);
    circle(490 , 320 ,50);

    fill(255,0,0);
    stroke(255,0,0);
    circle(490 , 60 ,50);

    tint(tint_colour);

}

function take_snapshot()
{
    save('student_image.png');
}

function colour_tint()
{
    tint_colour = document.getElementById("colour_name").value;
}