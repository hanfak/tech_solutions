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

var urls = ['https://api.github.com/users/Amichai',
            'https://api.github.com/users/adamwiggins',
            'https://api.github.com/users/fzzr-'];

function getAllUrl(urls){
  return urls.map(makeRequest);
}

function main(urls){
  Promise.all(getAllUrl(urls))
  .then(function(response) {
    console.log("Success!");
    var data = [];
    response.forEach(function(r){
      data.push(r);
      console.log(r);
      console.log(r.login+' done');
    });

    console.log("All Done", data);
  }, function(error) {
    console.error("Failed!", error);
  });
}

main(urls);
