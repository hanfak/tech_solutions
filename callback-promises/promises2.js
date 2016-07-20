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

(function main() {
  Promise.all([makeRequest('https://api.github.com/users/Amichai'), makeRequest('https://api.github.com/users/adamwiggins')])
  .then(function(response) {
    console.log(response[0]);
    console.log("Success! file one loadd");
    console.log(response[1]);
    console.log("Success! file two loadd");

  }, function(error) {
    console.error("Failed!", error);
  })
  .then(function(response) {
    console.log("All done");

  }, function(error) {
    console.error("Failed!", error);
  });

})();
