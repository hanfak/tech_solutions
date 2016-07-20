function makeRequest(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.readyState === 4 && req.status == 200) {
        resolve(JSON.parse(req.responseText));
      }
      else {
        console.log('error here!!!');
      }
    };

    req.onerror = function() {
      console.log('network error here!!!');
    };

    req.send(null);
  });
}

makeRequest('https://api.github.com/users/Amichai').then(function(response) {
  console.log(response);
  console.log("Success! data loaded");
}, function(error) {
  console.error("Failed!", error);
});
