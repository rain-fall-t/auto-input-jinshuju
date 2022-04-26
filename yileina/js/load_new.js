//这个就是用来输入字科符的
var inpEle = document.getElementById("stockCode");
var st = '000001'
var evt = new InputEvent('input', {
    inputType: 'insertText',
    data: st,
    dataTransfer: null,
    isComposing: false
});
inpEle.value = st;
inpEle.dispatchEvent(evt);

let keyCoke = 13
let keyboardEvent = document.createEvent('KeyboardEvent')
let initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'
keyboardEvent[initMethod]('keyup', true, true, window, false, false, false, false, keyCoke, 0)
document.getElementById('stockCode').dispatchEvent(keyboardEvent)