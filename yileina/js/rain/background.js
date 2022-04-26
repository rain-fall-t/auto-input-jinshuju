chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { };
    },
    {
        urls: ["https://www.bilibili.com/*"]
    },
    ["requestBody"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("1");
        console.log(details);
        if (details.method == 'POST' && details.requestBody.formData.radio != null) {
            var request = details.requestBody.formData;
            console.log("2");
            console.log(request);
            for (var i in request) request[i] = request[i][0];
            console.log("3");
            console.log(request);
            chrome.storage.local.set({ elec_request: request });
        }
    },
    { urls: ["http://202.120.163.129:88/Default.aspx"] },
    ["requestBody"]);