// this code will be executed after page load

var element = document.getElementById('customfield_11112-val');
if (element) {
  if (element.childNodes.length === 1) {
    if (!element.innerText.includes("http")) {
      element.innerHTML = '<a href="http://esen-1332:1111' + element.innerHTML.trim() + '.html">' + element.innerHTML + '</a>'
    }
  }
}