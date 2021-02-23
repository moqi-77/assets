$.ajaxprefilter(function(option){
    option.url = 'http://ajax.frontend.itheima.net' + option.url;
})

// 提交login  到github