let lastUrl = null;

new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
  if (document.readyState === 'ready' || document.readyState === 'complete') {

    createDoorsLink();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        createDoorsLink();
      }
    }
  }
}

function createDoorsLink() {
  setTimeout(() => {
    chrome.storage.sync.get({ "serverPath": "http://esen-1332:1111" }, function (result) {
      var element = document.getElementById('customfield_11112-val');
      if (element) {
        let elementChildNodesLength = element.childNodes.length

        if (!element.innerText.includes("http") && element.textContent.trim()[0] === "/") {
          element.innerHTML = '<a href="' + result.serverPath + element.textContent.trim() + '.html"><img id="Doors" height="20px" src="' + chrome.runtime.getURL("images/doors.png") + '">' + element.textContent + '</a>';

          if (elementChildNodesLength > 1) {
            element.innerHTML += '<span class="overlay-icon aui-icon aui-icon-small aui-iconfont-edit"></span>'
          }
        }

      }
    });
  }, 500);
}