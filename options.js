// Saves options to chrome.storage
function save_options() {
  var spath = document.getElementById("serverPath").value;

  chrome.storage.sync.set({ "serverPath": spath }, function () {
    console.log('Value is set to ' + spath);

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    serverPath: 'http://esen-1332:1111/',
  }, function (items) {
    document.getElementById("serverPath").value = items.serverPath;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);