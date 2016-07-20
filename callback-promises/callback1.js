function makeRequest(url){
  var request = new XMLHttpRequest();
  request.open('get', url, true);
  request.onerror = function (e) {
    console.log('Network Error!!!' );
    console.error(request.statusText);
  };
  request.send();
  return request;
}

function loadPages(files, _callback) {
  var files_count = files.length;
  var files_loaded = 0;

  files.forEach(function(file) {
    var request = makeRequest(file);
    request.onload = function(e) {
      if (request.readyState === 4 && request.status === 200) {
        console.log(JSON.parse(request.responseText));
        files_loaded++;
        console.log("file " + files_loaded + ' is loaded');

        if (files_loaded === files_count) {
          _callback();
        }
      } else {
        console.log('Error!!! 2');
      }
    };
  });
}
//Random files to load
var users = ['https://api.github.com/users/Amichai',
            'https://api.github.com/users/adamwiggins',
            'https://api.github.com/users/fzzr-'];

(function runFunction(){
  loadPages(users, function() {
      // Any code to do when all files are loaded
      console.log('All files loaded. Finished');
    });
})();
