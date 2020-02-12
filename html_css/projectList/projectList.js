$(function() {
    var data = [
        {id:0,name:'智能汽车',unit:'小鹏汽车',date:'18/12/3',state:'已完成'},
        {id:1,name:'旅游路线规划',unit:'去哪儿',date:'19/6/13',state:'进行中'},
        {id:2,name:'旅游官网',unit:'小红书',date:'19/3/5',state:'已完成'},
        {id:3,name:'水泥厂智能一体化',unit:'娲石水泥',date:'18/4/4',state:'已完成'},
        {id:4,name:'汽车中控UI',unit:'特斯拉',date:'19/12/6',state:'进行中'},
        {id:5,name:'物流公司官网',unit:'中通快递',date:'20/1/21',state:'未开始'},
        {id:6,name:'湖北地铁管理平台',unit:'武汉市政府',date:'20/1/3',state:'未开始'},
        {id:7,name:'湖北高速管理平台',unit:'湖北省政府',date:'19/7/30',state:'已完成'},
        {id:8,name:'物流管理平台',unit:'菜鸟驿站',date:'18/11/21',state:'已完成'},
        {id:9,name:'海关管理平台',unit:'物通公司',date:'19/6/8',state:'已完成'},
        {id:10,name:'智能管理系统',unit:'中国银行',date:'20/2/1',state:'未开始'}
    ]
    var tmp = template('list',{
        data:data
    })
    $('.dataList').append(tmp)

    for(let i=0;i<data.length;i++){
        var text = $('.dataList .row:eq('+i+') div:last').text()
        var row = $('.dataList .row:eq('+i+')')
        switch (text){
            case '未开始':row.css('backgroundColor','#FAE0E0');break;
            case '进行中':row.css('backgroundColor','#FCF0CB');break;
            case '已完成':row.css('backgroundColor','#D8FCD8');break;
        }
    }
})
