var slices = $('.sliceBox li')
var prev = $('.prev')
var next = $('.next')
var page = $('.pagination li')
var width = $('.sliceBox li:first img').eq(0).width()
var index = 0
var timer = null
var flag = true

// 鼠标进入，停止轮播
$('.sliceBox,.prev,.next').hover(function() {
    flag = false
    autoMove(flag)
    $('.prev,.next').addClass('show')
},function() {
    flag = true
    autoMove(flag)
    $('.prev,.next').removeClass('show')
})

// 点击上下箭头切换
prev.on('click',function() {
    flag = false
    clearInterval(timer)
    if(index == 0){
        index = slices.length-1
        $('.sliceBox').css('left',-index*width)
    }
    index--
    selectImg(index)
})
next.on('click',function() {
    flag = false
    clearInterval(timer)
    index++
    selectImg(index)
})

// 点击页码切换
page.on('click',function() {
    flag = false
    clearInterval(timer)
    selectImg(index = $(this).index())
})

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

