/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
    let timeout = null;

    return function () {
        console.log('防抖处理....')
        console.log(this)
        let context = this;
        let args = arguments;
        console.log(timeout)

        if (timeout){ 
            console.log('计数器不为空，本次交互不处理')
            alert('请勿频繁操作！');
            clearTimeout(timeout)
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            console.log(`当前计数器为空，若${wait}ms内不再点击将执行交互处理函数`)
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
            console.log('计数器：',timeout)
        }
    }
}

/**
 * @function: throttle
 * @param: {Function} func 要执行的函数
 * @description: 当函数在短时间内多次触发时，做节流，间隔delay时长再去执行
 * @author: hruomei
 * @date: 2020-10-29 10:38:06
 * @version: V1.0.0
 */
function throttle(func, delay) {
    let timer = null, // 用来保存setTimeout返回的值
    startTime = Date.now(); // 创建节流函数的时间

    // 返回一个函数
    return function() {
        let curTime = Date.now(), // 返回的这个函数被调用的时间
        remaining = delay - (curTime - startTime), // 设定的delay与[上一次被调用的时间与现在的时间间隔]的差值
        context = this, // 上下文对象
        args = arguments; // 返回的这个函数执行时传入的参数

        // 首先清掉定时器
        clearTimeout(timer); 

        // // 假如距离上一次执行此函数的时间已经超过了设定的delay，则执行
        if (remaining <= 0) { 
            func.apply(context, args);
            startTime = Date.now(); // 重置最后执行时间为现在
            // 否则，等到间隔时间达到delay时，执行函数
        } else {
            timer = setTimeout(() => {
                func.apply(context, args);
            }, remaining);
        }
    }
}


export { debounce , throttle }
