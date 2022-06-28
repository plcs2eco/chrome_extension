setInterval(
function(){
    let date = new Date();
    document.getElementById("clock").textContent =date.getHours()+":"
    +("0"+date.getMinutes()).slice(-2)+":"
    +("0"+date.getSeconds()).slice(-2);
},1000)
// setInterval(function(){
//     chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
//         chrome.tabs.sendMessage(tabs[0].id, {data:"from POPUP script"})
//             .then((d)=>{console.log("popup:",d);})
//             .catch((e)=>{console.log("err:",e);})
//     });
// },10000)    

const fontColorEl = document.getElementById('fontcolor');
const messageEl = document.getElementById('message');
const submitBtnEl = document.getElementById('submit');

chrome.storage.local.get('selected_fontcolor', items => {
    fontColorEl.value = items.selected_fontcolor;
    messageEl.textContent = JSON.stringify(items);
  });

submitBtnEl.onclick = function(){
    chrome.storage.local.set({
        selected_fontcolor: fontColorEl.value,
        }, () => {
        messageEl.innerHTML = 'Saved';
        });
//         chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
//             chrome.tabs.sendMessage(tabs[0].id, {data:"from POPUP script"})
//             .catch((e)=>{console.log("err:",e);})
//         });
};


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("popup.js received:",request);
//     sendResponse({response:"popup successful"});
//     return Promise.resolve('done');
// });