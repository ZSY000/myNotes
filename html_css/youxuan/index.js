var slices = $('.sliceBox li')
var page = $('.pagination li')
var width = $('.sliceBox li:first img').eq(0).width()
var index = 0
var timer = null
var flag = true

// 自动轮播控制
function autoMove(flag) {
    if(flag){
        timer = setInterval(function() {
            index++
            selectImg(index)
        },3000)
    }else{
        clearInterval(timer)
    }
}

// 轮播动画
function selectImg(num) {
    page.eq(num).addClass('active').siblings().removeClass('active')
    $('.sliceBox').animate({
        left: -num*width
    },1000,function() {
        // 检查是否是最后一张
        if(index == slices.length-1){
            index = 0
            $('.sliceBox').css('left','0px')
            page.eq(0).addClass('active').siblings().removeClass('active')
        }
    })
}

autoMove(flag)

