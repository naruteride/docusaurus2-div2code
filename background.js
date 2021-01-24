chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get('state', function (data) {
        if (data.state === 'on') {
            chrome.storage.sync.set({ state: 'off' });
            //do something, removing the script or whatever
        } else {
            chrome.storage.sync.set({ state: 'on' });
            //inject your script
        }
    });
});