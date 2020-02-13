var slices = $(".slice");
var pages = $(".pagination span");
var imgWidth = $(".slice img:first-child").eq(0).width();
var _index = 0;
var timer = null;
var flag = true;
pages.on("click", function() {
    //导航切换
    _index = pages.index($(this));
    changeImg(_index);
})

$(".container").hover(function() {
    //鼠标移入
    clearInterval(timer);
    flag = false;
}, function() {
    flag = true;
    timer = setInterval(slice, 3000);
});

function move(bol) {
    //自动行走
    if (bol) {
        timer = setInterval(slice, 3000);
    }
}
move(flag);

function slice() {
    //计时器的函数
    _index++;
    changeImg(_index);
}
function changeImg(num) {
    $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
    $(".inner").animate({
        left: -num * imgWidth,
    }, 1000, function() {
        //检查是否到最后一张
        if (_index == slices.length - 1) {
            _index %= 5;
            $(".inner").css("left", "0px");
            $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
        }
    })
}

// nav固定
$(window).scroll(function(){
	headerInit();
});

function headerInit(){
	if($(this).scrollTop()>40){
		$(".nav").addClass("fixed-nav");
	}else{
		$(".nav").removeClass("fixed-nav");
	}
}
