console.log("page loaded...");
var vid = document.getElementById("video-box")
vid.volume = 0.025;
var currentVideo=0;

var mainMeme = "<h1>But if you close your eyes</h1><h3>1.3K Views | June, 18, 2021</h3><div class='user'><img src='assets/user.png' alt='user-circle' class='avatar-s'><span class='user-name'>Meme channel</span></div>";
var sideMeme1 = "<video src='./assets/closeureyes.mp4' muted onmouseover='playVideo(this)' onmouseout='pauseVideo(this)' onclick='swapVideo(";
var sideMeme2 = ")' class='vid-s'></video><span class='video-title'>England gone gone</span>";
var videoMeme = "<video src='./assets/closeureyes.mp4' controls  id='video-box'></video>";

var mainRickRoll = "<h1>Rick Astley - Never Gonna Give You Up (Official Music Video)</h1><h3>1.270B Views | Oct, 25, 2009</h3><div class='user'><img src='assets/RickRollPFP.png' alt='user-circle' class='avatar-s'><span class='user-name'>Rick Astley</span></div>";

var sideRickRoll1 = "<video src='./assets/NeverGunnaGiveYouUp.mp4' muted onmouseover='playVideo(this)' onmouseout='pauseVideo(this)' onclick='swapVideo(";
var sideRickRoll2 =")' class='vid-s'></video><span class='video-title'>Not a Rick Roll</span>";
var videoRickRoll = "<video src='./assets/NeverGunnaGiveYouUp.mp4' controls id='video-box'></video>";

var mainBatman = "<h1>Riddle Me This, Batman</h1><h3>6.747M Views | Mar, 4, 2022</h3><div class='user'><img src='assets/solidjjPFP.png' alt='user-circle' class='avatar-s'><span class='user-name'>Solid jj</span></div>";
var sideBatman1 = "<video src='./assets/RiddleMeThisBatman.mp4' muted onmouseover='playVideo(this)' onmouseout='pauseVideo(this)' onclick='swapVideo(";
var sideBatman2=")' class='vid-s'></video><span class='video-title'>Batman!</span>";
var videoBatman="<video src='./assets/RiddleMeThisBatman.mp4' controls id='video-box'></video>";

var mainSoftware="<h1>How I Became a Software Engineer Without a CS Degree</h1><h3>385K Views | Mar, 5, 2022</h3><div class='user'><img src='assets/PowerCouple.png' alt='user-circle' class='avatar-s'><span class='user-name'>Power Couple</span></div>";
var sideSoftware1="<video src='./assets/Software.mp4' muted onmouseover='playVideo(this)' onmouseout='pauseVideo(this)' onclick='swapVideo(";
var sideSoftware2=")' class='vid-s'></video><span class='video-title'>Software tips</span>";
var videoSoftware="<video src='./assets/Software.mp4' controls id='video-box'></video>";

var mainMountains="<h1>Aerial View on Green Mountains</h1><h3>4M Views | Mar, 10, 2022</h3><div class='user'><img src='assets/Sam.png' alt='user-circle' class='avatar-s'><span class='user-name'>Samuel Razonable</span></div>";
var sideMountains1="<video src='./assets/mountains.mp4' muted onmouseover='playVideo(this)' onmouseout='pauseVideo(this)' onclick='swapVideo(";
var sideMountains2=")' class='vid-s'></video><span class='video-title'>Relaxation</span>"
var videoMountains="<video src='./assets/mountains.mp4' controls id='video-box'></video>";

var main = [mainMeme, mainRickRoll, mainBatman, mainSoftware, mainMountains];
var side1 = [sideMeme1, sideRickRoll1, sideBatman1, sideSoftware1, sideMountains1];
var side2 = [sideMeme2, sideRickRoll2, sideBatman2, sideSoftware2, sideMountains2];
var video = [videoMeme, videoRickRoll, videoBatman, videoSoftware, videoMountains];

function playVideo(video) {
    video.play();
}

function pauseVideo(video) {
    video.pause();
    video.currentTime = 0;
}

function muteAudio() {
    document.getElementById("video-box").muted = true;
    document.getElementById("audio-button").innerHTML = "<img src='./assets/muted.png' alt='audio-off' id='audio-button' onclick='unMute()'>"
}
function unMute() {
    document.getElementById("video-box").muted = false;
    document.getElementById("audio-button").innerHTML = "<img src='./assets/audio.png' alt='audio-on' id='audio-button' onclick='muteAudio()'>"
}
var test="start";
function swapVideo1() {
    document.getElementById(test).innerHTML = mainRickRoll;
    document.getElementById("main-video").innerHTML = videoRickRoll;
    document.getElementById("video-box").volume = 0.025;
    unMute();
}

function swapVideo(numList){
    console.log(currentVideo+" Becomes"+numList)
    let sideVidNum='sideVid'+numList;
    console.log("id is "+sideVidNum);
    document.getElementById("start").innerHTML=main[numList];
    [main[currentVideo],main[numList]]=[main[numList],main[currentVideo]];
    document.getElementById("main-video").innerHTML = video[numList];
    [video[currentVideo],video[numList]]=[video[numList],video[currentVideo]];
    document.getElementById(sideVidNum).innerHTML=side1[currentVideo]+numList+side2[currentVideo];
    [side1[currentVideo],side1[numList]]=[side1[numList],side1[currentVideo]];
    [side2[currentVideo],side2[numList]]=[side2[numList],side2[currentVideo]];
    document.getElementById("video-box").volume = 0.05;
    unMute();
}
function logMain(){
    console.log(main);
}
function logSide(){
    console.log(side1);
}
function logVideo(){
    console.log(video);
}
logMain();
function logCV(){
    console.log(currentVideo);
}
