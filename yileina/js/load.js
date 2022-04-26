function fireKeyEvent(element, evtType, keyChar) {
    element.focus();
    var KeyboardEventInit = { key: keyChar, code: "", location: 0, repeat: false, isComposing: false };
    var evtObj = new KeyboardEvent(evtType, KeyboardEventInit);
    element.dispatchEvent(evtObj);
}

chrome.storage.local.get(["name", "id", "dorm"], function (items) {
    if (!(items["name"] && items["id"] && items["dorm"])) {
        console.log("failed");
        return;
    }
    var div_list = document.getElementsByClassName("ant-row ant-form-item sc-eCImPb BDvNi");
    setTimeout(() => {
        console.log(div_list.length);
        for (var i = 0; i < div_list.length; i++) {
            tmp = div_list[i].getElementsByClassName("label-item");
            tmp = tmp[0];
            switch (tmp.innerText) {
                case "姓名":
                    tmp_val1 = div_list[i].getElementsByClassName("ant-input");
                    tmp_val1 = tmp_val1[0];
                    setTimeout(() => {
                        fireKeyEvent(tmp_val1, "keydown", items["name"]);
                        tmp_val1.value = items["name"];
                    }, 300)
                    break;
                case "学号":
                    tmp_val2 = div_list[i].getElementsByClassName("ant-input");
                    tmp_val2 = tmp_val2[0];
                    setTimeout(() => {
                        fireKeyEvent(tmp_val2, "keydown", items["id"]);
                        tmp_val2.value = items["id"];
                    }, 700)
                    break;
                case "宿舍号":
                    tmp_val3 = div_list[i].getElementsByClassName("ant-input");
                    tmp_val3 = tmp_val3[0];
                    setTimeout(() => {
                        fireKeyEvent(tmp_val3, "keydown", items["dorm"]);
                        tmp_val3.value = items["dorm"];
                    }, 1000)
                    break;
                default:
                    break;
            }
        }
    }, 1000);
    
});