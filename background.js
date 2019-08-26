function isCorrectUrl(current_url, whiteList, blackList) {
    for(let i = 0; i < whiteList.length; i ++) {
        if(!current_url.includes(whiteList[i])) {
            return false;
        }
    }
    for(let i = 0; i < blackList.length; i ++) {
        if(current_url.includes(blackList[i])) {
            return false;
        }
    }
    return true;
}
function changeFreelancerUrl(tab) {
    let current_url = tab.url;
    let find_url = 'freelancer.com/projects';
    let van_url = '?w=f';
    let str_tailer = 'details';
    let str_tailer2 = 'proposals';
    
    if(isCorrectUrl(current_url, [find_url],[van_url, str_tailer, str_tailer2])) {    
        let myNewUrl = current_url + "/?w=f"
        chrome.tabs.update(tab.id, {url: myNewUrl});
    }  
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {    
    // changeFreelancerUrl(tab);
});

chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == "changeColor"){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });