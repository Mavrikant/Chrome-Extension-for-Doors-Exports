document.getElementById("openExportServer").onclick = function () {
  chrome.storage.sync.get(
    { serverPath: "http://esen-1332:1111" },
    function (result) {
      var spath = result.serverPath;
      chrome.tabs.create({ url: spath });
    }
  );
};
