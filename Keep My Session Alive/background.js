const targetUrl = "Target URL";

// Creat Alarm That Will Start After 5 Min And Will Work Every 5 Min
chrome.alarms.create("keepAlive", { delayInMinutes: 5, periodInMinutes: 5 });

// When Alarm Work Check if it's Name is KeepAlive and Then Look for Target Tab And Reload it
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "keepAlive") {
        chrome.tabs.query({ url: targetUrl + "/*" }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.reload(tabs[0].id);
            }
        });
    }
});

