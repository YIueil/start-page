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

function getKeywords() {
    return document.getElementById('search-box');
}

function popSearch() {
    if (getKeywords().value) {
        window.open('https://www.baidu.com/s?ie=UTF-8&wd=' + getKeywords().value);
    } else {
        //todo 提示
    }
}

function dailyRank() {
    if (getKeywords().value) {
        window.open('https://search.bilibili.com/all?keyword=' + getKeywords().value);
    } else {
        //todo 提示
    }
}