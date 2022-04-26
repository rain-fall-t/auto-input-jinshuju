function load() {
    chrome.storage.local.get(["name", "id","dorm"],
        function (items) {
            $("#name").val(items["name"] == null ? "" : items["name"]);
            $("#id").val(items["id"] == null ? "" : items["id"]);
            $("#dorm").val(items["dorm"] == null ? "" : items["dorm"]);
        }
    );
}

load();
//存储账号和密码
$("#name").keyup(function () {
    chrome.storage.local.set({ "name": $("#name").val() });
});

$("#id").keyup(function () {
    chrome.storage.local.set({ "id": $("#id").val() });
});

$("#dorm").keyup(function () {
    chrome.storage.local.set({ "dorm": $("#dorm").val() });
});

