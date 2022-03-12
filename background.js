// Check on refreshes for buttonv
// SO reference: https://stackoverflow.com/questions/20865581/chrome-extension-content-script-not-loaded-until-page-is-refreshed
console.log("Background!");
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  console.log("hello world");
  console.log("TabId: " + tabId)
  console.log("Change infor" + changeInfo.url);
  console.log("Tab url" + tab.url);
});