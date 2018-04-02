function checkDevice() {
    var UA = window.navigator.userAgent;
    var isAndorid = /android/i.test(UA),
    var isIphone = /iphone/i.test(UA),
    var isPad = /ipad/i.test(UA),
    var isDolphin = typeof dolphin !== 'undefined';
    var device = isAndorid ? 'android' : isIphone ? 'iphone' : isPad ? 'ipad':'unknow';
    return device;
}
/**返回一个number数据
 * -1:表示unknow
 * 0:保留值，无意义
 * 1:
 * 2:
 * 3:
 * 4:
 * 5:
 * 6:
 * 7:
 * 8:
 * 
 * 
 */

function checkBrowser() {
    
    //    检测设备类型
    var UA = window.navigator.userAgent,
    var isQQBrowser = /(?:MQQBrowser | QQ)/.test(UA),
    var isWindowsPhone = /(?:Windows Phone)/.test(ua),
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    var isAndroid = /(?:Android)/.test(ua),
    var isFireFox = /(?:Firefox)/.test(ua),
    var isChrome = /(?:Chrome|CriOS)/.test(ua),
    var isIpad = /(?:iPad|PlayBook)/.test(ua),
    var isTablet = /(?:iPad|PlayBook)/.test(ua)||(isFireFox && /(?:Tablet)/.test(ua)),
    var isSafari = /(?:Safari)/.test(ua),
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    var isOpera= /(?:Opera Mini)/.test(ua),
    var isUC = /(?:UCWEB|UCBrowser)/.test(ua),
    var isPc = !isPhone && !isAndroid && !isSymbian;
    return Browser;
    
}