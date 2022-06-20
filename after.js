chrome.storage.sync.get({ "serverPath": "http://esen-1332:1111/" }, function (result) {
  var element = document.getElementById('customfield_11112-val');
  if (element) {
    if (element.childNodes.length === 1) {
      if (!element.innerText.includes("http")) {
        element.innerHTML = '<a href="' + result.serverPath + element.innerHTML.trim() + '.html">' + element.innerHTML + '</a>'
      }
    }
  }
});