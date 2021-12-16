(function(){
    // 时间
    var time = document.getElementById('timeText');
    let myDate = new Date();
    let str = myDate.toTimeString();
    let timeStr = str.substring(0,8);
    time.innerHTML = timeStr;
    window.setInterval(()=>{
        myDate = new Date();
        str = myDate.toTimeString();
        timeStr = str.substring(0,8);
        time.innerHTML = timeStr;
    },1000)
})();