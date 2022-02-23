function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,550);
    canvas.position(560,510)

    poseNet = ml5.posenet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() 
{
    background('#FFCAED');
}

function modelLoaded() 
{
    console.log('PoseNet is Initialized!!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}