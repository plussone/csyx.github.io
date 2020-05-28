$(function(){
    //执行开始的方法
    //showpos = true;
    startTrack();

})

var showpos = false;
// Put event listeners into place
//window.addEventListener("DOMContentLoaded", function() {

// Grab elements, create settings, etc.
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = {
        "video": true
    },
    errBack = function(error) {
        if(error.PERMISSION_DENIED) {
            jAlert('用户拒绝了浏览器请求媒体的权限', '提示');
        } else if(error.NOT_SUPPORTED_ERROR) {
            jAlert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
        } else if(error.MANDATORY_UNSATISFIED_ERROR) {
            jAlert('指定的媒体类型未接收到媒体流', '提示');
        } else {
            jAlert('系统未能获取到摄像头，请确保摄像头已正确安装。或尝试刷新页面，重试', '提示');
        }
    };

// Put video listeners into place
if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
        video.srcObject = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    try {
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.srcObject = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } catch(error) {
        alert(error);
    }
} else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream) {
        video.srcObject = window.URL.createObjectURL(stream);
        video.play();
    }, errBack);
}

//}, false);
//////////////////////////////////////////////////////////////////////////////
//活体
var last_time = 0; //时间因素

//摇头动作
var is_head_ok = false;
var is_alive_head = false;
var last_dis_left_right = 100000000;
function alive_head() {
    document.getElementById("tip").innerHTML = "请在水平方向左右摇头";
    document.getElementById('result').value = "";
    is_head_ok = false;
    last_dis_left_right = 100000000;
    last_time = 0;
    is_alive_head = true;
    is_alive_mouse = false;
}

function startTrack() {
    var videoInput = document.getElementById('video');
    var ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput);
    var canvasInput = document.getElementById('canvas');
    var cc = canvasInput.getContext('2d');
    cc.lineWidth = 3;
    function drawLoop() {
        alive_head();
        //requestAnimationFrame(drawLoop);
        cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
        //ctracker.draw(canvasInput );
        var positions = ctracker.getCurrentPosition();
        if(showpos && positions) {
            for(var p = 0; p < positions.length; p++) {
                positionString += "featurepoint " + p + " : [" + positions[p][0].toFixed(2) + "," + positions[p][1].toFixed(2) + "]<br/>";
            }
            document.getElementById('positions').innerHTML = positionString;
        }
        if(positions) {
            for(var p = 0; p < 71; p++) {
                cc.beginPath();
                cc.arc(positions[p][0].toFixed(2), positions[p][1].toFixed(2), 2, 0, Math.PI * 2, true);
                cc.closePath();
                cc.fillStyle = '#00FF00';
                cc.fill();
            }
            //cc.strokeStyle = 'red';
            //0-14 轮廓
            //7 下吧，最下
            //2 最左边
            //12 最右边
            //15-22 眉毛
            //23-27 左眼睛五个点
            //27 左眼中间
            //63-66 左眼四个点
            //28-32 右眼睛五个点
            //67-70 右眼四个点
            //33-43 鼻子
            //62 鼻中间
            //44-61 嘴巴
            //47 嘴巴上
            //53 嘴巴下
            ///////////////////////////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////
            //head
            if(last_time == 0 || (new Date().getTime() - last_time > 0 && new Date().getTime() - last_time < 10000)) {
                var xdiff_left = positions[62][0] - positions[2][0];
                var ydiff_left = positions[62][1] - positions[2][1];
                var dis_left = Math.pow((xdiff_left * xdiff_left + ydiff_left * ydiff_left), 0.5);

                var xdiff_right = positions[12][0] - positions[62][0];
                var ydiff_right = positions[12][1] - positions[62][1];
                var dis_right = Math.pow((xdiff_right * xdiff_right + ydiff_right * ydiff_right), 0.5);

                var xdiff_side = positions[12][0] - positions[2][0];
                var ydiff_side = positions[12][1] - positions[2][1];
                var dis_side = Math.pow((xdiff_side * xdiff_side + ydiff_side * ydiff_side), 0.5);

                var dis_left_right = dis_left - dis_right;
                document.getElementById('result').value = dis_left_right;

                if(last_dis_left_right > 0 && dis_left_right > dis_side / 6) {
                    location.href="http://muxiongxiong.top"
                }
                last_dis_left_right = dis_left_right;
                last_time = new Date().getTime();
            }
        }
        requestAnimationFrame(drawLoop);
    }
    drawLoop();
}
