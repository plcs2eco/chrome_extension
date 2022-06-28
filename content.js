// setInterval( function(){
//     chrome.runtime.sendMessage({
//         greeting: "Contents"
//       }).then((d)=>{console.log(d);})
//       .catch((e)=>{console.log("error in content;",e)});
//         },10000)


// chrome.runtime.onMessage.addListener((request, sender,sendResponse) => {
//   console.log("content.js:",request);
//     sendResponse({response:"content received"});
//     return Promise.resolve('done');
// });
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("content.js:",request);
//   sendResponse({name:"content received"});
//   return true;
// });


let myPort = chrome.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(msg) {
  console.log("In content script, received message from background script: ");
  console.log(msg.greeting);
});

document.body.addEventListener("click", function() {
  console.log("clicked:",myPort);
  myPort.postMessage({greeting: "they clicked the page!"});
});
window.addEventListener('onload', ()=>{
  const result2 = await window.myApi.invoke('ichiri','hehehe');
  console.log("this is from extension content.js")
  alert("tsss");
  document.getElementById('btnTest').addEventListener('click', async() => {
    console.log("somethignnnnnn");
  });
});  
  // chrome.browserAction.onClicked.addListener(() => {
  //   console.log("browser action!")
  //))
