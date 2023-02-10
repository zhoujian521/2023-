function jsonp(url, params, callback) {
    // 参数  url + params + callback=  ==> url
    // 1：判断是否包含参数
    let queryString = url.indexOf('?') !== -1 ? '?' : '&';
    // 2：添加参数
    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            queryString += `${key}=${params[key]}&`
        }
    }
    // 3：生成随机函数名 && 添加到window
    const subfn = Math.random().toString().replace('.', '');
    const callbackName = `jsonp${subfn}`;
    // 4：构建请求 <scrip src=url  
    let scriptN = document.createElement('script');
    scriptN.src = url + queryString;
    document.getElementsByTagName("head")[0].appendChild(scriptN);
    // 5:将jsonp 回调函数添加到 window 回调后删除 
    window[callbackName] = function() {
        callback(...arguments);
        document.getElementsByTagName("head")[0].removeChild()
    }
}